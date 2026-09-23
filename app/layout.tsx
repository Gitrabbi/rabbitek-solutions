import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://rabbiteksolutions.com"),
  title: {
    default: "Rabbitek Solutions | Ideas. Technology. Real Impact.",
    template: "%s | Rabbitek Solutions",
  },
  description:
    "Smart digital solutions for businesses through web development, software, AI & automation, data analytics and digital growth.",
  keywords: [
    "Rabbitek Solutions",
    "web development",
    "custom software",
    "AI automation",
    "data analytics",
    "digital solutions",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://rabbiteksolutions.com",
    siteName: "Rabbitek Solutions",
    title: "Rabbitek Solutions | Ideas. Technology. Real Impact.",
    description: "Smart digital solutions for a brighter tomorrow.",
    images: [
      {
        url: "/images/rabbitek-social-share.png",
        width: 1200,
        height: 630,
        alt: "Rabbitek Solutions — Smart digital solutions for a brighter tomorrow",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rabbitek Solutions | Ideas. Technology. Real Impact.",
    description: "Smart digital solutions for a brighter tomorrow.",
    images: ["/images/rabbitek-social-share.png"],
  },
  robots: { index: true, follow: true },
};

const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://rabbiteksolutions.com/#organization",
  name: "Rabbitek Solutions",
  url: "https://rabbiteksolutions.com/",
  logo: "https://rabbiteksolutions.com/images/rabbitek-social-share.png",
  email: "mailto:mail@rabbiteksolutions.com",
  sameAs: ["https://www.facebook.com/rabbiteksolutions/"],
  description:
    "Smart digital solutions for businesses through web development, software development, AI and automation, data analytics and digital growth.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationStructuredData).replace(/</g, "\\u003c"),
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
