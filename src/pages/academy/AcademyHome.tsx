import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Monitor, Code2, Smartphone, Layers, Server,
  Award, Users, BookOpen, Banknote, Globe, GraduationCap, TrendingUp,
  Star, MapPin, Zap, Shield, Target, BarChart3, Wifi } from "lucide-react";

/* ── Partner / Affiliation logos (text-based for now) ─────────────────── */
const partners = [
  { name: "Microsoft", sub: "AI Cloud Partner", icon: "🔷", verified: true },
  { name: "UNESCO-UNEVOC", sub: "TVET Network", icon: "🌐", verified: true },
  { name: "NYSC SAED", sub: "Training Partner", icon: "🇳🇬", verified: true },
  { name: "SMEDAN", sub: "Certified MSME", icon: "📋", verified: true },
  { name: "FME TVET", sub: "Initial Approval", icon: "🏛️", verified: true },
  { name: "CAC Nigeria", sub: "RC-9316934", icon: "✅", verified: true },
  { name: "IPPN", sub: "Centre Partner", icon: "🏫", verified: true },
  { name: "3MTT", sub: "Applied Partner", icon: "💻", verified: true },
  { name: "Microsoft", sub: "AI Cloud Partner", icon: "🔷", verified: true },
  { name: "UNESCO-UNEVOC", sub: "TVET Network", icon: "🌐", verified: true },
  { name: "NYSC SAED", sub: "Training Partner", icon: "🇳🇬", verified: true },
  { name: "SMEDAN", sub: "Certified MSME", icon: "📋", verified: true },
  { name: "FME TVET", sub: "Initial Approval", icon: "🏛️", verified: true },
  { name: "CAC Nigeria", sub: "RC-9316934", icon: "✅", verified: true },
  { name: "IPPN", sub: "Centre Partner", icon: "🏫", verified: true },
  { name: "3MTT", sub: "Applied Partner", icon: "💻", verified: true },
];

const stats = [
  { value: "4", label: "States", sub: "Akwa Ibom · Cross River · Abia · Lagos" },
  { value: "2", label: "Training Centres", sub: "Uyo, Akwa Ibom State" },
  { value: "6", label: "Core Tracks", sub: "ICT & Vocational" },
  { value: "70%", label: "Hands-On", sub: "Practical delivery model" },
];

const programmes = [
  {
    icon: <Monitor size={20}/>,
    emoji: "🖥️",
    title: "Digital Foundations & Workplace Readiness",
    duration: "4 weeks",
    level: "Beginner",
    badge: "Best Start",
    badgeColor: "bg-emerald-100 text-emerald-700",
    description: "Computer literacy, productivity tools, internet safety, digital CV, and portfolio basics. The essential foundation for every other track.",
    highlights: ["Computer literacy basics","Microsoft Office / Google Suite","Digital safety & cyber hygiene","Digital CV & portfolio"],
  },
  {
    icon: <Code2 size={20}/>,
    emoji: "🧩",
    title: "Coding, Web & Product Foundations",
    duration: "8 weeks",
    level: "Beginner → Intermediate",
    badge: "High Demand",
    badgeColor: "bg-blue-100 text-blue-700",
    description: "HTML, CSS, JavaScript fundamentals, web design, and product thinking — everything needed to build real web experiences.",
    highlights: ["HTML5, CSS3, Tailwind","JavaScript fundamentals","Frontend development","Product thinking intro"],
  },
  {
    icon: <TrendingUp size={20}/>,
    emoji: "📣",
    title: "Digital Marketing & Sales Operations",
    duration: "6 weeks",
    level: "Beginner",
    badge: "Popular",
    badgeColor: "bg-purple-100 text-purple-700",
    description: "Social media marketing, content creation, SEO, email marketing, e-commerce, and freelance client acquisition.",
    highlights: ["Social media marketing","Content creation & SEO","E-commerce operations","Freelance acquisition"],
  },
  {
    icon: <Layers size={20}/>,
    emoji: "🎨",
    title: "UI/UX & Product Design",
    duration: "6 weeks",
    level: "Beginner → Intermediate",
    badge: "Creative",
    badgeColor: "bg-pink-100 text-pink-700",
    description: "Figma, user research, wireframing, prototyping, and design systems. Build a portfolio for freelance or employment.",
    highlights: ["Figma mastery","User research methods","Wireframing & prototyping","Portfolio development"],
  },
  {
    icon: <BarChart3 size={20}/>,
    emoji: "📊",
    title: "Data & AI Productivity",
    duration: "6 weeks",
    level: "Beginner → Intermediate",
    badge: "Future-Ready",
    badgeColor: "bg-orange-100 text-orange-700",
    description: "Excel advanced, Google Sheets, data visualisation, AI tools for business productivity, and basic data analysis.",
    highlights: ["Advanced Excel & Sheets","Data visualisation","AI productivity tools","Business data analysis"],
  },
  {
    icon: <Monitor size={20}/>,
    emoji: "🔧",
    title: "ICT Support, Hardware & Technical Services",
    duration: "6 weeks",
    level: "Beginner",
    badge: "Highest Employment",
    badgeColor: "bg-emerald-100 text-emerald-700",
    description: "Computer hardware repair, maintenance, troubleshooting, networking fundamentals, and device servicing. Highest employment-to-training ratio of all our tracks.",
    highlights: ["Hardware repair & maintenance","Fault diagnosis","Networking fundamentals","Device servicing business"],
  },
];

