import "./globals.css";
import React from "react";

// === Editable Site Config for SEO, GEO, and Content ===
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#F7F2EA" />
        <meta name="description" content={siteConfig.description} />
        <meta name="keywords" content={siteConfig.keywords} />
        <meta name="author" content={siteConfig.name} />
        <title>{siteConfig.name} | {siteConfig.city}</title>
        {/* Open Graph SEO */}
        <meta property="og:type" content="restaurant" />
        <meta property="og:title" content={siteConfig.name} />
        <meta property="og:description" content={siteConfig.description} />
        <meta property="og:url" content={siteConfig.url} />
        <meta property="og:image" content={siteConfig.ogImage} />
        <meta property="og:site_name" content={siteConfig.name} />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteConfig.name} />
        <meta name="twitter:description" content={siteConfig.description} />
        <meta name="twitter:image" content={siteConfig.ogImage} />
        {/* LocalBusiness & Restaurant Schema.org */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': ['Restaurant', 'LocalBusiness'],
          name: siteConfig.name,
          image: siteConfig.ogImage,
          address: {
            '@type': 'PostalAddress',
            streetAddress: siteConfig.address,
            addressLocality: siteConfig.city,
            addressRegion: siteConfig.region,
            postalCode: siteConfig.postalCode,
            addressCountry: siteConfig.country,
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: siteConfig.geo.lat,
            longitude: siteConfig.geo.lng,
          },
          url: siteConfig.url,
          telephone: siteConfig.phone,
          email: siteConfig.email,
          openingHours: siteConfig.openingHours,
          priceRange: '$$-$$$',
          servesCuisine: ['Cafe', 'Coffee', 'Brunch', 'Bakery', 'Desserts'],
          sameAs: [siteConfig.social.facebook, siteConfig.social.instagram, siteConfig.social.twitter],
        }) }} />
        {/* Google Fonts for headings and body */}
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
        <link rel="icon" href={siteConfig.logo} />
      </head>
      <body className="bg-bg text-charcoal font-body min-h-full flex flex-col">
        {/* Sticky Navigation */}
        <header className="sticky top-0 z-50 bg-bg/70 backdrop-blur-md border-b border-structural/30 transition-all duration-300">
          <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-3">
              <span className="font-heading text-3xl text-structural tracking-tight">Café Editorial</span>
            </div>
            <ul className="hidden md:flex gap-10 font-medium text-structural text-lg">
              <li><a href="#home" className="hover:text-terracotta transition">Home</a></li>
              <li><a href="#menu" className="hover:text-terracotta transition">Menu</a></li>
              <li><a href="#about" className="hover:text-terracotta transition">About</a></li>
              <li><a href="#gallery" className="hover:text-terracotta transition">Gallery</a></li>
              <li><a href="#testimonials" className="hover:text-terracotta transition">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-terracotta transition">Contact</a></li>
            </ul>
            <a href="#reservation" className="hidden md:inline-block bg-terracotta text-bg px-6 py-2 rounded-full font-heading text-lg shadow editorial-shadow hover:scale-105 hover:bg-gold transition border-2 border-gold">Reserve</a>
            {/* Mobile hamburger menu placeholder */}
            <button className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-terracotta" aria-label="Open menu">
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
          </nav>
        </header>

        <main className="flex-1">
          {/* Hero Section */}
          <section id="home" className="min-h-[90vh] flex flex-col justify-center items-center bg-bg relative overflow-hidden editorial-section">
            {/* Hero background image and overlay */}
            <div className="absolute inset-0 w-full h-full -z-10">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
                alt="Warm, elegant cafe interior with artisan coffee and food."
                className="w-full h-full object-cover object-center opacity-80"
                style={{ filter: 'brightness(0.93) blur(0.5px)' }}
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-bg/90 via-bg-alt/80 to-structural/60" />
            </div>
            <div className="text-center max-w-2xl mx-auto py-24">
              <h1 className="font-heading text-6xl md:text-8xl mb-8 text-structural drop-shadow-lg tracking-tight leading-tight">
                Warm Editorial Minimalism
              </h1>
              <p className="text-xl md:text-2xl mb-10 text-charcoal bg-bg-alt/90 px-8 py-5 rounded-2xl editorial-shadow inline-block font-body">
                Cozy. Premium. Inviting. Experience artisan coffee, signature dishes, and Scandinavian-inspired hospitality in the heart of your city.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center mt-8">
                <a href="#reservation" className="bg-terracotta text-bg px-10 py-4 rounded-full font-heading text-2xl shadow-lg editorial-shadow hover:scale-105 hover:bg-gold transition border-2 border-gold">
                  Reserve a Table
                </a>
                <a href="#menu" className="bg-gold text-structural px-10 py-4 rounded-full font-heading text-2xl shadow-lg editorial-shadow hover:bg-amber hover:text-bg transition border-2 border-amber">
                  View Menu
                </a>
              </div>
              <div className="mt-14 flex flex-col items-center gap-2">
                <span className="uppercase tracking-widest text-xs text-gold font-bold">Now Open</span>
                <span className="text-structural font-heading text-lg">Breakfast, brunch, and dinner daily</span>
                <span className="block mt-6 animate-bounce text-terracotta text-3xl">↓</span>
              </div>
            </div>
          </section>

          {/* Featured Menu Section */}
          <section id="menu" className="editorial-section bg-bg-alt">
            <div className="max-w-6xl mx-auto px-4">
              {/* Menu cards and filters placeholder */}
              <h2 className="font-heading text-4xl mb-8 text-structural">Featured Menu</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Example card */}
                <div className="editorial-card p-6 hover:shadow-lg transition border border-walnut">
                  <h3 className="font-heading text-2xl mb-2">Signature Dish</h3>
                  <p className="text-olive mb-2">A delicious artisan creation.</p>
                  <span className="block text-accent font-bold text-xl">$18</span>
                </div>
                {/* More cards... */}
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="editorial-section bg-bg-soft border-t border-walnut">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1 min-h-[300px] editorial-card" />
              <div className="flex-1">
                <h2 className="font-heading text-4xl mb-4 text-structural">Our Story</h2>
                <p className="text-lg text-olive mb-4">Family-owned. Local ingredients. Artisan craftsmanship. Cozy atmosphere.</p>
                <p className="text-charcoal">We believe in authentic hospitality and the joy of sharing good food and coffee with our community.</p>
              </div>
            </div>
          </section>

          {/* Gallery Section */}
          <section id="gallery" className="editorial-section bg-bg-alt">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="font-heading text-4xl mb-8 text-structural">Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {/* Gallery images placeholder */}
                <div className="aspect-square editorial-card" />
                <div className="aspect-square bg-bg rounded-lg shadow" />
                <div className="aspect-square bg-bg rounded-lg shadow" />
                <div className="aspect-square bg-bg rounded-lg shadow" />
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section id="testimonials" className="editorial-section bg-bg border-t border-walnut">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="font-heading text-4xl mb-8 text-structural">Testimonials</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Testimonial card placeholder */}
                <div className="editorial-card p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-gold">★★★★★</span>
                  </div>
                  <p className="text-charcoal mb-2">“The best coffee and atmosphere in town!”</p>
                  <span className="text-olive font-medium">– Happy Customer</span>
                </div>
                {/* More cards... */}
              </div>
            </div>
          </section>

          {/* Reservation Section */}
          <section id="reservation" className="editorial-section bg-bg-alt">
            <div className="max-w-md mx-auto px-4">
              <h2 className="font-heading text-4xl mb-8 text-structural text-center">Reserve a Table</h2>
              <form className="editorial-card p-8 flex flex-col gap-4">
                <input type="text" placeholder="Name" className="border border-structural rounded px-4 py-2" required />
                <input type="tel" placeholder="Phone" className="border border-structural rounded px-4 py-2" required />
                <input type="email" placeholder="Email" className="border border-structural rounded px-4 py-2" required />
                <div className="flex gap-2">
                  <input type="date" className="border border-structural rounded px-4 py-2 w-1/2" required />
                  <input type="time" className="border border-structural rounded px-4 py-2 w-1/2" required />
                </div>
                <input type="number" min="1" max="20" placeholder="Guests" className="border border-structural rounded px-4 py-2" required />
                <button type="submit" className="bg-accent text-bg px-6 py-3 rounded-full font-heading text-lg shadow hover:scale-105 transition">Book Now</button>
              </form>
            </div>
          </section>

          {/* Location & Contact Section */}
          <section id="contact" className="editorial-section bg-bg-soft border-t border-walnut">
            <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="font-heading text-4xl mb-4 text-structural">Find Us</h2>
                <div className="w-full h-64 editorial-card mb-4 flex items-center justify-center">
                  {/* Google Maps embed placeholder */}
                  <span className="text-olive">[Google Map]</span>
                </div>
                <div className="mb-2 text-charcoal">123 Main St, Your City</div>
                <div className="mb-2 text-charcoal">(555) 123-4567</div>
                <div className="mb-2 text-charcoal">info@yourcafe.com</div>
                <div className="flex gap-4 mt-4">
                  {/* Social icons placeholder */}
                  <span className="text-olive">FB</span>
                  <span className="text-olive">IG</span>
                  <span className="text-olive">TW</span>
                </div>
              </div>
              <div>
                <h3 className="font-heading text-2xl mb-2 text-structural">Business Hours</h3>
                <ul className="text-charcoal">
                  <li>Mon–Fri: 8am – 10pm</li>
                  <li>Sat–Sun: 9am – 11pm</li>
                </ul>
              </div>
            </div>
          </section>

        </main>

        {/* Footer */}
        <footer className="bg-structural text-bg py-12 mt-12">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-6 mb-4 md:mb-0">
              <a href="#home" className="hover:text-accent">Home</a>
              <a href="#menu" className="hover:text-accent">Menu</a>
              <a href="#about" className="hover:text-accent">About</a>
              <a href="#gallery" className="hover:text-accent">Gallery</a>
              <a href="#testimonials" className="hover:text-accent">Testimonials</a>
              <a href="#contact" className="hover:text-accent">Contact</a>
            </div>
            <form className="flex gap-2">
              <input type="email" placeholder="Subscribe to newsletter" className="px-4 py-2 rounded-full text-charcoal" />
              <button type="submit" className="bg-accent text-bg px-4 py-2 rounded-full font-heading">Sign Up</button>
            </form>
            <div className="text-sm">© {new Date().getFullYear()} Modern Cafe. All rights reserved.</div>
          </div>
        </footer>
      </body>
    </html>
  );
}
