import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, MapPin, Mail, Globe, Phone, Building2, Award, BookOpen, Users, TrendingUp, CheckCircle2, Shield, Zap } from "lucide-react";

const team = [
  { initials:"UES", name:"Utibe-Abasi Emmanuel Samuel", role:"Chairman & CEO", bio:"Founder and Chief Executive of Affidex Academy Ltd. Technology entrepreneur and vocational education advocate based in Uyo. Drove the institution from incorporation to multi-state, internationally affiliated standing in under 90 days." },
  { initials:"EES", name:"Edidiong Emmanuel Samuel", role:"Managing Director / Director of Academics", bio:"Oversees all academic operations and curriculum development. Bridges Affidex Academy with the university community in Uyo, driving campus outreach and institutional partnerships." },
  { initials:"OG", name:"Ogoluwa", role:"Director of Operations", bio:"Manages day-to-day operations, venue logistics, trainer coordination, and programme delivery across both Uyo centres." },
  { initials:"FBU", name:"Director of Partnerships & BD", role:"Business Development", bio:"Leads sponsor and investor engagement, corporate outreach, and community partnerships. Secures resources and visibility for each programme cycle." },
];

const values = [
  { icon:<Zap size={22}/>, title:"Practicality", body:"We teach what works in the real market, not just what looks good on paper. 70% hands-on delivery, 30% theory." },
  { icon:<Users size={22}/>, title:"Inclusion", body:"We actively serve those excluded by cost, location, and systemic barriers — especially women, youth, and underserved communities." },
  { icon:<Award size={22}/>, title:"Excellence", body:"Our graduates represent Affidex everywhere they go. We protect that standard through rigorous curriculum and assessment." },
  { icon:<Shield size={22}/>, title:"Integrity", body:"We operate with transparency toward every student, partner, donor, and regulator — no hidden fees, no false promises." },
  { icon:<TrendingUp size={22}/>, title:"Impact", body:"We measure success in incomes earned, not certificates printed. Post-graduation tracking of employment and enterprise outcomes." },
  { icon:<BookOpen size={22}/>, title:"Lifelong Learning", body:"We build alumni networks and post-graduation business continuity support so the relationship doesn't end at graduation." },
];

const milestones = [
  { date:"12 Feb 2026", event:"Affidex Academy Ltd incorporated at the CAC", note:"RC: 9316934", done:true },
  { date:"19 Mar 2026", event:"SMEDAN certification received across 6 programmes", note:"SUID-5998-5813-3500-9105", done:true },
  { date:"Mar 2026", event:"Microsoft AI Cloud Partner status verified", done:true },
  { date:"Mar 2026", event:"UNESCO-UNEVOC active participation confirmed", done:true },
  { date:"Mar 2026", event:"NYSC SAED Registered Training Partner status secured", done:true },
  { date:"Mar 2026", event:"FME TVET initial approval received — NBTE site visit scheduled", done:true },
  { date:"Mar 2026", event:"IPPN Uyo (Udo Udoma Avenue) second centre established", done:true },
  { date:"Apr 2026", event:"KBS ICSS-TFC Certification and BDSP Accreditation applied", done:true },
  { date:"Q3 2026", event:"3MTT programme commencement — approved Training Provider", note:"Confirmed with National Programme Director", done:false },
  { date:"Q3 2026", event:"NBTE accreditation visit and full TVET accreditation", done:false },
  { date:"Q4 2026", event:"First cohort graduation across both Uyo centres", done:false },
  { date:"2027", event:"Expansion to Cross River State campus — Calabar", done:false },
];

const registrations = [
  { cat:"Corporate", items:["CAC RC-9316934 (Incorporated Feb 2026)","SMEDAN MSME Certificate","Tax Identification Number (TIN)"] },
  { cat:"Federal Programme Access", items:["NYSC SAED Training Partner","FME TVET Initial Approval","3MTT Applied Training Provider","NBTE Accreditation (in process)","NITDA IICP (in process)","CPN Corporate Member (in process)"] },
  { cat:"International", items:["Microsoft AI Cloud Partner","UNESCO-UNEVOC Active Member","ACTD Accreditation Applied","AWIF SHE-TECH Proposal Submitted"] },
  { cat:"Enterprise & Finance", items:["SMEDAN Select Programme (SSP)","SMEDAN Conditional Grant Scheme","National BDSPs Certification","GCSS-2 National Business Skills","Cluster Development Support","SME Databanc Registration"] },
];

