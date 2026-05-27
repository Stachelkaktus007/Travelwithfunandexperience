// DOM Elements
const searchInput = document.getElementById('searchInput');
const continentFilter = document.getElementById('continentFilter');
const priceFilter = document.getElementById('priceFilter');
const activityFilter = document.getElementById('activityFilter');
const searchBtn = document.getElementById('searchBtn');
const destinationsGrid = document.getElementById('destinationsGrid');
const activitiesGrid = document.getElementById('activitiesGrid');
const restaurantsGrid = document.getElementById('restaurantsGrid');
const accommodationsGrid = document.getElementById('accommodationsGrid');
const modal = document.getElementById('detailModal');
const closeBtn = document.querySelector('.close-btn');
const filterTags = document.querySelector('.filter-tags');

// Current filters state
let currentFilters = {
  search: '',
  continent: 'all',
  price: 'all',
  activity: 'all'
};

// Initialize
document.addEventListener('DOMContentLoaded', function() {
  renderPopularDestinations();
  renderDestinations(destinations);
  renderActivities(activities);
  renderRestaurants(restaurants);
  renderAccommodations(accommodations);
  setupEventListeners();
});

// Event Listeners
function setupEventListeners() {
  searchBtn.addEventListener('click', filterDestinations);
  searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') filterDestinations();
  });
  continentFilter.addEventListener('change', filterDestinations);
  priceFilter.addEventListener('change', filterDestinations);
  activityFilter.addEventListener('change', filterDestinations);
  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', function(e) {
    if (e.target === modal) closeModal();
  });
}

// Render Destinations
function renderDestinations(destinationList) {
  destinationsGrid.innerHTML = '';
  if (destinationList.length === 0) {
    destinationsGrid.innerHTML = '<p class="text-center" style="grid-column: 1/-1; padding: 2rem;">Keine Ziele gefunden. Versuchen Sie andere Suchkriterien.</p>';
    return;
  }
  
  destinationList.forEach(destination => {
    const card = createDestinationCard(destination);
    destinationsGrid.appendChild(card);
  });
}

// Create Destination Card
function createDestinationCard(destination) {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <div class="card-image">${destination.image}</div>
    <div class="card-content">
      <h3 class="card-title">${destination.name}</h3>
      <p class="card-subtitle">${destination.country}</p>
      <p class="card-description">${destination.description}</p>
      <div class="card-rating">
        <span class="stars">${'★'.repeat(Math.round(destination.rating))}${'☆'.repeat(5 - Math.round(destination.rating))}</span>
        <span>${destination.rating}/5 (${destination.reviews} Bewertungen)</span>
      </div>
      <p class="card-price">${destination.price}</p>
      <div class="card-tags">
        ${destination.activities.map(activity => `<span class="tag">${activity}</span>`).join('')}
      </div>
    </div>
  `;
  
  card.addEventListener('click', () => showDestinationDetails(destination));
  return card;
}

// Render Activities
function renderActivities(activityList) {
  activitiesGrid.innerHTML = '';
  activityList.forEach(activity => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="card-image">${activity.icon}</div>
      <div class="card-content">
        <h3 class="card-title">${activity.name}</h3>
        <p class="card-description">${activity.description}</p>
        <div style="margin: 0.8rem 0;">
          <strong>Schwierigkeit:</strong> ${activity.difficulty}<br>
          <strong>Dauer:</strong> ${activity.duration}<br>
          <strong>Preis:</strong> ${activity.price}
        </div>
        <div class="card-tags">
          <span class="tag">Verfügbar: ${activity.destinations.length} Orte</span>
        </div>
      </div>
    `;
    activitiesGrid.appendChild(card);
  });
}

