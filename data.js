// Reiseziele mit Informationen
const destinations = [
  {
    id: 1,
    name: "Tokyo",
    country: "Japan",
    continent: "Asien",
    image: "https://images.unsplash.com/photo-1516457612034-2640a842d357?w=600&h=400&fit=crop",
    description: "Moderne Metropole mit Tradition, futuristische Architektur und traditionelle Tempel",
    popularity: 10,
    price: "€€€",
    activities: ["Sightseeing", "Kultur", "Essen", "Shopping", "Nachtleben"],
    rating: 4.8,
    reviews: 524
  },
  {
    id: 2,
    name: "Paris",
    country: "Frankreich",
    continent: "Europa",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&h=400&fit=crop",
    description: "Die Stadt der Liebe mit eleganter Architektur, Museen und romantischen Cafés",
    popularity: 10,
    price: "€€€",
    activities: ["Sightseeing", "Kunst & Kultur", "Essen", "Nachtleben", "Shopping"],
    rating: 4.9,
    reviews: 892
  },
  {
    id: 3,
    name: "London",
    country: "Vereinigtes Königreich",
    continent: "Europa",
    image: "https://images.unsplash.com/photo-1533631716714-ba60a88286ba?w=600&h=400&fit=crop",
    description: "Geschichte, Kultur und moderne Architektur an der Themse",
    popularity: 9,
    price: "€€€",
    activities: ["Sightseeing", "Kultur", "Shopping", "Nachtleben", "Theater"],
    rating: 4.7,
    reviews: 745
  },
  {
    id: 4,
    name: "Seychellen",
    country: "Seychellen",
    continent: "Afrika",
    image: "https://images.unsplash.com/photo-1514282401047-7e6e5d46f96d?w=600&h=400&fit=crop",
    description: "Tropenparadies mit kristallklarem Wasser, weißen Stränden und Korallenriffen",
    popularity: 8,
    price: "€€€€",
    activities: ["Strand", "Schnorcheln", "Tauchen", "Entspannung", "Wassersport"],
    rating: 4.9,
    reviews: 456
  },
  {
    id: 5,
    name: "Bangkok",
    country: "Thailand",
    continent: "Asien",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
    description: "Tempel, bunte Märkte, lebendiges Nachtleben und authentische Straßenküche",
    popularity: 9,
    price: "€€",
    activities: ["Kultur", "Märkte", "Essen", "Nachtleben", "Tempel"],
    rating: 4.6,
    reviews: 678
  },
  {
    id: 6,
    name: "Bali",
    country: "Indonesien",
    continent: "Asien",
    image: "https://images.unsplash.com/photo-1587409946674-64a88adc0903?w=600&h=400&fit=crop",
    description: "Tropisches Paradies mit Reisfeldern, alten Tempeln und wunderschönen Stränden",
    popularity: 9,
    price: "€€",
    activities: ["Strand", "Wandern", "Yoga", "Kultur", "Tauchen"],
    rating: 4.8,
    reviews: 812
  },
  {
    id: 7,
    name: "Barcelona",
    country: "Spanien",
    continent: "Europa",
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=600&h=400&fit=crop",
    description: "Gaudís Meisterwerke, Strand und mediterrane Kultur vereint",
    popularity: 9,
    price: "€€",
    activities: ["Architektur", "Strand", "Essen", "Nachtleben", "Shopping"],
    rating: 4.7,
    reviews: 701
  },
  {
    id: 8,
    name: "Dubai",
    country: "Vereinigte Arabische Emirate",
    continent: "Asien",
    image: "https://images.unsplash.com/photo-1512453475872-5bebb7bc7c94?w=600&h=400&fit=crop",
    description: "Luxus-Oasen, atemberaubende Wolkenkratzer und Wüstensafaris",
    popularity: 8,
    price: "€€€€",
    activities: ["Shopping", "Luxus", "Strand", "Motorsport", "Wüste"],
    rating: 4.6,
    reviews: 534
  },
  {
    id: 9,
    name: "Interlaken",
    country: "Schweiz",
    continent: "Europa",
    image: "https://images.unsplash.com/photo-1531336615957-1a0da6c16f39?w=600&h=400&fit=crop",
    description: "Malerische Berglandschaften mit majestätischen Alpengipfeln",
    popularity: 8,
    price: "€€€",
    activities: ["Wandern", "Gleitschirmfliegen", "Ski", "Natur", "Klettern"],
    rating: 4.9,
    reviews: 567
  },
  {
    id: 10,
    name: "Kairo",
    country: "Ägypten",
    continent: "Afrika",
    image: "https://images.unsplash.com/photo-1537225228614-56cc30d0cbbf?w=600&h=400&fit=crop",
    description: "Antike Wunder, die Pyramiden von Giza und das Tal der Könige",
    popularity: 8,
    price: "€€",
    activities: ["Geschichte", "Kultur", "Sightseeing", "Museen", "Nilkreuzfahrten"],
    rating: 4.5,
    reviews: 398
  },
  {
    id: 11,
    name: "New York",
    country: "USA",
    continent: "Nordamerika",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&h=400&fit=crop",
    description: "Die Stadt, die niemals schläft, mit ikonischen Wolkenkratzern und Kultur",
    popularity: 10,
    price: "€€€",
    activities: ["Shopping", "Kultur", "Nachtleben", "Museen", "Broadway"],
    rating: 4.8,
    reviews: 934
  },
  {
    id: 12,
    name: "Rom",
    country: "Italien",
    continent: "Europa",
    image: "https://images.unsplash.com/photo-1552832230-636bacf1c91d?w=600&h=400&fit=crop",
    description: "Ewige Stadt voller antiker Ruinen, Renaissance-Kunst und italienischer Kultur",
    popularity: 10,
    price: "€€€",
    activities: ["Geschichte", "Kultur", "Essen", "Architektur", "Museen"],
    rating: 4.9,
    reviews: 876
  },
  {
    id: 13,
    name: "Venedig",
    country: "Italien",
    continent: "Europa",
    image: "https://images.unsplash.com/photo-1515814472071-4d632dde2d4d?w=600&h=400&fit=crop",
    description: "Romantische Lagunenstadt mit Kanälen, Brücken und Gondeln",
    popularity: 9,
    price: "€€€",
    activities: ["Gondel-Fahrten", "Essen", "Kultur", "Architektur", "Shopping"],
    rating: 4.8,
    reviews: 723
  },
  {
    id: 14,
    name: "Amsterdam",
    country: "Niederlande",
    continent: "Europa",
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=600&h=400&fit=crop",
    description: "Fahrrad-Stadt mit Kanälen, Museen und vibrantem Nachtleben",
    popularity: 8,
    price: "€€",
    activities: ["Fahrrad-Touren", "Museen", "Essen", "Nachtleben", "Shopping"],
    rating: 4.7,
    reviews: 645
  },
  {
    id: 15,
    name: "Berlin",
    country: "Deutschland",
    continent: "Europa",
    image: "https://images.unsplash.com/photo-1571046613040-91e8f286bd41?w=600&h=400&fit=crop",
    description: "Geschichte, Kultur, Museen und pulsierendes Nachtleben",
    popularity: 8,
    price: "€€",
    activities: ["Geschichte", "Museen", "Nachtleben", "Kultur", "Street Art"],
    rating: 4.6,
    reviews: 534
  },
  {
    id: 16,
    name: "Malediven",
    country: "Malediven",
    continent: "Asien",
    image: "https://images.unsplash.com/photo-1551244072-5d12893278ab?w=600&h=400&fit=crop",
    description: "Überwater-Bungalows und unberührte Korallenriffe",
    popularity: 9,
    price: "€€€€",
    activities: ["Strand", "Tauchen", "Schnorcheln", "Entspannung", "Wassersport"],
    rating: 4.9,
    reviews: 612
  },
  {
    id: 17,
    name: "Melbourne",
    country: "Australien",
    continent: "Ozeanien",
    image: "https://images.unsplash.com/photo-1584179663276-6b6d4f1ea97a?w=600&h=400&fit=crop",
    description: "Moderne Stadt mit großartiger Straßenkunst und Kaffekultur",
    popularity: 7,
    price: "€€€",
    activities: ["Street Art", "Essen", "Kultur", "Nachtleben", "Shopping"],
    rating: 4.7,
    reviews: 456
  },
  {
    id: 18,
    name: "Singapur",
    country: "Singapur",
    continent: "Asien",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
    description: "Futuristische Stadtstadt mit Hochtechnik und Multikulturalität",
    popularity: 8,
    price: "€€€",
    activities: ["Shopping", "Kultur", "Essen", "Nachtleben", "Natur"],
    rating: 4.7,
    reviews: 534
  },
  {
    id: 19,
    name: "Istanbul",
    country: "Türkei",
    continent: "Europa/Asien",
    image: "https://images.unsplash.com/photo-1524521752051-7bea73e72406?w=600&h=400&fit=crop",
    description: "Brücke zwischen Ost und West mit historischen Moscheen und Basaren",
    popularity: 8,
    price: "€€",
    activities: ["Geschichte", "Kultur", "Märkte", "Essen", "Architektur"],
    rating: 4.6,
    reviews: 478
  },
  {
    id: 20,
    name: "Prag",
    country: "Tschechien",
    continent: "Europa",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop",
    description: "Märchenhafte Altstadt mit Schlössern und romantischen Brücken",
    popularity: 8,
    price: "€€",
    activities: ["Geschichte", "Architektur", "Essen", "Kultur", "Nachtleben"],
    rating: 4.7,
    reviews: 567
  }
];

