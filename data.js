// Reiseziele mit Informationen
const destinations = [
  {
    id: 1,
    name: "Tokyo",
    country: "Japan",
    continent: "Asien",
    image: "🗼",
    description: "Moderne Metropole mit Tradition",
    popularity: 9,
    price: "€€€",
    activities: ["Sightseeing", "Kultur", "Essen"],
    rating: 4.8,
    reviews: 324
  },
  {
    id: 2,
    name: "Paris",
    country: "Frankreich",
    continent: "Europa",
    image: "🗽",
    description: "Die Stadt der Liebe und Kunst",
    popularity: 10,
    price: "€€€",
    activities: ["Sightseeing", "Kunst & Kultur", "Essen", "Nachtleben"],
    rating: 4.9,
    reviews: 562
  },
  {
    id: 3,
    name: "London",
    country: "Vereinigtes Königreich",
    continent: "Europa",
    image: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    description: "Geschichte, Kultur und moderne Architektur",
    popularity: 9,
    price: "€€€",
    activities: ["Sightseeing", "Kultur", "Shopping", "Nachtleben"],
    rating: 4.7,
    reviews: 445
  },
  {
    id: 4,
    name: "Seychellen",
    country: "Seychellen",
    continent: "Afrika",
    image: "🏖️",
    description: "Tropenparadies mit Traumstränden",
    popularity: 8,
    price: "€€€€",
    activities: ["Strand", "Schnorcheln", "Tauchen", "Entspannung"],
    rating: 4.9,
    reviews: 289
  },
  {
    id: 5,
    name: "Bangkok",
    country: "Thailand",
    continent: "Asien",
    image: "🏯",
    description: "Tempel, Märkte und pulsierendes Leben",
    popularity: 8,
    price: "€€",
    activities: ["Kultur", "Märkte", "Essen", "Nachtleben"],
    rating: 4.6,
    reviews: 378
  },
  {
    id: 6,
    name: "Bali",
    country: "Indonesien",
    continent: "Asien",
    image: "🌴",
    description: "Paradies mit Tempeln und Reisfeldern",
    popularity: 9,
    price: "€€",
    activities: ["Strand", "Wandern", "Yoga", "Kultur", "Tauchen"],
    rating: 4.8,
    reviews: 512
  },
  {
    id: 7,
    name: "Barcelona",
    country: "Spanien",
    continent: "Europa",
    image: "🏖️",
    description: "Gaudí, Strand und mediterrane Kultur",
    popularity: 9,
    price: "€€",
    activities: ["Architektur", "Strand", "Essen", "Nachtleben"],
    rating: 4.7,
    reviews: 401
  },
  {
    id: 8,
    name: "Dubai",
    country: "Vereinigte Arabische Emirate",
    continent: "Asien",
    image: "🌇",
    description: "Luxus und Moderne in der Wüste",
    popularity: 8,
    price: "€€€€",
    activities: ["Shopping", "Luxus", "Strand", "Motorsport"],
    rating: 4.6,
    reviews: 334
  },
  {
    id: 9,
    name: "Schweiz - Berggebiet",
    country: "Schweiz",
    continent: "Europa",
    image: "⛰️",
    description: "Atemberaubende Berglandschaften",
    popularity: 8,
    price: "€€€",
    activities: ["Wandern", "Gleitschirmfliegen", "Ski", "Natur"],
    rating: 4.9,
    reviews: 267
  },
  {
    id: 10,
    name: "Ägypten - Kairo",
    country: "Ägypten",
    continent: "Afrika",
    image: "🔺",
    description: "Antike Wunder und faszinierende Geschichte",
    popularity: 7,
    price: "€€",
    activities: ["Geschichte", "Kultur", "Sightseeing"],
    rating: 4.5,
    reviews: 198
  }
];

// Aktivitäten
const activities = [
  {
    id: 1,
    name: "Tauchen",
    icon: "🤿",
    description: "Erkunden Sie die Unterwasserwelt",
    difficulty: "Mittel",
    destinations: [4, 6, 8],
    price: "€€",
    duration: "2-4 Stunden"
  },
  {
    id: 2,
    name: "Wanderungen",
    icon: "🥾",
    description: "Zu Fuß die Natur erkunden",
    difficulty: "Leicht bis Schwer",
    destinations: [9, 5],
    price: "€",
    duration: "Halbtag bis Ganztag"
  },
  {
    id: 3,
    name: "Schnorcheln",
    icon: "🏊",
    description: "Bunte Korallenriffe entdecken",
    difficulty: "Leicht",
    destinations: [4, 6],
    price: "€",
    duration: "1-2 Stunden"
  },
  {
    id: 4,
    name: "Gleitschirmfliegen",
    icon: "🪂",
    description: "Fliegen Sie über atemberaubende Landschaften",
    difficulty: "Schwer",
    destinations: [9],
    price: "€€€",
    duration: "2-3 Stunden"
  },
  {
    id: 5,
    name: "Kulinarische Tours",
    icon: "🍜",
    description: "Entdecken Sie regionale Küche",
    difficulty: "Leicht",
    destinations: [1, 2, 3, 5, 7],
    price: "€€",
    duration: "2-3 Stunden"
  },
  {
    id: 6,
    name: "Kulturelle Besichtigungen",
    icon: "🏛️",
    description: "Museen und historische Stätten",
    difficulty: "Leicht",
    destinations: [1, 2, 3, 5, 10],
    price: "€€",
    duration: "2-4 Stunden"
  },
  {
    id: 7,
    name: "Yoga & Wellness",
    icon: "🧘",
    description: "Entspannung und innere Balance",
    difficulty: "Leicht",
    destinations: [6, 4],
    price: "€€",
    duration: "1-2 Stunden"
  },
  {
    id: 8,
    name: "Shopping",
    icon: "🛍️",
    description: "Einkaufen und Souvenirs",
    difficulty: "Leicht",
    destinations: [1, 2, 3, 8],
    price: "€€€",
    duration: "Flexibel"
  }
];