const whyUs = [
  { icon: <Zap size={22}/>, title: "Practical-First Delivery", body: "70% hands-on lab and project work, 30% guided theory. Every graduate leaves with demonstrated skills and a portfolio." },
  { icon: <Shield size={22}/>, title: "Globally Affiliated", body: "Microsoft AI Cloud Partner, UNESCO-UNEVOC member, and SMEDAN-certified — credentials that give our graduates real credibility." },
  { icon: <Users size={22}/>, title: "Women & Youth Priority", body: "Minimum 75% female participation target. Built for the student in Uyo who cannot afford Lagos, the woman in Aba with potential but no pathway." },
  { icon: <Target size={22}/>, title: "Income as the Goal", body: "We measure success in incomes earned, not certificates printed. Freelance onboarding, portfolio development, and enterprise sprint included in all tracks." },
  { icon: <MapPin size={22}/>, title: "Two Centres in Uyo", body: "ChainSpace Hub (150-seat capacity) and IPPN at Udo Udoma Avenue — two fully operational training centres serving Akwa Ibom State." },
  { icon: <Wifi size={22}/>, title: "Blended Delivery", body: "Physical hub training plus virtual continuity platform. Miss a session? Catch up online. No excuse to fall behind." },
];

const steps = [
  { num: "01", title: "Submit Your Application", body: "Fill our free online form — takes under 5 minutes. Tell us which programme interests you and a little about yourself. No fees, no prerequisites beyond genuine interest." },
  { num: "02", title: "Receive Confirmation", body: "Our team reviews applications regularly. You'll receive a confirmation with your cohort start date, centre assignment, and onboarding information." },
  { num: "03", title: "Show Up & Build Skills", body: "Join your cohort, meet your trainers and peers. Complete your programme, build your portfolio, and leave with a credible path to income." },
];