// Aktivitäten
const activities = [
  {
    id: 1,
    name: "Tauchen",
    icon: "🤿",
    description: "Erkunden Sie die Unterwasserwelt mit professionellen Führern",
    difficulty: "Mittel",
    destinations: [4, 6, 8, 16, 18],
    price: "€€",
    duration: "2-4 Stunden"
  },
  {
    id: 2,
    name: "Wanderungen",
    icon: "🥾",
    description: "Zu Fuß die Natur und Berglandschaften erkunden",
    difficulty: "Leicht bis Schwer",
    destinations: [9, 5, 6, 16],
    price: "€",
    duration: "Halbtag bis Ganztag"
  },
  {
    id: 3,
    name: "Schnorcheln",
    icon: "🏊",
    description: "Bunte Korallenriffe und tropische Fische entdecken",
    difficulty: "Leicht",
    destinations: [4, 6, 16, 18],
    price: "€",
    duration: "1-2 Stunden"
  },
  {
    id: 4,
    name: "Gleitschirmfliegen",
    icon: "🪂",
    description: "Fliegen Sie über atemberaubende Landschaften",
    difficulty: "Schwer",
    destinations: [9, 6],
    price: "€€€",
    duration: "2-3 Stunden"
  },
  {
    id: 5,
    name: "Kulinarische Tours",
    icon: "🍜",
    description: "Entdecken Sie regionale Küche und lokale Märkte",
    difficulty: "Leicht",
    destinations: [1, 2, 3, 5, 7, 12, 13, 19, 20],
    price: "€€",
    duration: "2-3 Stunden"
  },
  {
    id: 6,
    name: "Kulturelle Besichtigungen",
    icon: "🏛️",
    description: "Museen, historische Stätten und architektonische Meisterwerke",
    difficulty: "Leicht",
    destinations: [1, 2, 3, 5, 10, 11, 12, 13, 14, 15, 19, 20],
    price: "€€",
    duration: "2-4 Stunden"
  },
  {
    id: 7,
    name: "Yoga & Wellness",
    icon: "🧘",
    description: "Entspannung und innere Balance finden",
    difficulty: "Leicht",
    destinations: [6, 4, 16],
    price: "€€",
    duration: "1-2 Stunden"
  },
  {
    id: 8,
    name: "Shopping",
    icon: "🛍️",
    description: "Einkaufen in Boutiquen, Märkten und großen Malls",
    difficulty: "Leicht",
    destinations: [1, 2, 3, 8, 11, 14, 18],
    price: "€€€",
    duration: "Flexibel"
  },
  {
    id: 9,
    name: "Abenteuer-Touren",
    icon: "🏔️",
    description: "Bergsteigen, Klettern und extreme Sportarten",
    difficulty: "Schwer",
    destinations: [9, 6],
    price: "€€€",
    duration: "Halbtag bis Ganztag"
  },
  {
    id: 10,
    name: "Nachtleben & Entertainment",
    icon: "🎭",
    description: "Clubs, Bars, Theater und Live-Musik",
    difficulty: "Leicht",
    destinations: [1, 2, 3, 5, 7, 8, 11, 14, 15, 19],
    price: "€€",
    duration: "Abend/Nacht"
  },
  {
    id: 11,
    name: "Bootsfahrten & Kreuzfahrten",
    icon: "⛵",
    description: "Mit dem Boot Küsten und Seen erkunden",
    difficulty: "Leicht",
    destinations: [4, 13, 16, 18],
    price: "€€",
    duration: "Halbtag bis Ganztag"
  },
  {
    id: 12,
    name: "Fotografische Touren",
    icon: "📸",
    description: "Ikonische Orte für perfekte Fotos mit Profis entdecken",
    difficulty: "Leicht",
    destinations: [1, 2, 12, 13, 3, 7, 20],
    price: "€€",
    duration: "2-3 Stunden"
  }
];