// Unterkünfte
const accommodations = [
  {
    id: 1,
    destination: 2, // Paris
    name: "Boutique Hotel Paris",
    type: "Hotel",
    stars: 5,
    price: 250,
    rating: 4.9,
    reviews: 456,
    description: "Luxuriöses Boutique Hotel im Herzen von Paris"
  },
  {
    id: 2,
    destination: 2, // Paris
    name: "Budget Hostel Paris",
    type: "Hostel",
    stars: 3,
    price: 35,
    rating: 4.2,
    reviews: 234,
    description: "Günstiges und freundliches Hostel"
  },
  {
    id: 3,
    destination: 4, // Seychellen
    name: "Strand Resort Seychellen",
    type: "Resort",
    stars: 5,
    price: 400,
    rating: 4.9,
    reviews: 289,
    description: "Luxus-Resort mit direktem Strandzugang"
  },
  {
    id: 4,
    destination: 4, // Seychellen
    name: "Beachfront Bungalow",
    type: "Bungalow",
    stars: 4,
    price: 180,
    rating: 4.7,
    reviews: 145,
    description: "Komfortable Bungalows am Strand"
  },
  {
    id: 5,
    destination: 1, // Tokyo
    name: "Modern Tokyo Hotel",
    type: "Hotel",
    stars: 4,
    price: 120,
    rating: 4.8,
    reviews: 378,
    description: "Modernes Hotel mit traditionellem Flair"
  },
  {
    id: 6,
    destination: 6, // Bali
    name: "Yoga Retreat Bali",
    type: "Guesthouse",
    stars: 4,
    price: 80,
    rating: 4.8,
    reviews: 267,
    description: "Friedliches Yoga & Wellness Retreat"
  },
  {
    id: 7,
    destination: 3, // London
    name: "Central London Apartments",
    type: "Apartment",
    stars: 4,
    price: 160,
    rating: 4.6,
    reviews: 312,
    description: "Zentral gelegene Apartments"
  },
  {
    id: 8,
    destination: 9, // Schweiz
    name: "Alpine Hotel Schweiz",
    type: "Hotel",
    stars: 4,
    price: 200,
    rating: 4.9,
    reviews: 201,
    description: "Charmantes Hotel mit Bergblick"
  }
];

// Restaurants
const restaurants = [
  {
    id: 1,
    destination: 2, // Paris
    name: "Le Petit Café",
    cuisine: "Französisch",
    stars: 5,
    price: "€€€",
    rating: 4.8,
    reviews: 234,
    description: "Klassische französische Küche"
  },
  {
    id: 2,
    destination: 1, // Tokyo
    name: "Sushi Master",
    cuisine: "Japanisch",
    stars: 5,
    price: "€€€",
    rating: 4.9,
    reviews: 312,
    description: "Authentisches Sushi & Kaiseki"
  },
  {
    id: 3,
    destination: 5, // Bangkok
    name: "Street Food Market",
    cuisine: "Thai",
    stars: 4,
    price: "€",
    rating: 4.6,
    reviews: 456,
    description: "Authentischer Thai Street Food"
  },
  {
    id: 4,
    destination: 7, // Barcelona
    name: "Tapas & Wine Bar",
    cuisine: "Spanisch",
    stars: 4,
    price: "€€",
    rating: 4.7,
    reviews: 289,
    description: "Traditionelle Tapas mit Weinauswahl"
  },
  {
    id: 5,
    destination: 4, // Seychellen
    name: "Beach Restaurant",
    cuisine: "Fisch & Meeresfrüchte",
    stars: 4,
    price: "€€€",
    rating: 4.8,
    reviews: 178,
    description: "Frischer Fisch mit Strandblick"
  },
  {
    id: 6,
    destination: 3, // London
    name: "Indian Spice House",
    cuisine: "Indisch",
    stars: 4,
    price: "€€",
    rating: 4.5,
    reviews: 201,
    description: "Köstliche indische Currys"
  }
];
