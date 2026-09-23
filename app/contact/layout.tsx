import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a project with Rabbitek Solutions. Tell us what you want to build, improve or automate and begin a conversation about the right digital solution.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Rabbitek Solutions",
    description: "Have a website, software, automation or data challenge? Start a project conversation with Rabbitek Solutions.",
    url: "/contact",
  },
};

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