export default function AcademyHome() {
  return (
    <div>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden noise" style={{background:'linear-gradient(135deg,#0D1F35 0%,#1B3A5C 55%,#0D1F35 100%)',minHeight:'88vh',display:'flex',alignItems:'center'}}>
        {/* Geometric accent */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -right-24 w-[600px] h-[600px] rounded-full opacity-10"
            style={{background:'radial-gradient(circle,#C9973A,transparent 70%)'}}/>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-5"
            style={{background:'radial-gradient(circle,#C9973A,transparent 70%)'}}/>
          {/* Grid lines */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
            <defs><pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern></defs>
            <rect width="100%" height="100%" fill="url(#grid)"/>
          </svg>
        </div>

        <div className="container relative z-10 py-28 text-white text-center">
          {/* Badge */}
          <div className="fade-up mb-6 inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em]"
            style={{background:'rgba(201,151,58,0.15)',border:'1px solid rgba(201,151,58,0.35)'}}>
            <span className="h-1.5 w-1.5 rounded-full bg-[#C9973A] animate-pulse"/>
            Applications Now Open · 2026 Cohort
          </div>

          {/* Headline */}
          <h1 className="fade-up delay-1 max-w-4xl mx-auto leading-tight font-black" style={{fontFamily:"'Playfair Display',serif",fontSize:'clamp(2.4rem,5.5vw,4.2rem)'}}>
            World-Class Vocational Training
            <br/>
            <span style={{color:'#C9973A'}}>Built for Southern Nigeria.</span>
          </h1>

          <p className="fade-up delay-2 mt-6 max-w-2xl mx-auto text-lg leading-relaxed" style={{color:'#CBD5E1'}}>
            Affidex Academy is a Microsoft-affiliated, UNESCO-UNEVOC recognised, government-registered vocational and digital skills institution — delivering 6 practical training tracks across Akwa Ibom, Cross River, Abia, and Lagos States.
          </p>

          {/* Credential badges */}
          <div className="fade-up delay-3 mt-7 flex flex-wrap justify-center gap-2">
            {['🔷 Microsoft AI Cloud Partner','🌐 UNESCO-UNEVOC','🇳🇬 NYSC SAED Partner','📋 SMEDAN Certified','🏛️ FME TVET Approved'].map((b,i)=>(
              <span key={i} className="text-xs px-3 py-1.5 rounded-full font-medium"
                style={{background:'rgba(255,255,255,0.08)',border:'1px solid rgba(255,255,255,0.15)',color:'#E2E8F0'}}>
                {b}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="fade-up delay-4 mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/academy/apply" className="btn-gold inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-bold text-white shadow-xl">
              Apply Now — Free <ArrowRight size={18}/>
            </Link>
            <Link to="/academy/programmes" className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white transition hover:bg-white/20"
              style={{background:'rgba(255,255,255,0.1)',border:'1px solid rgba(255,255,255,0.25)'}}>
              Explore Programmes
            </Link>
          </div>

          {/* Scroll hint */}
          <div className="fade-up delay-5 mt-14 flex justify-center">
            <div className="flex flex-col items-center gap-1.5 opacity-40">
              <span className="text-xs tracking-widest uppercase font-medium">Scroll to explore</span>
              <div className="w-5 h-8 rounded-full border border-white/40 flex items-start justify-center pt-1.5">
                <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ────────────────────────────────────────────────── */}
      <section style={{background:'#FAF8F4',borderTop:'1px solid #E2E8F0',borderBottom:'1px solid #E2E8F0'}}>
        <div className="container py-10">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((s,i)=>(
              <div key={i} className="text-center">
                <div className="text-4xl font-black" style={{color:'#0D1F35',fontFamily:"'Playfair Display',serif"}}>{s.value}</div>
                <div className="mt-1.5 text-sm font-bold" style={{color:'#0D1F35'}}>{s.label}</div>
                <div className="text-xs mt-0.5" style={{color:'#94A3B8'}}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNER TICKER ────────────────────────────────────────────── */}
      <section className="overflow-hidden py-6" style={{background:'#0D1F35',borderBottom:'1px solid rgba(255,255,255,0.06)'}}>
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] mb-5" style={{color:'#C9973A'}}>
          Confirmed Affiliations & Partners
        </p>
        <div className="relative">
          <div className="ticker-track flex gap-0 w-max">
            {partners.map((p,i)=>(
              <div key={i} className="flex items-center gap-3 px-7 py-3 mx-1 rounded-xl flex-shrink-0"
                style={{background:'rgba(255,255,255,0.05)',border:'1px solid rgba(255,255,255,0.1)'}}>
                <span className="text-xl">{p.icon}</span>
                <div>
                  <div className="text-xs font-bold text-white whitespace-nowrap">{p.name}</div>
                  <div className="text-[10px] whitespace-nowrap" style={{color:'#C9973A'}}>{p.sub}</div>
                </div>
                {p.verified && <span className="text-[10px] font-bold text-emerald-400">✓</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY AFFIDEX ───────────────────────────────────────────────── */}
      <section className="py-24" style={{background:'#FFFFFF'}}>
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.18em] mb-3" style={{color:'#C9973A'}}>Why Affidex Academy</p>
            <h2 style={{fontFamily:"'Playfair Display',serif",color:'#0D1F35',fontSize:'clamp(1.8rem,3.5vw,2.8rem)',fontWeight:900,lineHeight:1.2}}>
              A world-class institution built for the real Nigeria.
            </h2>
            <p className="mt-4 text-base leading-relaxed" style={{color:'#64748B'}}>
              We exist to build employability, enterprise, and income pathways for underserved youth, women, and communities — not just to issue certificates.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((c,i)=>(
              <div key={i} className="card-hover rounded-2xl p-7 border" style={{borderColor:'#E2E8F0'}}>
                <div className="mb-5 inline-flex rounded-xl p-3" style={{background:'rgba(13,31,53,0.07)',color:'#0D1F35'}}>
                  {c.icon}
                </div>
                <h3 className="text-base font-bold mb-2" style={{color:'#0D1F35'}}>{c.title}</h3>
                <p className="text-sm leading-relaxed" style={{color:'#64748B'}}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROGRAMMES ───────────────────────────────────────────────── */}
      <section className="py-24" style={{background:'#FAF8F4',borderTop:'1px solid #E2E8F0'}}>
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.18em] mb-3" style={{color:'#C9973A'}}>Our Programmes</p>
            <h2 style={{fontFamily:"'Playfair Display',serif",color:'#0D1F35',fontSize:'clamp(1.8rem,3.5vw,2.8rem)',fontWeight:900,lineHeight:1.2}}>
              Six tracks. One mission: your career.
            </h2>
            <p className="mt-4 text-base" style={{color:'#64748B'}}>
              All programmes follow a 70% practical / 30% theory model. Graduates leave with demonstrated skills, a portfolio, and a clear income pathway.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {programmes.map((p,i)=>(
              <div key={i} className="card-hover rounded-2xl border bg-white p-7" style={{borderColor:'#E2E8F0'}}>
                <div className="flex items-start justify-between gap-3 mb-5">
                  <div className="text-3xl">{p.emoji}</div>
                  <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-bold ${p.badgeColor}`}>{p.badge}</span>
                </div>
                <h3 className="text-sm font-bold leading-snug mb-1" style={{color:'#0D1F35'}}>{p.title}</h3>
                <div className="flex items-center gap-3 text-xs mb-3" style={{color:'#94A3B8'}}>
                  <span className="flex items-center gap-1"><BookOpen size={11}/>{p.duration}</span>
                  <span>·</span><span>{p.level}</span>
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{color:'#64748B'}}>{p.description}</p>
                <ul className="space-y-1.5">
                  {p.highlights.map((h,j)=>(
                    <li key={j} className="flex items-center gap-2 text-xs" style={{color:'#475569'}}>
                      <CheckCircle2 size={12} style={{color:'#C9973A',flexShrink:0}}/>{h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Apply card */}
            <div className="rounded-2xl p-7 flex flex-col justify-between" style={{background:'linear-gradient(135deg,#0D1F35,#1B3A5C)'}}>
              <div>
                <Star size={24} className="mb-5" style={{color:'#C9973A'}}/>
                <h3 className="text-lg font-bold text-white mb-2" style={{fontFamily:"'Playfair Display',serif"}}>Ready to begin?</h3>
                <p className="text-sm leading-relaxed mb-2" style={{color:'#94A3B8'}}>Applications take less than 5 minutes. Choose your track and your centre — ChainSpace Hub or IPPN Uyo.</p>
                <p className="text-xs font-semibold" style={{color:'#C9973A'}}>Both centres located in Uyo, Akwa Ibom State.</p>
              </div>
              <Link to="/academy/apply"
                className="btn-gold mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white">
                Apply Now — It's Free <ArrowRight size={14}/>
              </Link>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link to="/academy/programmes" className="inline-flex items-center gap-2 text-sm font-semibold hover:underline" style={{color:'#0D1F35'}}>
              View full curriculum details <ArrowRight size={14}/>
            </Link>
          </div>
        </div>
      </section>

      {/* ── PARTNERS & AFFILIATIONS ──────────────────────────────────── */}
      <section className="py-24" style={{background:'#FFFFFF',borderTop:'1px solid #E2E8F0'}}>
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.18em] mb-3" style={{color:'#C9973A'}}>Institutional Standing</p>
            <h2 style={{fontFamily:"'Playfair Display',serif",color:'#0D1F35',fontSize:'clamp(1.8rem,3.5vw,2.8rem)',fontWeight:900,lineHeight:1.2}}>
              Backed by institutions that matter.
            </h2>
            <p className="mt-4 text-base" style={{color:'#64748B'}}>
              Established in February 2026 — in under 90 days we secured verified affiliations across global, federal, and state-level platforms.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { abbr:"MSFT", name:"Microsoft", role:"AI Cloud Partner", detail:"Verified global partner status — technology training & AI solutions delivery", dot:"bg-blue-500" },
              { abbr:"UNESCO", name:"UNESCO-UNEVOC", role:"TVET Network Member", detail:"Active in UNESCO's global TVET community across 167 countries", dot:"bg-sky-500" },
              { abbr:"NYSC", name:"NYSC SAED", role:"Registered Training Partner", detail:"Enabling structured tech skills delivery to corps members during National Service", dot:"bg-emerald-500" },
              { abbr:"SMEDAN", name:"SMEDAN", role:"Certified MSME", detail:"SUID-5998-5813-3500-9105 — enrolled across 6 SMEDAN programmes", dot:"bg-green-500" },
              { abbr:"FME", name:"Federal Min. of Education", role:"TVET Initial Approval", detail:"FME TVET initial approval received — NBTE site visit in process", dot:"bg-orange-500" },
              { abbr:"CAC", name:"CAC Nigeria", role:"RC-9316934", detail:"Incorporated 12 February 2026 under the Corporate Affairs Commission", dot:"bg-red-500" },
              { abbr:"IPPN", name:"IPPN Uyo", role:"Centre Partner", detail:"Institute of Practising Professionals Nigeria Ltd — Udo Udoma Avenue, Uyo", dot:"bg-purple-500" },
              { abbr:"3MTT", name:"3MTT", role:"Applied Training Provider", detail:"Federal programme commencement confirmed Q3 2026 with National Programme Director", dot:"bg-yellow-500" },
            ].map((p,i)=>(
              <div key={i} className="card-hover rounded-2xl border p-5" style={{borderColor:'#E2E8F0'}}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl text-white text-[10px] font-black tracking-tight shrink-0" style={{background:'#0D1F35'}}>
                    {p.abbr}
                  </div>
                  <div className={`h-2 w-2 rounded-full ${p.dot}`}/>
                </div>
                <h4 className="text-sm font-bold leading-snug" style={{color:'#0D1F35'}}>{p.name}</h4>
                <p className="mt-0.5 text-xs font-semibold" style={{color:'#C9973A'}}>{p.role}</p>
                <p className="mt-2 text-xs leading-relaxed" style={{color:'#64748B'}}>{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────── */}
      <section className="py-24" style={{background:'#FAF8F4',borderTop:'1px solid #E2E8F0'}}>
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.18em] mb-3" style={{color:'#C9973A'}}>How It Works</p>
            <h2 style={{fontFamily:"'Playfair Display',serif",color:'#0D1F35',fontSize:'clamp(1.8rem,3.5vw,2.8rem)',fontWeight:900,lineHeight:1.2}}>
              Three steps to your new skill.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
            {steps.map((s,i)=>(
              <div key={i} className="relative rounded-2xl border bg-white p-8" style={{borderColor:'#E2E8F0'}}>
                <div className="absolute top-6 right-6 text-5xl font-black leading-none select-none" style={{color:'rgba(13,31,53,0.06)',fontFamily:"'Playfair Display',serif"}}>
                  {s.num}
                </div>
                <div className="mb-1 inline-flex h-9 w-9 items-center justify-center rounded-full text-sm font-black text-white" style={{background:'#C9973A'}}>
                  {s.num.replace('0','')}
                </div>
                <h3 className="mt-4 text-base font-bold" style={{color:'#0D1F35'}}>{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed" style={{color:'#64748B'}}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TWO CENTRES ──────────────────────────────────────────────── */}
      <section className="py-24" style={{background:'#FFFFFF',borderTop:'1px solid #E2E8F0'}}>
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.18em] mb-3" style={{color:'#C9973A'}}>Our Centres</p>
            <h2 style={{fontFamily:"'Playfair Display',serif",color:'#0D1F35',fontSize:'clamp(1.8rem,3.5vw,2.8rem)',fontWeight:900,lineHeight:1.2}}>
              Two fully operational centres in Uyo.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 max-w-3xl mx-auto">
            {[
              {
                name:"ChainSpace Hub",
                tag:"Headquarters",
                address:"Mboho Mkparawa Ibibio Business Wing, Uyo, Akwa Ibom State",
                capacity:"150-seat capacity",
                features:["Computer labs","Hardware repair workstations","Digital design stations","High-speed internet","Blended physical/virtual delivery"],
              },
              {
                name:"IPPN Uyo",
                tag:"Centre 2",
                address:"Udo Udoma Avenue, Uyo, Akwa Ibom State",
                capacity:"Professional development facility",
                features:["Corporate & professional cohorts","Government staff training","Community cohorts","Central Uyo location","Working professionals schedule"],
              },
            ].map((c,i)=>(
              <div key={i} className="rounded-2xl border overflow-hidden" style={{borderColor:'#E2E8F0'}}>
                <div className="px-7 py-4 flex items-center justify-between" style={{background:'#0D1F35'}}>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.15em]" style={{color:'#C9973A'}}>{c.tag}</span>
                    <h3 className="text-base font-bold text-white">{c.name}</h3>
                  </div>
                  <MapPin size={20} style={{color:'#C9973A'}}/>
                </div>
                <div className="p-7">
                  <p className="text-sm font-medium mb-1" style={{color:'#0D1F35'}}>{c.address}</p>
                  <p className="text-xs mb-4" style={{color:'#C9973A'}}>{c.capacity}</p>
                  <ul className="space-y-2">
                    {c.features.map((f,j)=>(
                      <li key={j} className="flex items-center gap-2 text-sm" style={{color:'#475569'}}>
                        <CheckCircle2 size={13} style={{color:'#C9973A',flexShrink:0}}/>{f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-24 noise" style={{background:'linear-gradient(135deg,#0D1F35 0%,#1B3A5C 60%,#0D1F35 100%)'}}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-15"
            style={{background:'radial-gradient(ellipse,#C9973A,transparent 70%)'}}/>
        </div>
        <div className="container relative z-10 text-center text-white">
          <p className="text-xs font-bold uppercase tracking-[0.18em] mb-4" style={{color:'#C9973A'}}>Your Future Starts Here</p>
          <h2 className="max-w-3xl mx-auto font-black leading-tight" style={{fontFamily:"'Playfair Display',serif",fontSize:'clamp(2rem,4vw,3.2rem)'}}>
            One application. One decision. A completely different future.
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-lg" style={{color:'#CBD5E1'}}>
            Join a cohort of determined Nigerians learning real skills in a globally affiliated, government-registered institution — right here in Southern Nigeria. No excuses. No barriers. Just show up.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/academy/apply" className="btn-gold inline-flex items-center justify-center gap-2 rounded-full px-9 py-4 text-base font-bold text-white shadow-2xl">
              Apply Now — It's Free <ArrowRight size={18}/>
            </Link>
            <Link to="/academy/about" className="inline-flex items-center justify-center gap-2 rounded-full px-9 py-4 text-base font-semibold text-white transition hover:bg-white/20"
              style={{background:'rgba(255,255,255,0.1)',border:'1px solid rgba(255,255,255,0.25)'}}>
              Learn More About Us
            </Link>
          </div>
          <p className="mt-6 text-sm" style={{color:'#64748B'}}>
            Questions? <a href="mailto:academy@affidexlab.com" className="hover:underline" style={{color:'#C9973A'}}>academy@affidexlab.com</a>
            {" "}· <a href="tel:+2348133985352" className="hover:underline" style={{color:'#C9973A'}}>+234 813 398 5352</a>
          </p>
        </div>
      </section>
    </div>
  );
}
