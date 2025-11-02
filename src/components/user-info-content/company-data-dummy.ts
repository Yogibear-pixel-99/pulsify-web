export interface CompanyDummyData {
  id: number;
  name: string;
  category: string;
  address: CompanyAdressData;
  phone: string;
  image: string;
  description: string;
  google_maps: CompanyGoogleMaps;
  directions: string;
  price_level: string;
  pictureUrl: string;
  prices: string;
  comments: CompanyUserComments[];
  pinned: boolean;
}

export interface CompanyUserComments {
  author: string;
  date: string;
  rating: number;
  text: string;
}

export interface CompanyAdressData {
  street: string;
  city: string;
}

export interface CompanyGoogleMaps {
  coordinates: string;
  link: string;
}

export const companyDataDummy: CompanyDummyData[] = [
  {
    id: 1,
    name: "Café Morning Glow",
    category: "food",
    address: {
      street: "Kurfürstenstraße 21",
      city: "Berlin"
    },
    phone: "+49 30 78912345",
    image: "https://via.placeholder.com/600x400.png?text=Cafe+Morning+Glow",
    pictureUrl: "https://via.placeholder.com/600x400.png?text=Cafe+Morning+Glow",
    description:
      "Cozy café serving hand-roasted coffee, vegan cakes, and homemade granola. Ideal spot for working or relaxing.",
    google_maps: {
      coordinates: "52.505,13.35",
      link: "https://www.google.com/maps?q=52.505,13.35"
    },
    directions: "Take U2 to Wittenbergplatz, then a 5-minute walk.",
    price_level: "€",
    prices: "€",
    comments: [
      {
        author: "Jana",
        date: "2025-03-02",
        rating: 5,
        text: "Best matcha latte in town!"
      },
      {
        author: "Ben",
        date: "2025-04-11",
        rating: 4,
        text: "Very cozy, sometimes crowded."
      }
    ],
    pinned: false
  },
  {
    id: 2,
    name: "Urban Escape Climbing Park",
    category: "activity",
    address: {
      street: "Am Wiesenweg 88",
      city: "Augsburg"
    },
    phone: "+49 821 223344",
    image: "https://via.placeholder.com/600x400.png?text=Urban+Escape+Climbing+Park",
    pictureUrl: "https://via.placeholder.com/600x400.png?text=Urban+Escape+Climbing+Park",
    description:
      "Outdoor climbing park featuring rope courses, zip lines, and kids' sections.",
    google_maps: {
      coordinates: "48.365,10.905",
      link: "https://www.google.com/maps?q=48.365,10.905"
    },
    directions: "Bus 44 to Wiesenweg stop, 3 minutes on foot.",
    price_level: "€€",
    prices: "€€",
    comments: [
      {
        author: "Tom",
        date: "2025-05-15",
        rating: 5,
        text: "Amazing routes and friendly staff."
      },
      {
        author: "Lisa",
        date: "2025-06-20",
        rating: 4,
        text: "Great experience, a bit pricey."
      }
    ],
    pinned: false
  },
  {
    id: 3,
    name: "Lindenblick Art House",
    category: "culture",
    address: {
      street: "Lindenallee 5",
      city: "Hamburg"
    },
    phone: "+49 40 998877",
    image: "https://via.placeholder.com/600x400.png?text=Lindenblick+Art+House",
    pictureUrl: "https://via.placeholder.com/600x400.png?text=Lindenblick+Art+House",
    description:
      "Modern gallery showcasing emerging contemporary artists with changing exhibitions.",
    google_maps: {
      coordinates: "53.55,10.0",
      link: "https://www.google.com/maps?q=53.55,10.0"
    },
    directions: "Take U1 to Steinstraße, 2-minute walk.",
    price_level: "€€",
    prices: "€€",
    comments: [
      {
        author: "Marie",
        date: "2025-01-15",
        rating: 5,
        text: "Beautifully curated exhibits!"
      }
    ],
    pinned: false
  },
  {
    id: 4,
    name: "Arena South Sports Bar",
    category: "sports",
    address: {
      street: "Friedrichstraße 88",
      city: "Stuttgart"
    },
    phone: "+49 711 556677",
    image: "https://via.placeholder.com/600x400.png?text=Arena+South+Sports+Bar",
    pictureUrl: "https://via.placeholder.com/600x400.png?text=Arena+South+Sports+Bar",
    description:
      "Lively sports bar with big screens, live football, and American diner-style menu.",
    google_maps: {
      coordinates: "48.78,9.18",
      link: "https://www.google.com/maps?q=48.78,9.18"
    },
    directions: "S-Bahn S1 to Stadtmitte, 5-minute walk.",
    price_level: "€€",
    prices: "€€",
    comments: [
      {
        author: "Kevin",
        date: "2025-08-08",
        rating: 4,
        text: "Awesome vibe during matches!"
      }
    ],
    pinned: false
  },
  {
    id: 5,
    name: "Luna Open Air",
    category: "concerts",
    address: {
      street: "Parkallee 33",
      city: "Frankfurt"
    },
    phone: "+49 69 445566",
    image: "https://via.placeholder.com/600x400.png?text=Luna+Open+Air",
    pictureUrl: "https://via.placeholder.com/600x400.png?text=Luna+Open+Air",
    description:
      "Outdoor concert venue with indie bands, food trucks, and a relaxed summer atmosphere.",
    google_maps: {
      coordinates: "50.12,8.68",
      link: "https://www.google.com/maps?q=50.12,8.68"
    },
    directions: "Take U6 to Westend, then 7 minutes on foot.",
    price_level: "€€€",
    prices: "€€€",
    comments: [
      {
        author: "Sabrina",
        date: "2025-07-02",
        rating: 5,
        text: "Fantastic sound and great crowd!"
      }
    ],
    pinned: false
  }
];