// Render Restaurants
function renderRestaurants(restaurantList) {
  restaurantsGrid.innerHTML = '';
  restaurantList.forEach(restaurant => {
    const destination = destinations.find(d => d.id === restaurant.destination);
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="card-image">🍽️</div>
      <div class="card-content">
        <h3 class="card-title">${restaurant.name}</h3>
        <p class="card-subtitle">${destination.name} - ${restaurant.cuisine}</p>
        <p class="card-description">${restaurant.description}</p>
        <div class="card-rating">
          <span class="stars">${'★'.repeat(Math.round(restaurant.rating))}${'☆'.repeat(5 - Math.round(restaurant.rating))}</span>
          <span>${restaurant.rating}/5 (${restaurant.reviews})</span>
        </div>
        <p class="card-price">Preis: ${restaurant.price}</p>
      </div>
    `;
    restaurantsGrid.appendChild(card);
  });
}

// Render Accommodations
function renderAccommodations(accommodationList) {
  accommodationsGrid.innerHTML = '';
  accommodationList.forEach(accommodation => {
    const destination = destinations.find(d => d.id === accommodation.destination);
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="card-image">🏨</div>
      <div class="card-content">
        <h3 class="card-title">${accommodation.name}</h3>
        <p class="card-subtitle">${destination.name} - ${accommodation.type}</p>
        <p class="card-description">${accommodation.description}</p>
        <div class="card-rating">
          <span class="stars">${'★'.repeat(accommodation.stars)}${'☆'.repeat(5 - accommodation.stars)}</span>
          <span>${accommodation.rating}/5 (${accommodation.reviews})</span>
        </div>
        <p class="card-price">€${accommodation.price}/Nacht</p>
      </div>
    `;
    accommodationsGrid.appendChild(card);
  });
}

// Render Popular Destinations
function renderPopularDestinations() {
  const popularContainer = document.getElementById('popularDestinations');
  if (!popularContainer) return;
  
  const popular = destinations.sort((a, b) => b.popularity - a.popularity).slice(0, 8);
  
  let html = '<div class="popular-grid">';
  popular.forEach(dest => {
    html += `
      <div class="popular-item" onclick="searchAndFilter('${dest.name}')">
        <div class="popular-icon">${dest.image}</div>
        <div class="popular-name">${dest.name}</div>
        <div class="popular-info">${dest.country}</div>
      </div>
    `;
  });
  html += '</div>';
  
  popularContainer.innerHTML = html;
}

// Filter Destinations
function filterDestinations() {
  currentFilters.search = searchInput.value.toLowerCase();
  currentFilters.continent = continentFilter.value;
  currentFilters.price = priceFilter.value;
  currentFilters.activity = activityFilter.value;

  updateFilterTags();

  let filtered = destinations.filter(destination => {
    // Search filter
    if (currentFilters.search && 
        !destination.name.toLowerCase().includes(currentFilters.search) &&
        !destination.country.toLowerCase().includes(currentFilters.search)) {
      return false;
    }

    // Continent filter
    if (currentFilters.continent !== 'all' && destination.continent !== currentFilters.continent) {
      return false;
    }

    // Price filter
    if (currentFilters.price !== 'all') {
      const destPrice = destination.price.length;
      const maxPrice = currentFilters.price === 'budget' ? 2 : 
                       currentFilters.price === 'medium' ? 3 : 4;
      if (destPrice > maxPrice) return false;
    }

    // Activity filter
    if (currentFilters.activity !== 'all') {
      const activityName = activities.find(a => a.id == currentFilters.activity)?.name;
      if (!destination.activities.includes(activityName)) return false;
    }

    return true;
  });

  renderDestinations(filtered);
}

// Update Filter Tags Display
function updateFilterTags() {
  let tags = [];
  
  if (currentFilters.search) {
    tags.push(`Suche: "${currentFilters.search}"`);
  }
  if (currentFilters.continent !== 'all') {
    tags.push(`Kontinent: ${currentFilters.continent}`);
  }
  if (currentFilters.price !== 'all') {
    const priceNames = { budget: 'Budget', medium: 'Mittel', luxury: 'Luxus' };
    tags.push(`Preis: ${priceNames[currentFilters.price]}`);
  }
  if (currentFilters.activity !== 'all') {
    const activityName = activities.find(a => a.id == currentFilters.activity)?.name;
    tags.push(`Aktivität: ${activityName}`);
  }

  filterTags.innerHTML = tags.map(tag => `<div class="filter-tag">${tag} <span onclick="clearFilters()">✕</span></div>`).join('');
}

