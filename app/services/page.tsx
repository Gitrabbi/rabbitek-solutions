import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Digital Services",
  description: "Explore Rabbitek Solutions services in web and e-commerce, custom software, AI and automation, data analytics, digital growth and ongoing technical support.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Digital Services | Rabbitek Solutions",
    description: "Web, software, AI, automation and data solutions designed around practical business needs.",
    url: "/services",
  },
};

const services=[
["01","Web & E-commerce","Digital experiences that make a strong first impression and give customers a clear path to act.",["Business websites","Landing pages","E-commerce experiences","Responsive design"],"WEB"],
["02","Custom Software","Purpose-built applications for the workflows, information and operations that generic tools cannot fit.",["Business applications","Customer portals","Operational systems","Workflow tools"],"SOFTWARE"],
["03","AI & Automation","Practical automation that connects repetitive tasks, information and intelligent assistance.",["Workflow automation","AI-assisted experiences","System integrations","Process improvement"],"AI"],
["04","Data & Analytics","Interfaces that turn operational information into clearer visibility and more useful decisions.",["KPI dashboards","Performance reporting","Data visualisation","Operational insights"],"DATA"],
["05","Digital Growth","A stronger digital foundation for reaching audiences, learning what works and improving over time.",["Search foundations","Campaign support","Digital measurement","Conversion thinking"],"GROWTH"],
["06","Support & Improvement","Ongoing technical care and iterative improvement as your business and digital products evolve.",["Maintenance","Enhancements","Technical support","Continuous improvement"],"SUPPORT"]];
export default function Services(){return <><section className="services-hero"><p className="eyebrow">WHAT WE DO</p><h1>From digital presence<br/>to <span>digital capability.</span></h1><p>We combine design, software, automation and data to create practical technology around the way your business works.</p><div className="studio-tags"><span>DESIGN</span><span>DEVELOPMENT</span><span>AUTOMATION</span><span>INSIGHT</span></div></section><section className="services-grid">{services.map(([n,t,d,items,k])=><article key={String(t)}><div className="svc-top"><span>{n as string}</span><b>{k as string}</b></div><h2>{t as string}</h2><p>{d as string}</p><div className="svc-items">{(items as string[]).map(x=><span key={x}>↗ {x}</span>)}</div><Link href="/contact">Discuss this capability <b>↗</b></Link></article>)}</section><section className="service-method"><div><p className="eyebrow">OUR APPROACH</p><h2>The technology comes <span>after the question.</span></h2></div><div><p>What are you trying to improve? What is slowing the business down? What should the customer experience feel like? We use those answers to shape the right solution.</p><Link className="outline" href="/about">How we think →</Link></div></section><section className="work-cta"><p className="eyebrow">NOT SURE WHERE TO START?</p><h2>Start with the <span>challenge.</span></h2><p>Tell us what is happening in your business. We’ll help you shape the digital opportunity.</p><Link className="btn" href="/contact">Talk to Rabbitek →</Link></section></>}
