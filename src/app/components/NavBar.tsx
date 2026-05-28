// src/app/components/NavBar.tsx
import React from "react";
import siteConfig from "../siteConfig";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 bg-bg/70 backdrop-blur-md border-b border-structural/30 transition-all duration-300" role="banner">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4" aria-label="Main navigation">
        <div className="flex items-center gap-3">
          <span className="font-heading text-3xl text-structural tracking-tight">{siteConfig.name}</span>
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
  );
}
