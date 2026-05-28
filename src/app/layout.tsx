import "./globals.css";
import React from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#F7F2EA" />
        <meta name="description" content="A premium, modern restaurant and cafe in your city. Reserve a table, view our menu, and experience artisan dining." />
        <title>Modern Restaurant & Cafe</title>
        {/* Google Fonts for headings and body */}
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
        {/* Open Graph & SEO tags would go here */}
      </head>
      <body className="bg-bg text-charcoal font-body min-h-full flex flex-col">
        {/* Sticky Navigation */}
        <header className="sticky top-0 z-50 bg-bg/90 backdrop-blur border-b border-structural">
          <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="font-heading text-2xl text-structural">CafeLogo</span>
            </div>
            <ul className="hidden md:flex gap-8 font-medium text-structural">
              <li><a href="#home" className="hover:text-accent transition">Home</a></li>
              <li><a href="#menu" className="hover:text-accent transition">Menu</a></li>
              <li><a href="#about" className="hover:text-accent transition">About</a></li>
              <li><a href="#gallery" className="hover:text-accent transition">Gallery</a></li>
              <li><a href="#testimonials" className="hover:text-accent transition">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-accent transition">Contact</a></li>
            </ul>
            <a href="#reservation" className="hidden md:inline-block bg-accent text-bg px-5 py-2 rounded-full font-heading text-lg shadow hover:scale-105 transition">Reserve</a>
            {/* Mobile hamburger menu placeholder */}
            <button className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-accent" aria-label="Open menu">
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
          </nav>
        </header>

        <main className="flex-1">
          {/* Hero Section */}
          <section id="home" className="min-h-[90vh] flex flex-col justify-center items-center bg-bg relative overflow-hidden">
            {/* Hero content and image will go here */}
            <div className="text-center max-w-2xl mx-auto py-24">
              <h1 className="font-heading text-5xl md:text-7xl mb-6 text-structural">A Modern Cafe Experience</h1>
              <p className="text-lg md:text-2xl mb-8 text-olive">Warm. Elegant. Handcrafted. Welcome to your new favorite spot.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#reservation" className="bg-accent text-bg px-8 py-3 rounded-full font-heading text-xl shadow hover:scale-105 transition">Reserve a Table</a>
                <a href="#menu" className="bg-structural text-bg px-8 py-3 rounded-full font-heading text-xl shadow hover:bg-olive transition">View Menu</a>
              </div>
            </div>
          </section>

          {/* Featured Menu Section */}
          <section id="menu" className="py-24 bg-cream">
            <div className="max-w-6xl mx-auto px-4">
              {/* Menu cards and filters placeholder */}
              <h2 className="font-heading text-4xl mb-8 text-structural">Featured Menu</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Example card */}
                <div className="bg-bg rounded-xl shadow p-6 hover:shadow-lg transition border border-structural">
                  <h3 className="font-heading text-2xl mb-2">Signature Dish</h3>
                  <p className="text-olive mb-2">A delicious artisan creation.</p>
                  <span className="block text-accent font-bold text-xl">$18</span>
                </div>
                {/* More cards... */}
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-24 bg-bg border-t border-structural">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1 min-h-[300px] bg-cream rounded-xl shadow" />
              <div className="flex-1">
                <h2 className="font-heading text-4xl mb-4 text-structural">Our Story</h2>
                <p className="text-lg text-olive mb-4">Family-owned. Local ingredients. Artisan craftsmanship. Cozy atmosphere.</p>
                <p className="text-charcoal">We believe in authentic hospitality and the joy of sharing good food and coffee with our community.</p>
              </div>
            </div>
          </section>

          {/* Gallery Section */}
          <section id="gallery" className="py-24 bg-cream">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="font-heading text-4xl mb-8 text-structural">Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {/* Gallery images placeholder */}
                <div className="aspect-square bg-bg rounded-lg shadow" />
                <div className="aspect-square bg-bg rounded-lg shadow" />
                <div className="aspect-square bg-bg rounded-lg shadow" />
                <div className="aspect-square bg-bg rounded-lg shadow" />
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section id="testimonials" className="py-24 bg-bg border-t border-structural">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="font-heading text-4xl mb-8 text-structural">Testimonials</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Testimonial card placeholder */}
                <div className="bg-cream rounded-xl shadow p-6">
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
          <section id="reservation" className="py-24 bg-cream">
            <div className="max-w-md mx-auto px-4">
              <h2 className="font-heading text-4xl mb-8 text-structural text-center">Reserve a Table</h2>
              <form className="bg-bg rounded-xl shadow p-8 flex flex-col gap-4">
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
          <section id="contact" className="py-24 bg-bg border-t border-structural">
            <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="font-heading text-4xl mb-4 text-structural">Find Us</h2>
                <div className="w-full h-64 bg-cream rounded-xl shadow mb-4 flex items-center justify-center">
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
        <footer className="bg-structural text-bg py-8 mt-12">
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
