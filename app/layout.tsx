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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