export default function AcademyAbout() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden noise py-24" style={{background:'linear-gradient(135deg,#0D1F35,#1B3A5C)'}}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10" style={{background:'radial-gradient(circle,#C9973A,transparent 70%)'}}/>
        </div>
        <div className="container relative z-10 max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] mb-4" style={{color:'#C9973A'}}>About Affidex Academy</p>
          <h1 className="font-black text-white leading-tight" style={{fontFamily:"'Playfair Display',serif",fontSize:'clamp(2.2rem,4.5vw,3.5rem)'}}>
            Built to close Nigeria's{" "}
            <span style={{color:'#C9973A'}}>digital skills gap.</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed max-w-3xl" style={{color:'#CBD5E1'}}>
            Affidex Academy Limited is a Nigerian vocational and digital skills institution headquartered in Uyo, Akwa Ibom State. We exist to build employability, enterprise, and income pathways for underserved youth, women, and communities through practical, industry-aligned ICT and technology training delivery.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {["Microsoft AI Cloud Partner","UNESCO-UNEVOC","NYSC SAED Partner","SMEDAN Certified","CAC RC-9316934"].map((b,i)=>(
              <span key={i} className="text-xs px-3 py-1.5 rounded-full font-semibold"
                style={{background:'rgba(201,151,58,0.15)',border:'1px solid rgba(201,151,58,0.3)',color:'#E8B95A'}}>
                ✓ {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Mission + Vision */}
      <section className="py-20 border-b" style={{background:'#FFFFFF',borderColor:'#E2E8F0'}}>
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl">
            <div className="rounded-2xl border p-8" style={{borderColor:'#E2E8F0',background:'#FAF8F4'}}>
              <div className="flex items-center gap-3 mb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl text-white" style={{background:'#0D1F35'}}><Target size={18}/></div>
                <h2 className="text-xl font-black" style={{color:'#0D1F35',fontFamily:"'Playfair Display',serif"}}>Our Mission</h2>
              </div>
              <p className="text-base leading-relaxed" style={{color:'#475569'}}>
                To deliver practical, affordable, and market-linked ICT training that transitions young Nigerians — especially women, youth, and underserved communities — from exclusion to dignified, sustainable digital livelihoods.
              </p>
            </div>
            <div className="rounded-2xl border p-8" style={{borderColor:'#E2E8F0',background:'#FAF8F4'}}>
              <div className="flex items-center gap-3 mb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl text-white" style={{background:'#0D1F35'}}><Eye size={18}/></div>
                <h2 className="text-xl font-black" style={{color:'#0D1F35',fontFamily:"'Playfair Display',serif"}}>Our Vision</h2>
              </div>
              <p className="text-base leading-relaxed" style={{color:'#475569'}}>
                To become the leading practical technology and vocational training institution in Southern Nigeria — a trusted pipeline of digital talent, women-led enterprises, and community-level economic transformation across Akwa Ibom, Cross River, Abia, Delta, and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 border-b" style={{background:'#FAF8F4',borderColor:'#E2E8F0'}}>
        <div className="container">
          <p className="text-xs font-bold uppercase tracking-[0.18em] mb-3" style={{color:'#C9973A'}}>Core Values</p>
          <h2 className="font-black mb-12 max-w-xl" style={{color:'#0D1F35',fontFamily:"'Playfair Display',serif",fontSize:'clamp(1.6rem,3vw,2.4rem)'}}>
            Our values are operational, not decorative.
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl">
            {values.map((v,i)=>(
              <div key={i} className="card-hover rounded-2xl border bg-white p-6" style={{borderColor:'#E2E8F0'}}>
                <div className="mb-4 inline-flex rounded-xl p-3" style={{background:'rgba(13,31,53,0.07)',color:'#0D1F35'}}>{v.icon}</div>
                <h3 className="text-base font-bold mb-2" style={{color:'#0D1F35'}}>{v.title}</h3>
                <p className="text-sm leading-relaxed" style={{color:'#64748B'}}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registrations */}
      <section className="py-20 border-b" style={{background:'#FFFFFF',borderColor:'#E2E8F0'}}>
        <div className="container">
          <p className="text-xs font-bold uppercase tracking-[0.18em] mb-3" style={{color:'#C9973A'}}>Institutional Standing</p>
          <h2 className="font-black mb-12 max-w-xl" style={{color:'#0D1F35',fontFamily:"'Playfair Display',serif",fontSize:'clamp(1.6rem,3vw,2.4rem)'}}>
            Registrations & affiliations.
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 max-w-4xl">
            {registrations.map((r,i)=>(
              <div key={i} className="rounded-2xl border p-6" style={{borderColor:'#E2E8F0',background:'#FAF8F4'}}>
                <h3 className="text-xs font-bold uppercase tracking-[0.15em] mb-4" style={{color:'#C9973A'}}>{r.cat}</h3>
                <ul className="space-y-2">
                  {r.items.map((item,j)=>(
                    <li key={j} className="flex items-start gap-2 text-sm" style={{color:'#0D1F35'}}>
                      <CheckCircle2 size={13} className="mt-0.5 shrink-0" style={{color:'#C9973A'}}/>{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 border-b" style={{background:'#FAF8F4',borderColor:'#E2E8F0'}}>
        <div className="container">
          <p className="text-xs font-bold uppercase tracking-[0.18em] mb-3" style={{color:'#C9973A'}}>Our Journey</p>
          <h2 className="font-black mb-12" style={{color:'#0D1F35',fontFamily:"'Playfair Display',serif",fontSize:'clamp(1.6rem,3vw,2.4rem)'}}>
            Where we've been. Where we're going.
          </h2>
          <div className="max-w-2xl space-y-4">
            {milestones.map((m,i)=>(
              <div key={i} className="flex items-start gap-4">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white text-[10px] font-bold ${m.done ? '' : 'opacity-40'}`}
                  style={{background:m.done ? '#0D1F35' : '#64748B'}}>
                  {m.done ? '✓' : '→'}
                </div>
                <div className={`rounded-xl border flex-1 px-5 py-3.5 ${m.done ? 'bg-white' : 'bg-white/50'}`} style={{borderColor:'#E2E8F0'}}>
                  <div className="text-xs font-bold mb-0.5" style={{color:'#C9973A'}}>{m.date}</div>
                  <p className="text-sm font-medium" style={{color:'#0D1F35'}}>{m.event}</p>
                  {m.note && <p className="text-xs mt-0.5" style={{color:'#94A3B8'}}>{m.note}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 border-b" style={{background:'#FFFFFF',borderColor:'#E2E8F0'}}>
        <div className="container">
          <p className="text-xs font-bold uppercase tracking-[0.18em] mb-3" style={{color:'#C9973A'}}>Leadership</p>
          <h2 className="font-black mb-12" style={{color:'#0D1F35',fontFamily:"'Playfair Display',serif",fontSize:'clamp(1.6rem,3vw,2.4rem)'}}>
            The people behind the mission.
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl">
            {team.map((t,i)=>(
              <div key={i} className="card-hover rounded-2xl border p-6" style={{borderColor:'#E2E8F0'}}>
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full text-white text-sm font-black" style={{background:'linear-gradient(135deg,#0D1F35,#1B3A5C)'}}>
                  {t.initials}
                </div>
                <h4 className="text-sm font-bold leading-snug" style={{color:'#0D1F35'}}>{t.name}</h4>
                <p className="mt-1 text-xs font-semibold" style={{color:'#C9973A'}}>{t.role}</p>
                <p className="mt-3 text-xs leading-relaxed" style={{color:'#64748B'}}>{t.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations + Contact */}
      <section className="py-20 border-b" style={{background:'#FAF8F4',borderColor:'#E2E8F0'}}>
        <div className="container">
          <div className="grid gap-10 md:grid-cols-2 max-w-4xl">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] mb-3" style={{color:'#C9973A'}}>Our Training Centres</p>
              <h2 className="font-black mb-6" style={{color:'#0D1F35',fontFamily:"'Playfair Display',serif",fontSize:'1.6rem'}}>Where we operate</h2>
              {[
                { name:"ChainSpace Hub (HQ)", addr:"Mboho Mkparawa Ibibio Business Wing, Uyo, Akwa Ibom", note:"150-seat capacity" },
                { name:"IPPN Uyo", addr:"Udo Udoma Avenue, Uyo, Akwa Ibom State", note:"Professional development centre" },
                { name:"Cross River State", addr:"Calabar — Active partnership development", note:"900 beneficiaries target" },
                { name:"Abia State", addr:"Aba / Umuahia — Women entrepreneurship focus", note:"900 beneficiaries target" },
              ].map((loc,i)=>(
                <div key={i} className="flex items-start gap-3 rounded-xl border bg-white px-5 py-4 mb-3" style={{borderColor:'#E2E8F0'}}>
                  <MapPin size={15} className="mt-0.5 shrink-0" style={{color:'#C9973A'}}/>
                  <div>
                    <span className="text-sm font-bold" style={{color:'#0D1F35'}}>{loc.name}</span>
                    <p className="text-xs mt-0.5" style={{color:'#64748B'}}>{loc.addr}</p>
                    <p className="text-xs mt-0.5 font-semibold" style={{color:'#C9973A'}}>{loc.note}</p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] mb-3" style={{color:'#C9973A'}}>Get In Touch</p>
              <h2 className="font-black mb-6" style={{color:'#0D1F35',fontFamily:"'Playfair Display',serif",fontSize:'1.6rem'}}>Contact us</h2>
              {[
                { icon:<Mail size={15}/>, label:"Email", content:<><a href="mailto:academy@affidexlab.com" className="hover:underline block" style={{color:'#0D1F35'}}>academy@affidexlab.com</a><a href="mailto:affidexacademy@gmail.com" className="hover:underline block" style={{color:'#0D1F35'}}>affidexacademy@gmail.com</a></> },
                { icon:<Phone size={15}/>, label:"Phone / WhatsApp", content:<a href="tel:+2348133985352" className="hover:underline" style={{color:'#0D1F35'}}>+234 813 398 5352</a> },
                { icon:<Globe size={15}/>, label:"Website", content:<a href="https://www.affidexlab.com/academy" className="hover:underline" style={{color:'#0D1F35'}}>www.affidexlab.com/academy</a> },
                { icon:<Building2 size={15}/>, label:"Registration", content:<span style={{color:'#0D1F35'}}>Affidex Academy Ltd · RC: 9316934<br/>SMEDAN: SUID-5998-5813-3500-9105</span> },
              ].map((c,i)=>(
                <div key={i} className="flex items-start gap-3 rounded-xl border bg-white px-5 py-4 mb-3" style={{borderColor:'#E2E8F0'}}>
                  <span className="mt-0.5 shrink-0" style={{color:'#C9973A'}}>{c.icon}</span>
                  <div>
                    <p className="text-xs mb-1" style={{color:'#94A3B8'}}>{c.label}</p>
                    <div className="text-sm" style={{color:'#0D1F35'}}>{c.content}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="noise py-20" style={{background:'linear-gradient(135deg,#0D1F35,#1B3A5C)'}}>
        <div className="container text-center text-white">
          <h2 className="font-black" style={{fontFamily:"'Playfair Display',serif",fontSize:'clamp(1.8rem,3.5vw,2.8rem)'}}>Be part of the first cohort.</h2>
          <p className="mt-3 max-w-xl mx-auto" style={{color:'#94A3B8'}}>Apply today and be among the founding generation of Affidex Academy graduates.</p>
          <Link to="/academy/apply" className="btn-gold mt-8 inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-bold text-white shadow-xl">
            Apply Now — It's Free <ArrowRight size={16}/>
          </Link>
        </div>
      </section>
    </div>
  );
}
