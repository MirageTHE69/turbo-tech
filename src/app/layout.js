import "./globals.css";
import { CmsProvider } from "@/context/CmsContext";

export const metadata = {
  metadataBase: new URL('https://turbotech.co.in'),
  title: {
    default: "Industrial Engineering & EPC Solutions Company in Kushinagar, UP | Turbo Tech",
    template: "%s | Turbo Tech",
  },
  description: "Turbo Tech delivers mechanical construction, fabrication, piping, plant maintenance & industrial manpower solutions across Kushinagar and UP. 13+ years, ISO certified.",
  keywords: [
    "industrial engineering company Kushinagar",
    "EPC solutions UP",
    "mechanical construction company Uttar Pradesh",
    "welding institute Kushinagar",
    "welding course UP with placement",
    "plant maintenance Kushinagar",
    "industrial piping Uttar Pradesh"
  ],
  authors: [{ name: "Turbo Tech" }],
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Turbo Tech',
    url: 'https://turbotech.co.in',
    logo: 'https://turbotech.co.in/images/hero_plant.png',
    description: 'Turbo Tech is an Indian industrial engineering and infrastructure company specializing in mechanical construction, fabrication, piping systems, plant maintenance, industrial manpower solutions, civil works, fire & safety systems, and technical workforce development.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Koindi Gosai Pa (Near Brahm Sthan), Tamkuhi Raj',
      addressLocality: 'Kushinagar',
      addressRegion: 'Uttar Pradesh',
      postalCode: '274407',
      addressCountry: 'IN',
    },
    telephone: '+91-6351149073',
    email: 'santosh.turbotech@gmail.com',
    sameAs: [
      'https://www.linkedin.com/company/turbotech',
      'https://www.facebook.com/turbotech'
    ]
  };

  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-white text-[#0F1520]">
        <CmsProvider>
          {children}
        </CmsProvider>
      </body>
    </html>
  );
}
