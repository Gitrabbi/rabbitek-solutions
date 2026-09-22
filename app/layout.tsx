import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata={
 metadataBase:new URL("https://rabbiteksolutions.com"),
 title:{default:"Rabbitek Solutions | Smart Digital Solutions",template:"%s | Rabbitek Solutions"},
 description:"Websites, custom software, AI automation and data solutions that help businesses work smarter and grow.",
 keywords:["Rabbitek Solutions","web development","custom software","AI automation","data analytics","digital solutions"],
 alternates:{canonical:"/"},
 openGraph:{type:"website",url:"https://rabbiteksolutions.com",siteName:"Rabbitek Solutions",title:"Rabbitek Solutions | Smart Digital Solutions",description:"Websites, custom software, AI automation and data solutions that help businesses work smarter and grow."},
 twitter:{card:"summary_large_image",title:"Rabbitek Solutions | Smart Digital Solutions",description:"Smart digital solutions for growing businesses."},
 robots:{index:true,follow:true},
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Header/><main>{children}</main><Footer/></body></html>}