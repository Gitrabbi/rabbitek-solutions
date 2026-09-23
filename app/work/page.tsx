import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Work",
  description: "Explore selected Rabbitek Solutions projects spanning business operations, customer experiences, software, analytics and energy data.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Our Work | Rabbitek Solutions",
    description: "Digital products built around real operations, from business workflow platforms to data and energy analytics.",
    url: "/work",
  },
};

const projects = [
  {
    num: "01",
    title: "Kaklinx Auto",
    type: "OPERATIONS • CUSTOMER EXPERIENCE • ANALYTICS",
    intro: "A digital operations platform designed around the day-to-day workflow of a modern car-care business.",
    capabilities: ["Work orders & service tracking", "Customer tracking experience", "Worker assignment & performance", "Queue display & reporting"],
    metric: "LIVE OPERATIONS",
    className: "kaklinx",
  },
  {
    num: "02",
    title: "Plant Power Analytics",
    type: "ENERGY • DATA • INDUSTRIAL ANALYTICS",
    intro: "A data-focused platform concept for turning plant energy and operational information into clearer, more useful insights.",
    capabilities: ["Energy consumption visibility", "Operational KPI monitoring", "Performance trend analysis", "Decision-support dashboards"],
    metric: "SMARTER INSIGHTS",
    className: "power",
  },
];

export default function Work() {
  return (
    <>
      <section className="work-hero">
        <div className="work-hero-copy">
          <p className="eyebrow">SELECTED WORK</p>
          <h1>Digital products built around <span>real operations.</span></h1>
          <p>We combine product thinking, software, automation and data to turn practical business challenges into focused digital experiences.</p>
        </div>
        <div className="work-orbit" aria-hidden="true">
          <div className="orbit-ring ring-one" />
          <div className="orbit-ring ring-two" />
          <div className="orbit-core">R</div>
          <span className="orbit-node n1">WEB</span><span className="orbit-node n2">AI</span><span className="orbit-node n3">DATA</span>
        </div>
      </section>

      <section className="case-section">
        <div className="case-intro">
          <p className="eyebrow">CASE STUDIES</p>
          <h2>Technology with a purpose.</h2>
          <p>Not just screens. Each project starts with the workflow, people and decisions the product needs to support.</p>
        </div>

        <div className="case-stack">
          {projects.map((project) => (
            <article className="case-card" key={project.title}>
              <div className={"case-visual " + project.className}>
                <div className="case-number">{project.num}</div>
                <div className="browser-shell">
                  <div className="browser-top"><i/><i/><i/><span>{project.title}</span></div>
                  <div className="product-ui">
                    <aside><b>R</b><i/><i/><i/><i/></aside>
                    <main>
                      <div className="ui-title"><div><small>DASHBOARD</small><strong>{project.title}</strong></div><em>● LIVE</em></div>
                      <div className="ui-stats"><span><small>OVERVIEW</small><b>24</b></span><span><small>PERFORMANCE</small><b>94%</b></span><span><small>STATUS</small><b>Active</b></span></div>
                      <div className="ui-chart"><i/><i/><i/><i/><i/><i/><i/></div>
                    </main>
                  </div>
                </div>
                <div className="case-badge">{project.metric}</div>
              </div>

              <div className="case-copy">
                <p className="case-type">{project.type}</p>
                <h2>{project.title}</h2>
                <p className="case-lead">{project.intro}</p>
                <div className="capabilities">
                  {project.capabilities.map((c) => <span key={c}>✓ {c}</span>)}
                </div>
                <Link className="case-link" href="/contact">Discuss a similar project <b>↗</b></Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="work-principles">
        <div><p className="eyebrow">HOW WE THINK</p><h2>From operational challenge to digital advantage.</h2></div>
        <div className="principle-grid">
          <article><b>01</b><h3>Understand</h3><p>Start with the real workflow, bottlenecks and business goal.</p></article>
          <article><b>02</b><h3>Design</h3><p>Shape a focused experience around the people who will use it.</p></article>
          <article><b>03</b><h3>Build</h3><p>Develop practical technology that can evolve with the business.</p></article>
        </div>
      </section>

      <section className="work-cta">
        <p className="eyebrow">HAVE AN IDEA?</p>
        <h2>Let’s turn it into something <span>useful.</span></h2>
        <p>Tell us what you are trying to improve, automate or build.</p>
        <Link className="btn" href="/contact">Start a Project →</Link>
      </section>
    </>
  );
}