// Clear Filters
function clearFilters() {
  searchInput.value = '';
  continentFilter.value = 'all';
  priceFilter.value = 'all';
  activityFilter.value = 'all';
  currentFilters = { search: '', continent: 'all', price: 'all', activity: 'all' };
  updateFilterTags();
  renderDestinations(destinations);
}

// Search and Filter Helper
function searchAndFilter(query) {
  searchInput.value = query;
  filterDestinations();
  document.getElementById('destinationsSection').scrollIntoView({ behavior: 'smooth' });
}

// Modal Functions
function showDestinationDetails(destination) {
  const accommodationsForDest = accommodations.filter(a => a.destination === destination.id);
  const restaurantsForDest = restaurants.filter(r => r.destination === destination.id);

  const modalContent = document.querySelector('.modal-content');
  modalContent.innerHTML = `
    <span class="close-btn">&times;</span>
    <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1.5rem;">
      <div>
        <h2 style="font-size: 2.5rem; margin-bottom: 0.5rem;">${destination.image} ${destination.name}</h2>
        <p style="font-size: 1.1rem; color: var(--text-light);">${destination.country}, ${destination.continent}</p>
      </div>
      <span style="font-size: 1.1rem; color: var(--secondary-color); font-weight: bold;">${destination.price}</span>
    </div>

    <p style="font-size: 1rem; margin-bottom: 1.5rem; line-height: 1.6;">${destination.description}</p>

    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-bottom: 2rem;">
      <div style="background: var(--light-bg); padding: 1rem; border-radius: 5px;">
        <strong>Bewertung</strong><br>
        <span class="stars">${'★'.repeat(Math.round(destination.rating))}${'☆'.repeat(5 - Math.round(destination.rating))}</span>
        <br>${destination.rating}/5 (${destination.reviews} Bewertungen)
      </div>
      <div style="background: var(--light-bg); padding: 1rem; border-radius: 5px;">
        <strong>Popularität</strong><br>
        ${'⭐'.repeat(destination.popularity/2)}
      </div>
    </div>

    <h3 style="margin-top: 2rem; margin-bottom: 1rem;">🎯 Aktivitäten</h3>
    <div class="card-tags" style="margin-bottom: 2rem;">
      ${destination.activities.map(activity => `<span class="tag">${activity}</span>`).join('')}
    </div>

    ${accommodationsForDest.length > 0 ? `
      <h3 style="margin-top: 2rem; margin-bottom: 1rem;">🏨 Unterkünfte</h3>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
        ${accommodationsForDest.map(acc => `
          <div style="background: var(--light-bg); padding: 1rem; border-radius: 5px; border-left: 4px solid var(--accent-color);">
            <strong>${acc.name}</strong><br>
            <span style="color: var(--text-light);">${acc.type}</span><br>
            <span class="stars">${'★'.repeat(acc.stars)}${'☆'.repeat(5 - acc.stars)}</span> ${acc.rating}/5<br>
            <span style="font-weight: bold; color: var(--secondary-color);">€${acc.price}/Nacht</span>
          </div>
        `).join('')}
      </div>
    ` : ''}

    ${restaurantsForDest.length > 0 ? `
      <h3 style="margin-top: 2rem; margin-bottom: 1rem;">🍽️ Restaurants</h3>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
        ${restaurantsForDest.map(rest => `
          <div style="background: var(--light-bg); padding: 1rem; border-radius: 5px; border-left: 4px solid var(--success-color);">
            <strong>${rest.name}</strong><br>
            <span style="color: var(--text-light);">${rest.cuisine}</span><br>
            <span class="stars">${'★'.repeat(Math.round(rest.rating))}${'☆'.repeat(5 - Math.round(rest.rating))}</span> ${rest.rating}/5<br>
            <span style="font-weight: bold;">Preis: ${rest.price}</span>
          </div>
        `).join('')}
      </div>
    ` : ''}
  `;

  document.querySelector('.close-btn').addEventListener('click', closeModal);
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Populate filter dropdowns
document.addEventListener('DOMContentLoaded', function() {
  // Populate continents
  const continents = [...new Set(destinations.map(d => d.continent))];
  const continentSelect = document.getElementById('continentFilter');
  continents.forEach(continent => {
    const option = document.createElement('option');
    option.value = continent;
    option.textContent = continent;
    continentSelect.appendChild(option);
  });
});
