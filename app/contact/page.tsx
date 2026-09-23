"use client";
import {FormEvent,useState} from "react";

export default function Contact(){
 const [status,setStatus]=useState<"idle"|"sending"|"sent"|"error">("idle");
 async function submit(e:FormEvent<HTMLFormElement>){
  e.preventDefault(); setStatus("sending");
  const form=e.currentTarget; const data=new FormData(form);
  try{
   const response=await fetch("https://formsubmit.co/ajax/mail@rabbiteksolutions.com",{method:"POST",headers:{"Accept":"application/json"},body:data});
   let result:{success?:boolean|string;message?:string}={};
   try{result=await response.json()}catch{}
   const accepted=response.ok&&(result.success===true||result.success==="true");
   if(!accepted){
    console.error("FormSubmit response",response.status,result);
    throw new Error(result.message||"Unable to send");
   }
   form.reset(); setStatus("sent");
  }catch{setStatus("error")}
 }
 return <><section className="contact-hero"><div><p className="eyebrow">START A PROJECT</p><h1>What could we<br/><span>build together?</span></h1><p>Tell us about the idea, workflow or business challenge. A useful solution starts with understanding what needs to change.</p></div><div className="contact-signal"><div className="signal-core">R</div><i/><i/><i/><span>PROJECT SIGNAL</span></div></section>
 <section className="contact-studio"><div className="contact-intro"><p className="eyebrow">PROJECT ENQUIRY</p><h2>Start with the challenge.</h2><p>You do not need to know the technical solution yet. Give us the context, what you want to improve and what a good outcome looks like.</p><div className="contact-steps"><span><b>01</b> Share the challenge</span><span><b>02</b> Explore the opportunity</span><span><b>03</b> Shape the solution</span></div></div>
 <form className="studio-form" onSubmit={submit}><input type="hidden" name="_subject" value="New Rabbitek project enquiry"/><input type="hidden" name="_template" value="table"/><input type="text" name="_honey" className="honey" tabIndex={-1} autoComplete="off"/>
 <div className="form-row"><label><span>YOUR NAME *</span><input required name="name" placeholder="How should we address you?"/></label><label><span>EMAIL *</span><input required type="email" name="email" placeholder="you@company.com"/></label></div>
 <div className="form-row"><label><span>COMPANY / ORGANISATION</span><input name="company" placeholder="Optional"/></label><label><span>WHAT ARE YOU INTERESTED IN?</span><select name="service" defaultValue=""><option value="" disabled>Select a capability</option><option>Web & E-commerce</option><option>Custom Software</option><option>AI & Automation</option><option>Data & Analytics</option><option>Digital Growth</option><option>Support & Improvement</option><option>Not sure yet</option></select></label></div>
 <label><span>TELL US ABOUT THE PROJECT *</span><textarea required rows={7} name="message" placeholder="What are you trying to build, improve or automate? What is happening today?"/></label>
 <button className="btn submit-btn" disabled={status==="sending"} type="submit">{status==="sending"?"Sending…":"Send Project Enquiry →"}</button>
 {status==="sent"&&<p className="form-note success">Thanks. Your project enquiry has been sent.</p>}{status==="error"&&<p className="form-note form-error">We couldn't send the enquiry. Please try again in a moment.</p>}
 </form></section>
 <section className="contact-bottom"><div><p className="eyebrow">A GOOD BRIEF DOESN'T NEED TO BE PERFECT</p><h2>Bring the problem.<br/><span>We’ll explore the possibilities.</span></h2></div><p>Whether you need a website, an internal system, better visibility from your data or an automation idea brought to life, the conversation can start here.</p></section></>
}