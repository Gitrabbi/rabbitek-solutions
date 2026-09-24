import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kaklinx Auto Case Study",
  description: "See how Rabbitek Solutions designed a connected operations platform for car-care workflows, customer tracking, workforce management and reporting.",
  alternates: { canonical: "/work/kaklinx-auto" },
};

export default function KaklinxCaseStudy() {
  return <>
    <section className="case-detail-hero">
      <div><p className="eyebrow">CASE STUDY • OPERATIONS SOFTWARE</p><h1>Kaklinx Auto</h1><p className="case-detail-lead">A connected digital operations platform designed around the day-to-day workflow of a modern car-care business.</p><div className="case-tags"><span>Next.js</span><span>Supabase</span><span>Operations</span><span>Customer Experience</span><span>Analytics</span></div></div>
      <div className="case-detail-panel"><small>THE IDEA</small><strong>Bring the customer journey, service workflow, workforce and management visibility into one connected experience.</strong></div>
    </section>

    <section className="case-story">
      <div className="case-story-heading"><p className="eyebrow">THE CHALLENGE</p><h2>One operation. Many moving parts.</h2></div>
      <div className="case-story-copy"><p>A busy car-care operation needs to coordinate arriving customers, service selection, pricing, work allocation, queue visibility, completion and reporting. When those activities are handled separately, it becomes harder to maintain a clear view of what is happening across the business.</p><p>The product was therefore shaped around the operational flow rather than around isolated software features.</p></div>
    </section>

    <section className="case-feature-section"><p className="eyebrow">THE SOLUTION</p><h2>A workflow built from arrival to completion.</h2><div className="case-feature-grid">
      <article><b>01</b><h3>Work orders</h3><p>Create and track jobs through active and completed states, with services, pricing and assignment connected to each order.</p></article>
      <article><b>02</b><h3>Customer experience</h3><p>Give customers a clearer way to follow service progress and provide feedback after completion.</p></article>
      <article><b>03</b><h3>Workforce management</h3><p>Support worker assignment, attendance, performance visibility and commission-related workflows.</p></article>
      <article><b>04</b><h3>Operational visibility</h3><p>Bring queue displays, reporting, daily accounting and utility tracking into the wider management experience.</p></article>
    </div></section>

    <section className="case-outcome"><div><p className="eyebrow">PRODUCT THINKING</p><h2>Designed as an operating system for the business.</h2></div><div><p>The value of the platform is not a single feature. It is the connection between customer activity, service delivery, people and management information.</p><p>This project demonstrates Rabbitek&apos;s approach to custom software: understand the real workflow first, then build technology around it.</p></div></section>

    <section className="work-cta"><p className="eyebrow">NEED SOMETHING SIMILAR?</p><h2>Turn your workflow into a <span>digital product.</span></h2><p>Tell us what your team is currently managing manually or across disconnected tools.</p><Link className="btn" href="/contact">Discuss Your Project →</Link><Link className="case-back" href="/work">← Back to Our Work</Link></section>
  </>;
}
