import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Monitor,
  Code2,
  Smartphone,
  Layers,
  Server,
  Award,
  Users,
  BookOpen,
  Banknote,
  Globe,
  Building2,
  GraduationCap,
  TrendingUp,
  Star,
} from "lucide-react";

const stats = [
  { value: "₦0", label: "Tuition fees", sub: "100% free" },
  { value: "5", label: "Active programmes", sub: "ICT & vocational" },
  { value: "$70M", label: "World Bank funding", sub: "IDEAS project" },
  { value: "₦300K", label: "Per trained youth", sub: "govt. payment rate" },
];

const programmes = [
  {
    icon: <Monitor size={22} />,
    title: "Computer Hardware Repair & Maintenance",
    duration: "16 weeks",
    level: "Beginner",
    badge: "NBTE Approved",
    badgeColor: "bg-emerald-100 text-emerald-700",
    description: "Master computer assembly, diagnosis, troubleshooting, and repair. Aligned with the Nigerian Skills Qualifications Framework (NSQF) and IDEAS project funding.",
    highlights: ["Hardware assembly & disassembly", "Fault diagnosis & repair", "Networking basics", "Safety & workshop practice"],
  },
  {
    icon: <Layers size={22} />,
    title: "Fullstack Web Development",
    duration: "24 weeks",
    level: "Beginner → Intermediate",
    badge: "High Demand",
    badgeColor: "bg-blue-100 text-blue-700",
    description: "A comprehensive journey from HTML basics to deploying full production applications. Covers frontend, backend, databases, and real-world project delivery.",
    highlights: ["HTML, CSS, JavaScript", "React / Next.js", "Node.js & databases", "Deployment & DevOps basics"],
  },
  {
    icon: <Code2 size={22} />,
    title: "Frontend Web Development",
    duration: "16 weeks",
    level: "Beginner → Intermediate",
    badge: "Popular",
    badgeColor: "bg-purple-100 text-purple-700",
    description: "Build beautiful, responsive interfaces with modern tools. Perfect for those who love design and want to create impactful digital experiences.",
    highlights: ["HTML5, CSS3, Tailwind", "JavaScript & React", "Responsive design", "UI component building"],
  },
  {
    icon: <Server size={22} />,
    title: "Backend Web Development",
    duration: "16 weeks",
    level: "Intermediate",
    badge: "In Demand",
    badgeColor: "bg-orange-100 text-orange-700",
    description: "Learn the engine behind every website — databases, APIs, authentication, and server architecture. Build the systems that power digital products.",
    highlights: ["Node.js & Express", "REST API development", "SQL & NoSQL databases", "Authentication & security"],
  },
  {
    icon: <Smartphone size={22} />,
    title: "Mobile App Development",
    duration: "20 weeks",
    level: "Intermediate",
    badge: "Growing",
    badgeColor: "bg-sky-100 text-sky-700",
    description: "Build cross-platform mobile applications with React Native and Flutter. Launch real apps on iOS and Android from one codebase.",
    highlights: ["React Native fundamentals", "Flutter basics", "Mobile UI patterns", "App Store deployment"],
  },
];

const partners = [
  { name: "University of Uyo", abbr: "UNIUYO", role: "Host Institution & Accreditation Partner", detail: "Facility & institutional backing via SUG partnership" },
  { name: "National Board for Technical Education", abbr: "NBTE", role: "Regulatory Accreditation Body", detail: "Computer Hardware programme accreditation in progress" },
  { name: "World Bank IDEAS Project", abbr: "IDEAS", role: "Primary Funding Pipeline", detail: "$70M fund — ₦300K per trained youth" },
  { name: "Student Union Government", abbr: "SUG", role: "Campus Partnership", detail: "Outreach, venue, and student pipeline" },
];

const team = [
  { name: "Utibe-Abasi Emmanuel Samuel", role: "CEO / Chairman, Board of Directors", initials: "UES" },
  { name: "Edidiong Emmanuel Samuel", role: "Managing Director / Director of Academics & Programmes", initials: "EES" },
  { name: "Ogoluwa", role: "Director of Operations", initials: "OG" },
  { name: "First Born of Uyo", role: "Director of Partnerships & Business Development", initials: "FBU" },
];

