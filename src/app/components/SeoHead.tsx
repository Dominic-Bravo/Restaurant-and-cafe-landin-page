// src/app/components/SeoHead.tsx
import React from "react";
import siteConfig from "../siteConfig";

export default function SeoHead() {
  return (
    <>
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
    </>
  );
}
