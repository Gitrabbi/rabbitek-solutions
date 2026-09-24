import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Plant Power Analytics Case Study",
  description: "Explore Rabbitek Solutions' approach to industrial energy analytics, operational KPIs, trends and decision-support dashboards.",
  alternates: { canonical: "/work/plant-power-analytics" },
};

export default function PlantPowerCaseStudy() {
  return <>
    <section className="case-detail-hero">
      <div><p className="eyebrow">CASE STUDY • DATA & INDUSTRIAL ANALYTICS</p><h1>Plant Power Analytics</h1><p className="case-detail-lead">A data-focused platform concept for transforming plant energy and operational information into clearer, decision-ready insight.</p><div className="case-tags"><span>Energy Data</span><span>Dashboards</span><span>KPIs</span><span>Industrial Analytics</span></div></div>
      <div className="case-detail-panel"><small>THE IDEA</small><strong>Move from scattered consumption figures to a clearer picture of energy performance, operating patterns and opportunities for improvement.</strong></div>
    </section>

    <section className="case-story"><div className="case-story-heading"><p className="eyebrow">THE CHALLENGE</p><h2>Data is useful only when it supports a decision.</h2></div><div className="case-story-copy"><p>Industrial facilities can generate large amounts of energy and operational data, but raw readings alone do not explain performance. Teams need context: trends, production relationships, abnormal patterns and meaningful KPIs.</p><p>The concept focuses on making those relationships easier to see and use.</p></div></section>

    <section className="case-feature-section"><p className="eyebrow">THE SOLUTION</p><h2>Turn operational data into a management view.</h2><div className="case-feature-grid">
      <article><b>01</b><h3>Consumption visibility</h3><p>Organise energy information into clear views that make changes in consumption easier to understand.</p></article>
      <article><b>02</b><h3>Performance KPIs</h3><p>Connect energy use with operational measures so teams can assess efficiency rather than consumption alone.</p></article>
      <article><b>03</b><h3>Trend analysis</h3><p>Surface patterns over time to support investigation, comparison and continuous-improvement conversations.</p></article>
      <article><b>04</b><h3>Decision support</h3><p>Present the information through focused dashboards designed to help technical and operational teams act on what they see.</p></article>
    </div></section>

    <section className="case-outcome"><div><p className="eyebrow">PRODUCT THINKING</p><h2>From measurement to understanding.</h2></div><div><p>The goal is not simply to digitise a spreadsheet. It is to structure information around the questions plant teams actually need to answer.</p><p>This case study represents Rabbitek&apos;s data approach: combine domain understanding, analytics and thoughtful interfaces to make operational information more useful.</p></div></section>

    <section className="work-cta"><p className="eyebrow">HAVE OPERATIONAL DATA?</p><h2>Make it easier to <span>understand and act on.</span></h2><p>We can help shape dashboards and data products around the decisions your team needs to make.</p><Link className="btn" href="/contact">Discuss Your Data Project →</Link><Link className="case-back" href="/work">← Back to Our Work</Link></section>
  </>;
}