// Unterkünfte
const accommodations = [
  {
    id: 1,
    destination: 2, // Paris
    name: "Le Marais Luxury Hotel",
    type: "Hotel",
    stars: 5,
    price: 250,
    rating: 4.9,
    reviews: 456,
    description: "5-Sterne Luxushotel im historischen Marais-Viertel"
  },
  {
    id: 2,
    destination: 2, // Paris
    name: "Montmartre Hostel",
    type: "Hostel",
    stars: 3,
    price: 35,
    rating: 4.2,
    reviews: 234,
    description: "Gemütliches Hostel mit Blick auf die Basilika Sacré-Cœur"
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
    description: "Luxus-Resort mit privatem Strandzugang"
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
    description: "Komfortable Bungalows direkt am Strand"
  },
  {
    id: 5,
    destination: 1, // Tokyo
    name: "Shinjuku Modern Hotel",
    type: "Hotel",
    stars: 4,
    price: 120,
    rating: 4.8,
    reviews: 378,
    description: "Modernes Hotel im lebendigen Shinjuku-Distrikt"
  },
  {
    id: 6,
    destination: 1, // Tokyo
    name: "Capsule Hotel Tokyo",
    type: "Capsule Hotel",
    stars: 3,
    price: 45,
    rating: 4.3,
    reviews: 267,
    description: "Authentisches japanisches Kapselhotel-Erlebnis"
  },
  {
    id: 7,
    destination: 6, // Bali
    name: "Yoga Retreat Bali",
    type: "Guesthouse",
    stars: 4,
    price: 80,
    rating: 4.8,
    reviews: 267,
    description: "Friedliches Yoga & Wellness Retreat in Ubud"
  },
  {
    id: 8,
    destination: 6, // Bali
    name: "Beachfront Villa Seminyak",
    type: "Villa",
    stars: 5,
    price: 320,
    rating: 4.9,
    reviews: 423,
    description: "Luxus-Villa mit privatem Pool und Strandblick"
  },
  {
    id: 9,
    destination: 3, // London
    name: "Central London Apartments",
    type: "Apartment",
    stars: 4,
    price: 160,
    rating: 4.6,
    reviews: 312,
    description: "Zentral gelegene Apartments in Westminster"
  },
  {
    id: 10,
    destination: 9, // Interlaken
    name: "Alpine Hotel Schweiz",
    type: "Hotel",
    stars: 4,
    price: 200,
    rating: 4.9,
    reviews: 201,
    description: "Charmantes Hotel mit atemberaubendem Bergblick"
  },
  {
    id: 11,
    destination: 12, // Rom
    name: "Colosseum Historic Hotel",
    type: "Hotel",
    stars: 5,
    price: 280,
    rating: 4.9,
    reviews: 534,
    description: "Luxushotel mit Blick auf das Kolosseum"
  },
  {
    id: 12,
    destination: 12, // Rom
    name: "Roman Budget Hostel",
    type: "Hostel",
    stars: 3,
    price: 40,
    rating: 4.1,
    reviews: 345,
    description: "Günstiges Hostel nahe der römischen Sehenswürdigkeiten"
  },
  {
    id: 13,
    destination: 13, // Venedig
    name: "Grand Canal Palazzo",
    type: "Hotel",
    stars: 5,
    price: 350,
    rating: 4.9,
    reviews: 389,
    description: "5-Sterne Palast-Hotel direkt am Canale Grande"
  },
  {
    id: 14,
    destination: 13, // Venedig
    name: "Venetian Budget Hotel",
    type: "Hotel",
    stars: 2,
    price: 60,
    rating: 4.0,
    reviews: 234,
    description: "Einfaches Hotel auf der Insel Giudecca"
  },
  {
    id: 15,
    destination: 11, // New York
    name: "Times Square Luxury",
    type: "Hotel",
    stars: 5,
    price: 400,
    rating: 4.8,
    reviews: 678,
    description: "5-Sterne Luxushotel im Herzen von Manhattan"
  },
  {
    id: 16,
    destination: 11, // New York
    name: "Brooklyn Boutique Hotel",
    type: "Hotel",
    stars: 4,
    price: 150,
    rating: 4.6,
    reviews: 456,
    description: "Trendiges Boutique-Hotel in Brooklyn"
  },
  {
    id: 17,
    destination: 14, // Amsterdam
    name: "Canal House Hotel",
    type: "Hotel",
    stars: 4,
    price: 140,
    rating: 4.7,
    reviews: 501,
    description: "Charaktervolles Hotel in einer historischen Grachtenvilla"
  },
  {
    id: 18,
    destination: 14, // Amsterdam
    name: "Amsterdam Budget Hostel",
    type: "Hostel",
    stars: 3,
    price: 38,
    rating: 4.3,
    reviews: 623,
    description: "Beliebtes und zentrales Budget-Hostel"
  },
  {
    id: 19,
    destination: 15, // Berlin
    name: "Mitte Boutique Hotel",
    type: "Hotel",
    stars: 4,
    price: 125,
    rating: 4.6,
    reviews: 378,
    description: "Stylisches Boutique-Hotel in Mitte"
  },
  {
    id: 20,
    destination: 16, // Malediven
    name: "Overwater Bungalow Resort",
    type: "Resort",
    stars: 5,
    price: 500,
    rating: 4.9,
    reviews: 412,
    description: "Traum-Resort mit Bungalows über dem Meer"
  },
  {
    id: 21,
    destination: 17, // Melbourne
    name: "Southbank Luxury Suites",
    type: "Apartment",
    stars: 5,
    price: 200,
    rating: 4.8,
    reviews: 289,
    description: "Moderne Suiten am kulturellen Zentrum"
  },
  {
    id: 22,
    destination: 18, // Singapur
    name: "Marina Bay Hotel",
    type: "Hotel",
    stars: 5,
    price: 320,
    rating: 4.8,
    reviews: 567,
    description: "Spektakuläres Hotel mit Marina Bay Sands Blick"
  },
  {
    id: 23,
    destination: 19, // Istanbul
    name: "Sultan Hotel Bosphorus",
    type: "Hotel",
    stars: 4,
    price: 110,
    rating: 4.7,
    reviews: 434,
    description: "Charmantes Hotel mit Bosporus-Blick"
  },
  {
    id: 24,
    destination: 20, // Prag
    name: "Old Town Square Hotel",
    type: "Hotel",
    stars: 4,
    price: 95,
    rating: 4.7,
    reviews: 501,
    description: "Mittelalterliches Hotel am Altstädter Ring"
  },
  {
    id: 25,
    destination: 10, // Kairo
    name: "Pyramid View Hotel",
    type: "Hotel",
    stars: 4,
    price: 85,
    rating: 4.5,
    reviews: 289,
    description: "Hotel mit Blick auf die Pyramiden von Giza"
  },
  {
    id: 26,
    destination: 5, // Bangkok
    name: "Siamese Luxury Hotel",
    type: "Hotel",
    stars: 4,
    price: 95,
    rating: 4.6,
    reviews: 378,
    description: "Luxuriöses Hotel mit traditionellem Thai-Design"
  },
  {
    id: 27,
    destination: 7, // Barcelona
    name: "Sagrada Familia Hotel",
    type: "Hotel",
    stars: 4,
    price: 130,
    rating: 4.7,
    reviews: 456,
    description: "Boutique-Hotel nahe der Sagrada Familia"
  },
  {
    id: 28,
    destination: 8, // Dubai
    name: "Burj Khalifa Luxury Suite",
    type: "Hotel",
    stars: 5,
    price: 450,
    rating: 4.9,
    reviews: 612,
    description: "Ultra-Luxus mit Blick auf den Burj Khalifa"
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
    description: "Klassische französische Küche in authentischem Ambiente"
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
    description: "Authentisches Sushi & Kaiseki von Meisterköchen"
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
    description: "Authentischer Thai Street Food und lokale Spezialitäten"
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
    description: "Traditionelle Tapas mit erlesener Weinauswahl"
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
    description: "Frischer Fisch mit direktem Strandblick"
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
    description: "Köstliche indische Currys und authentische Gewürze"
  },
  {
    id: 7,
    destination: 12, // Rom
    name: "Ristorante Trastevere",
    cuisine: "Italienisch",
    stars: 5,
    price: "€€€",
    rating: 4.9,
    reviews: 567,
    description: "Traditionelle römische Küche mit lokalen Zutaten"
  },
  {
    id: 8,
    destination: 13, // Venedig
    name: "Osteria Venetiana",
    cuisine: "Venezianisch",
    stars: 5,
    price: "€€€",
    rating: 4.8,
    reviews: 423,
    description: "Authentische venezianische Fischspezialitäten"
  },
  {
    id: 9,
    destination: 11, // New York
    name: "The Steakhouse",
    cuisine: "Amerikanisch",
    stars: 4,
    price: "€€€",
    rating: 4.7,
    reviews: 534,
    description: "Premium Steaks und klassische New York Cuisine"
  },
  {
    id: 10,
    destination: 14, // Amsterdam
    name: "De Kas",
    cuisine: "Niederländisch/International",
    stars: 5,
    price: "€€€",
    rating: 4.8,
    reviews: 345,
    description: "Innovative Küche mit saisonalen Zutaten"
  },
  {
    id: 11,
    destination: 6, // Bali
    name: "Warung Bodag Mulya",
    cuisine: "Balineisch",
    stars: 4,
    price: "€",
    rating: 4.6,
    reviews: 289,
    description: "Authentische balinesische Küche mit traditionellen Rezepten"
  },
  {
    id: 12,
    destination: 8, // Dubai
    name: "Arabian Court",
    cuisine: "Arabisch",
    stars: 5,
    price: "€€€€",
    rating: 4.7,
    reviews: 267,
    description: "Luxuriöses arabisches Dining-Erlebnis"
  },
  {
    id: 13,
    destination: 15, // Berlin
    name: "Restaurant Zur Linde",
    cuisine: "Deutsch",
    stars: 4,
    price: "€€",
    rating: 4.5,
    reviews: 198,
    description: "Traditionelle deutsche Küche und Spezialitäten"
  },
  {
    id: 14,
    destination: 20, // Prag
    name: "U Modré Růže",
    cuisine: "Tschechisch",
    stars: 4,
    price: "€€",
    rating: 4.6,
    reviews: 234,
    description: "Authentische böhmische Küche in historischem Ambiente"
  },
  {
    id: 15,
    destination: 19, // Istanbul
    name: "Çiya Sofrası",
    cuisine: "Türkisch",
    stars: 4,
    price: "€€",
    rating: 4.7,
    reviews: 378,
    description: "Traditionelle türkische Küche und regionale Spezialitäten"
  },
  {
    id: 16,
    destination: 18, // Singapur
    name: "Odette",
    cuisine: "Modern Französisch",
    stars: 5,
    price: "€€€€",
    rating: 4.8,
    reviews: 345,
    description: "Mit Michelin-Stern ausgezeichnetes Fine Dining"
  },
  {
    id: 17,
    destination: 17, // Melbourne
    name: "Chin Chin",
    cuisine: "Südostasiatisch",
    stars: 4,
    price: "€€",
    rating: 4.7,
    reviews: 412,
    description: "Moderne südostasiatische Küche mit Flair"
  },
  {
    id: 18,
    destination: 10, // Kairo
    name: "Nile Valley",
    cuisine: "Ägyptisch",
    stars: 4,
    price: "€€",
    rating: 4.5,
    reviews: 267,
    description: "Authentische ägyptische Küche mit Nilblick"
  },
  {
    id: 19,
    destination: 16, // Malediven
    name: "Overwater Restaurant",
    cuisine: "International",
    stars: 5,
    price: "€€€€",
    rating: 4.9,
    reviews: 289,
    description: "Exklusives Dining über dem kristallklaren Wasser"
  },
  {
    id: 20,
    destination: 2, // Paris
    name: "Café de Flore",
    cuisine: "Französisch",
    stars: 4,
    price: "€€",
    rating: 4.6,
    reviews: 567,
    description: "Legendäres Café mit historischer Atmosphäre"
  },
  {
    id: 21,
    destination: 3, // London
    name: "Borough Market Restaurant",
    cuisine: "Britisch/International",
    stars: 4,
    price: "€€",
    rating: 4.6,
    reviews: 378,
    description: "Frische Zutaten vom berühmten Borough Market"
  },
  {
    id: 22,
    destination: 9, // Interlaken
    name: "Taverne",
    cuisine: "Schweizer Alpenküche",
    stars: 4,
    price: "€€€",
    rating: 4.7,
    reviews: 189,
    description: "Traditionelle Schweizer Spezialitäten mit Bergblick"
  },
  {
    id: 23,
    destination: 5, // Bangkok
    name: "Gaggan",
    cuisine: "Indisch-Innovativ",
    stars: 5,
    price: "€€€€",
    rating: 4.9,
    reviews: 234,
    description: "Michelin-Sterne Indische Küche mit modernen Techniken"
  },
  {
    id: 24,
    destination: 1, // Tokyo
    name: "Ichiran Ramen",
    cuisine: "Japanisch",
    stars: 4,
    price: "€",
    rating: 4.5,
    reviews: 678,
    description: "Legendäre Ramen von legendären Köchen"
  },
  {
    id: 25,
    destination: 11, // New York
    name: "Carbone",
    cuisine: "Italienisch",
    stars: 5,
    price: "€€€",
    rating: 4.8,
    reviews: 789,
    description: "Zeitgenössisches italienisches Restaurant mit Stil"
  },
  {
    id: 26,
    destination: 12, // Rom
    name: "Flavio al Velavevodetto",
    cuisine: "Römisch",
    stars: 4,
    price: "€€",
    rating: 4.6,
    reviews: 434,
    description: "Familiengeführtes Restaurant mit Originalrezepten"
  },
  {
    id: 27,
    destination: 7, // Barcelona
    name: "Cal Pep",
    cuisine: "Spanisch/Meeresfrüchte",
    stars: 4,
    price: "€€",
    rating: 4.7,
    reviews: 512,
    description: "Beliebtes Restaurant mit frischen Meeresfrüchten"
  },
  {
    id: 28,
    destination: 4, // Seychellen
    name: "Fisherman's Cove",
    cuisine: "Kreolisch",
    stars: 4,
    price: "€€",
    rating: 4.6,
    reviews: 234,
    description: "Authentische kreolische Spezialitäten der Seychellen"
  },
  {
    id: 29,
    destination: 13, // Venedig
    name: "Antiche Carampane",
    cuisine: "Venezianisch",
    stars: 4,
    price: "€€€",
    rating: 4.8,
    reviews: 389,
    description: "Feine venezianische Fischküche seit 1900"
  },
  {
    id: 30,
    destination: 14, // Amsterdam
    name: "Pancakes Amsterdam",
    cuisine: "Niederländisch",
    stars: 3,
    price: "€",
    rating: 4.4,
    reviews: 934,
    description: "Beliebtes Café für süße und salzige Pfannkuchen"
  }
];
