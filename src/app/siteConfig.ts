// src/app/siteConfig.ts
// Central config for SEO, GEO, and business info

const siteConfig = {
  name: "Café Editorial",
  description: "A premium, modern restaurant and cafe in [City Name]. Reserve a table, view our menu, and experience artisan dining.",
  url: "https://yourcafe.com/",
  logo: "/favicon.ico",
  address: "123 Main St, Your City, Country",
  city: "Your City",
  region: "Your Region",
  country: "Your Country",
  postalCode: "12345",
  phone: "+1-555-123-4567",
  email: "info@yourcafe.com",
  geo: {
    lat: "40.7128",
    lng: "-74.0060",
  },
  openingHours: [
    "Mo-Fr 08:00-22:00",
    "Sa-Su 09:00-23:00",
  ],
  social: {
    facebook: "https://facebook.com/yourcafe",
    instagram: "https://instagram.com/yourcafe",
    twitter: "https://twitter.com/yourcafe",
  },
  ogImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
  keywords: "modern cafe, restaurant, artisan coffee, brunch, [City Name]",
};

export default siteConfig;
