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
export const companyDummyData: CompanyDummyData[] = [
  {
    id: 1,
    name: "Café Morning Glow",
    category: "food",
    address: { street: "Kurfürstenstraße 21", city: "Berlin" },
    phone: "+49 30 78912345",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&h=400&q=80",
    description: "Cozy café serving hand‑roasted coffee, vegan cakes, and homemade granola. Ideal spot for working or relaxing.",
    google_maps: { coordinates: "52.505,13.35", link: "https://www.google.com/maps?q=52.505,13.35" },
    directions: "Take U2 to Wittenbergplatz, then a 5‑minute walk.",
    price_level: "€",
    prices: "€",
    comments: [
      { author: "Jana", date: "2025-03-02", rating: 5, text: "Best matcha latte in town!" },
      { author: "Ben", date: "2025-04-11", rating: 4, text: "Very cozy, sometimes crowded." },
    ],
    pinned: false,
  },
  {
    id: 2,
    name: "Urban Escape Climbing Park",
    category: "activity",
    address: { street: "Am Wiesenweg 88", city: "Augsburg" },
    phone: "+49 821 223344",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHK4mty2jybQ_99uXgZuv7YJ5HGn14AmGjQQ&s",
    description: "Outdoor climbing park featuring rope courses, zip lines, and kids' sections.",
    google_maps: { coordinates: "48.365,10.905", link: "https://www.google.com/maps?q=48.365,10.905" },
    directions: "Bus 44 to Wiesenweg stop, 3 minutes on foot.",
    price_level: "€€",
    prices: "€€",
    comments: [
      { author: "Tom", date: "2025-05-15", rating: 5, text: "Amazing routes and friendly staff." },
      { author: "Lisa", date: "2025-06-20", rating: 4, text: "Great experience, a bit pricey." },
    ],
    pinned: false,
  },
  {
    id: 3,
    name: "Lindenblick Art House",
    category: "culture",
    address: { street: "Lindenallee 5", city: "Hamburg" },
    phone: "+49 40 998877",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQODsPTJqH6mWzyLnwg5ur2glk5ttVqBmSBrw&s",
    description: "Modern gallery showcasing emerging contemporary artists with changing exhibitions.",
    google_maps: { coordinates: "53.55,10.0", link: "https://www.google.com/maps?q=53.55,10.0" },
    directions: "Take U1 to Steinstraße, 2-minute walk.",
    price_level: "€€",
    prices: "€€",
    comments: [
      { author: "Marie", date: "2025-01-15", rating: 5, text: "Beautifully curated exhibits!" },
    ],
    pinned: false,
  },
  {
    id: 4,
    name: "Arena South Sports Bar",
    category: "sports",
    address: { street: "Friedrichstraße 88", city: "Stuttgart" },
    phone: "+49 711 556677",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7JIHHT6kK9yeQLa_0rRVMOmSNw4wpAgCfbg&s",
    description: "Lively sports bar with big screens, live football, and American diner-style menu.",
    google_maps: { coordinates: "48.78,9.18", link: "https://www.google.com/maps?q=48.78,9.18" },
    directions: "S-Bahn S1 to Stadtmitte, 5-minute walk.",
    price_level: "€€",
    prices: "€€",
    comments: [
      { author: "Kevin", date: "2025-08-08", rating: 4, text: "Awesome vibe during matches!" },
    ],
    pinned: false,
  },
  {
    id: 5,
    name: "Luna Open Air",
    category: "concerts",
    address: { street: "Parkallee 33", city: "Frankfurt" },
    phone: "+49 69 445566",
    image: "https://images.unsplash.com/photo-1511376777868-611b54f68947?auto=format&fit=crop&w=600&h=400&q=80",
    description: "Outdoor concert venue with indie bands, food trucks, and a relaxed summer atmosphere.",
    google_maps: { coordinates: "50.12,8.68", link: "https://www.google.com/maps?q=50.12,8.68" },
    directions: "Take U6 to Westend, then 7 minutes on foot.",
    price_level: "€€€",
    prices: "€€€",
    comments: [
      { author: "Sabrina", date: "2025-07-02", rating: 5, text: "Fantastic sound and great crowd!" },
    ],
    pinned: false,
  },
  {
    id: 6,
    name: "Skyline Kletterpark",
    category: "sport",
    address: { street: "Am Mainufer 12", city: "Frankfurt" },
    phone: "+49 69 223344",
    image: "https://www.mostropolis.at/upload/img-gen/area-imggen-cacheid-5c8d739d5903be6f9bccfa236f63fdce.jpg",
    description: "Adventure park with climbing walls, rope courses, and zip lines overlooking the Main River.",
    google_maps: { coordinates: "50.11,8.69", link: "https://www.google.com/maps?q=50.11,8.69" },
    directions: "Take tram 11 to Osthafen, then walk 5 minutes.",
    price_level: "€€",
    prices: "€€",
    comments: [
      { author: "Lukas", date: "2025-06-20", rating: 4, text: "Great for groups and families." },
    ],
    pinned: false,
  },
  {
    id: 7,
    name: "Café Rosalie",
    category: "food",
    address: { street: "Berger Straße 124", city: "Frankfurt" },
    phone: "+49 69 334455",
    image: "https://caferosalie.net/wp-content/uploads/2025/05/Das-Gibt-Es-Bei-Uns01.jpg",
    description: "Cozy neighborhood café serving homemade cakes, fair-trade coffee, and vegan breakfast options.",
    google_maps: { coordinates: "50.13,8.70", link: "https://www.google.com/maps?q=50.13,8.70" },
    directions: "Take U4 to Höhenstraße, then 3 minutes on foot.",
    price_level: "€€",
    prices: "€€",
    comments: [
      { author: "Mira", date: "2025-03-15", rating: 5, text: "Best carrot cake in town!" },
    ],
    pinned: false,
  },
  {
    id: 8,
    name: "Main Art Museum",
    category: "culture",
    address: { street: "Museumsufer 10", city: "Frankfurt" },
    phone: "+49 69 556677",
    image: "https://d1inegp6v2yuxm.cloudfront.net/royal-academy/image/upload/c_limit,cs_tinysrgb,dn_72,f_auto,fl_progressive.keep_iptc,w_1200/aho55gn2fk6pgxnmdslx.jpeg",
    description: "Modern art museum with rotating exhibitions from international contemporary artists.",
    google_maps: { coordinates: "50.10,8.67", link: "https://www.google.com/maps?q=50.10,8.67" },
    directions: "Bus 46 to Museumsufer stop.",
    price_level: "€€€",
    prices: "€€€",
    comments: [
      { author: "Jonas", date: "2025-05-08", rating: 4, text: "Impressive architecture and great café." },
    ],
    pinned: false,
  },
  {
    id: 9,
    name: "GreenFields Festival",
    category: "concerts",
    address: { street: "Messepark 2", city: "Frankfurt" },
    phone: "+49 69 778899",
    image: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=600&h=400&q=80",
    description: "Weekend festival featuring electronic and indie artists, food stalls, and camping area.",
    google_maps: { coordinates: "50.09,8.64", link: "https://www.google.com/maps?q=50.09,8.64" },
    directions: "S-Bahn to Messe, then follow the signs.",
    price_level: "€€€",
    prices: "€€€",
    comments: [
      { author: "Sven", date: "2025-08-12", rating: 5, text: "Amazing lineup and vibes!" },
    ],
    pinned: false,
  },
  {
    id: 10,
    name: "Palmengarten Escape",
    category: "activity",
    address: { street: "Siesmayerstraße 61", city: "Frankfurt" },
    phone: "+49 69 900111",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZpCqwqUV86xdmZjSF5w2lcWtban9usZx9MA&s",
    description: "Botanical gardens with tropical plants, ponds, and peaceful walking paths.",
    google_maps: { coordinates: "50.12,8.66", link: "https://www.google.com/maps?q=50.12,8.66" },
    directions: "Take tram 16 to Palmengarten stop.",
    price_level: "€€",
    prices: "€€",
    comments: [
      { author: "Elena", date: "2025-04-22", rating: 5, text: "Perfect spot for relaxing walks." },
    ],
    pinned: false,
  },
  {
    id: 11,
    name: "Sky Lounge Bar",
    category: "bars",
    address: { street: "Taunusanlage 8", city: "Frankfurt" },
    phone: "+49 69 334455",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzQzYF0WCIG74BpMVyThqrTqFfhvMdh8i0Vg&s",
    description: "Rooftop bar with city skyline views, cocktails, and live DJ on weekends.",
    google_maps: { coordinates: "50.11,8.67", link: "https://www.google.com/maps?q=50.11,8.67" },
    directions: "10-minute walk from Hauptwache station.",
    price_level: "€€€",
    prices: "€€€",
    comments: [
      { author: "Nina", date: "2025-06-05", rating: 5, text: "Best views and cocktails!" },
    ],
    pinned: false,
  },
  {
    id: 12,
    name: "Friedrichstadt Theater",
    category: "culture",
    address: { street: "Am Zirkus 1", city: "Berlin" },
    phone: "+49 30 234567",
    image: "https://img3.oastatic.com/img2/76304439/max/variant.jpg",
    description: "Historic theater with musicals, drama, and family shows.",
    google_maps: { coordinates: "52.52,13.37", link: "https://www.google.com/maps?q=52.52,13.37" },
    directions: "U2 to Hausvogteiplatz, 4-minute walk.",
    price_level: "€€€",
    prices: "€€€",
    comments: [
      { author: "Olaf", date: "2025-02-10", rating: 4, text: "Great performances, comfy seats." },
    ],
    pinned: false,
  },
  {
    id: 13,
    name: "Bootshaus Marina",
    category: "sport",
    address: { street: "Hafenstraße 10", city: "Hamburg" },
    phone: "+49 40 123456",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&h=400&q=80",
    description: "Water sports facility offering kayaking, paddleboarding, and sailing courses.",
    google_maps: { coordinates: "53.54,10.0", link: "https://www.google.com/maps?q=53.54,10.0" },
    directions: "Bus 112 to Hafenstraße stop.",
    price_level: "€€",
    prices: "€€",
    comments: [
      { author: "Timo", date: "2025-07-14", rating: 5, text: "Perfect for summer activities!" },
    ],
    pinned: false,
  },
  {
    id: 14,
    name: "Kulturbrauerei",
    category: "culture",
    address: { street: "Schönhauser Allee 36", city: "Berlin" },
    phone: "+49 30 987654",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRHxbXA2zxL6n_7K143azupwVEOZorUl0rzA&s",
    description: "Historic brewery turned cultural center with exhibitions, cinemas, and concerts.",
    google_maps: { coordinates: "52.54,13.41", link: "https://www.google.com/maps?q=52.54,13.41" },
    directions: "U2 Eberswalder Straße, 5 minutes walk.",
    price_level: "€€",
    prices: "€€",
    comments: [
      { author: "Lea", date: "2025-03-20", rating: 5, text: "Love the mix of culture and history!" },
    ],
    pinned: false,
  },
  {
    id: 15,
    name: "Nordpark Skatepark",
    category: "sport",
    address: { street: "Nordpark 7", city: "Düsseldorf" },
    phone: "+49 211 556677",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTYzaCBWvUhCUyI_xF1S7q90Ap670n5NBINg&s",
    description: "Skatepark with ramps, bowls, and street areas suitable for all skill levels.",
    google_maps: { coordinates: "51.23,6.78", link: "https://www.google.com/maps?q=51.23,6.78" },
    directions: "Tram 704 to Nordpark, 3 minutes walk.",
    price_level: "€",
    prices: "€",
    comments: [
      { author: "Finn", date: "2025-05-25", rating: 4, text: "Good park for beginners and pros alike." },
    ],
    pinned: false,
  }
];
