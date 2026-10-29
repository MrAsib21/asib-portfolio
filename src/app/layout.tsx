import type { Metadata } from "next";
import { Fraunces, Instrument_Sans, JetBrains_Mono, Caveat } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/ui/SmoothScroll";
import { DeskNoiseFilters } from "@/components/desk/DeskNoise";
import { SkipToContent } from "@/components/navigation/SkipToContent";
import { TopNav } from "@/components/navigation/TopNav";
import { Footer } from "@/components/navigation/Footer";
import { PersistentHireMe } from "@/components/navigation/PersistentHireMe";
import { siteConfig } from "@/content/site";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — Software Engineer & Web Developer`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.elevatorPitch,
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://asibmahmud.com"),
  authors: [{ name: siteConfig.name, url: "https://asibmahmud.com" }],
  creator: siteConfig.name,
  keywords: [
    "Asib Mahmud",
    "Software Engineer Bangladesh",
    "Web Developer Dhaka",
    "WordPress Developer",
    "Computer Vision Engineer",
    "Data Science Freelancer",
    "AI ML Engineer",
    "Front-End Engineer",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://asibmahmud.com",
    title: `${siteConfig.name} — Software Engineer & Web Developer`,
    description: siteConfig.elevatorPitch,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Software Engineer & Web Developer`,
    description: siteConfig.elevatorPitch,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${instrument.variable} ${jetbrains.variable} ${caveat.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: siteConfig.name,
              url: "https://asibmahmud.com",
              jobTitle: "Software Engineer & Web Developer",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Dhaka",
                addressCountry: "Bangladesh",
              },
              sameAs: [siteConfig.github, siteConfig.linkedin],
              knowsAbout: [
                "Software Engineering",
                "Web Development",
                "WordPress",
                "Computer Vision",
                "Machine Learning",
                "Data Science",
                "Next.js",
                "TypeScript",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: `${siteConfig.name} — Software Consulting`,
              url: "https://asibmahmud.com",
              description: siteConfig.elevatorPitch,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Dhaka",
                addressCountry: "Bangladesh",
              },
              priceRange: "$$",
            }),
          }}
        />
      </head>
      <body className="font-body text-ink antialiased selection:bg-vermilion/20 selection:text-ink relative">

        <SmoothScrollProvider>
          <DeskNoiseFilters />
          <SkipToContent />
          <TopNav />
          <div className="flex min-h-screen flex-col">
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <PersistentHireMe />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
