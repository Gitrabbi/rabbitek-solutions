import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export const metadata: Metadata={title:{default:"Rabbitek Solutions | Smart Digital Solutions",template:"%s | Rabbitek Solutions"},description:"Websites, custom software, AI automation and data solutions that help businesses work smarter and grow."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Header/><main>{children}</main><Footer/></body></html>}