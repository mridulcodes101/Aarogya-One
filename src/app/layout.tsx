import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "../styles/globals.css";
import LenisProvider from "@/components/providers/LenisProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aarogyaone.com"),
  title: {
    default: "Aarogya One - Premium Wellness & Clinical Excellence",
    template: "%s | Aarogya One",
  },
  description: "Experience a new echelon of personalized medical care. We integrate state-of-the-art wellness technology with board-certified clinical excellence to cultivate lifelong vitality.",
  keywords: ["aarogya one", "luxury healthcare", "preventive medicine", "dermatology", "cardiology", "wellness suite", "longevity assessment"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aarogyaone.com",
    siteName: "Aarogya One",
    title: "Aarogya One - Premium Wellness & Clinical Excellence",
    description: "Experience a new echelon of personalized medical care. We integrate state-of-the-art wellness technology with board-certified clinical excellence to cultivate lifelong vitality.",
    images: [
      {
        url: "/luxury_clinic_lobby.png",
        width: 1200,
        height: 630,
        alt: "Aarogya One Luxury Lobby",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aarogya One - Premium Wellness & Clinical Excellence",
    description: "Experience a new echelon of personalized medical care. We integrate state-of-the-art wellness technology with board-certified clinical excellence to cultivate lifelong vitality.",
    images: ["/luxury_clinic_lobby.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "name": "Aarogya One",
  "image": "https://aarogyaone.com/luxury_clinic_lobby.png",
  "@id": "https://aarogyaone.com/#aarogyaone",
  "url": "https://aarogyaone.com",
  "telephone": "+91-81095-73183",
  "priceRange": "$$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "23, Sir M. Visvesvaraya Marg, Vallabh Nagar",
    "addressLocality": "Indore",
    "addressRegion": "Madhya Pradesh",
    "postalCode": "452003",
    "addressCountry": "IN",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 22.7246,
    "longitude": 75.8719,
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "14:00",
    },
  ],
  "sameAs": [
    "https://www.facebook.com/aarogyaone",
    "https://www.instagram.com/aarogyaone",
    "https://twitter.com/aarogyaone",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <LenisProvider>
          <Navbar />
          <div className="flex-1 flex flex-col pt-24">
            {children}
          </div>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