const steps = [
  { num: "01", title: "Submit your application", body: "Fill our free online form — takes under 5 minutes. Tell us which programme interests you and a little about yourself." },
  { num: "02", title: "Receive confirmation", body: "Our team reviews applications weekly. You'll receive an email confirmation with your programme start date and onboarding guide." },
  { num: "03", title: "Show up and learn", body: "Join your cohort, meet your trainers, and start building real skills. No fees, no hidden charges — just commitment and hard work." },
];

export default function AcademyHome() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0A2540]">
        <div className="absolute inset-0 -z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_1200px_700px_at_60%_-100px,rgba(201,151,58,0.15),transparent_60%)]" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A2540] to-transparent" />
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        </div>
        <div className="container relative z-10 flex min-h-[82vh] flex-col items-center justify-center py-24 text-center text-white">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C9973A] animate-pulse" />
            Free ICT Skills Training — Applications Open
          </div>
          <h1 className="max-w-4xl text-5xl font-extrabold leading-tight sm:text-6xl lg:text-7xl">
            Learn a Tech Skill.<br />
            <span className="text-[#C9973A]">Change Your Future.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg/8 text-slate-300">
            Affidex Academy offers 100% free ICT and vocational training for Nigerian youth — backed by World Bank funding, accredited by NBTE, and delivered in partnership with the University of Uyo.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/academy/apply"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C9973A] px-6 py-3.5 text-base font-bold text-white shadow-lg transition hover:bg-[#b8862e] hover:shadow-xl"
            >
              Apply for free
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/academy/programmes"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-base font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              Explore programmes
            </Link>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-y bg-slate-50">
        <div className="container py-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-extrabold text-[#0A2540]">{s.value}</div>
                <div className="mt-1 text-sm font-semibold text-slate-700">{s.label}</div>
                <div className="text-xs text-slate-500">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Affidex Academy */}
      <section className="bg-white py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#C9973A]">Why Affidex Academy</p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#0A2540] md:text-4xl">Skills that get you hired. Training that costs you nothing.</h2>
            <p className="mt-4 text-slate-500">We're removing every barrier between Nigerian youth and world-class digital skills education.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: <Banknote size={24} />,
                title: "Zero tuition fees",
                body: "Our training is fully funded through government and international programmes. You pay nothing — no registration fee, no hidden charges.",
              },
              {
                icon: <Award size={24} />,
                title: "Government-accredited training",
                body: "Our Computer Hardware programme is NBTE-approved. All programmes are aligned with the Nigerian Skills Qualifications Framework (NSQF).",
              },
              {
                icon: <TrendingUp size={24} />,
                title: "Real career outcomes",
                body: "We train for employment, not certificates. Every curriculum is built around skills employers in Nigeria and globally actually need.",
              },
              {
                icon: <GraduationCap size={24} />,
                title: "University-backed",
                body: "Training is delivered in partnership with the University of Uyo, giving you access to proper facilities and institutional credibility.",
              },
              {
                icon: <Globe size={24} />,
                title: "World Bank aligned",
                body: "Affidex Academy is pursuing TSP status under Nigeria's IDEAS project — a $70M World Bank fund dedicated to youth skills development.",
              },
              {
                icon: <Users size={24} />,
                title: "Community and mentorship",
                body: "You're not just a trainee — you join a cohort with peers, mentors, and a network that continues beyond your programme end date.",
              },
            ].map((c, i) => (
              <div key={i} className="rounded-2xl border p-6 hover:shadow-md transition-shadow">
                <div className="mb-4 inline-flex rounded-xl bg-[#0A2540]/8 p-3 text-[#0A2540]">{c.icon}</div>
                <h3 className="text-base font-bold text-[#0A2540]">{c.title}</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programmes Overview */}
      <section className="bg-slate-50 py-20 border-t">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#C9973A]">Our Programmes</p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#0A2540] md:text-4xl">Five pathways. One goal: your career.</h2>
            <p className="mt-4 text-slate-500">Choose the track that fits your ambition. All programmes are free, hands-on, and taught by experienced practitioners.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {programmes.map((p, i) => (
              <div key={i} className="rounded-2xl border bg-white p-6 hover:shadow-lg transition-all hover:-translate-y-0.5">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="inline-flex rounded-xl bg-[#0A2540]/8 p-3 text-[#0A2540]">{p.icon}</div>
                  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${p.badgeColor}`}>
                    {p.badge}
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#0A2540] leading-snug">{p.title}</h3>
                <div className="mt-2 flex items-center gap-3 text-xs text-slate-500">
                  <span className="flex items-center gap-1"><BookOpen size={11} />{p.duration}</span>
                  <span>·</span>
                  <span>{p.level}</span>
                </div>
                <p className="mt-3 text-sm text-slate-500 leading-relaxed">{p.description}</p>
                <ul className="mt-4 space-y-1.5">
                  {p.highlights.map((h, j) => (
                    <li key={j} className="flex items-center gap-2 text-xs text-slate-600">
                      <CheckCircle2 size={13} className="text-[#C9973A] shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {/* Apply card */}
            <div className="rounded-2xl bg-[#0A2540] p-6 flex flex-col justify-between">
              <div>
                <Star size={22} className="text-[#C9973A] mb-4" />
                <h3 className="text-lg font-bold text-white">Ready to apply?</h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">Applications take less than 5 minutes. No fees, no prerequisites beyond interest and commitment.</p>
              </div>
              <Link
                to="/academy/apply"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#C9973A] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#b8862e] transition-colors"
              >
                Apply now — it's free
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <Link to="/academy/programmes" className="inline-flex items-center gap-2 text-sm font-semibold text-[#0A2540] hover:underline">
              View full curriculum details
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Partners & Recognition */}
      <section className="bg-white py-20 border-t">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#C9973A]">Partners & Recognition</p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#0A2540] md:text-4xl">Backed by institutions that matter.</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {partners.map((p, i) => (
              <div key={i} className="rounded-2xl border p-5 hover:border-[#C9973A]/50 transition-colors">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0A2540] text-white text-xs font-black tracking-tight">
                  {p.abbr}
                </div>
                <h4 className="text-sm font-bold text-[#0A2540] leading-snug">{p.name}</h4>
                <p className="mt-1 text-xs font-medium text-[#C9973A]">{p.role}</p>
                <p className="mt-2 text-xs text-slate-500">{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-slate-50 py-20 border-t">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#C9973A]">How It Works</p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#0A2540] md:text-4xl">Three steps to your new skill.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
            {steps.map((s, i) => (
              <div key={i} className="relative rounded-2xl border bg-white p-7">
                <div className="text-5xl font-black text-[#0A2540]/8 mb-4 leading-none">{s.num}</div>
                <h3 className="text-base font-bold text-[#0A2540]">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-20 border-t">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#C9973A]">Leadership</p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#0A2540] md:text-4xl">The team building this with you.</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            {team.map((t, i) => (
              <div key={i} className="rounded-2xl border p-5 text-center hover:shadow-md transition-shadow">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#0A2540] text-white text-sm font-extrabold">
                  {t.initials}
                </div>
                <h4 className="text-sm font-bold text-[#0A2540] leading-snug">{t.name}</h4>
                <p className="mt-1.5 text-xs text-slate-500 leading-snug">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#0A2540] py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_800px_600px_at_50%_120%,rgba(201,151,58,0.2),transparent_70%)]" />
        <div className="container relative z-10 text-center text-white">
          <h2 className="text-3xl font-extrabold md:text-5xl">Your future starts with one application.</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-300">No tuition. No prerequisites. Just show up ready to learn. Seats are limited per cohort — apply today.</p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/academy/apply"
              className="inline-flex items-center gap-2 rounded-full bg-[#C9973A] px-7 py-3.5 text-base font-bold text-white shadow-lg hover:bg-[#b8862e] transition"
            >
              Apply now — it's free
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/academy/about"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-base font-semibold text-white hover:bg-white/20 transition"
            >
              Learn more about us
            </Link>
          </div>
          <p className="mt-5 text-sm text-slate-400">
            Questions? Email us at{" "}
            <a href="mailto:academy@affidexlab.com" className="text-[#C9973A] hover:underline">academy@affidexlab.com</a>
          </p>
        </div>
      </section>
    </div>
  );
}
