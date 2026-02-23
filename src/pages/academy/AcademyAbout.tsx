import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, MapPin, Mail, Globe, Building2, Users, BookOpen, Award, TrendingUp } from "lucide-react";

const team = [
  {
    initials: "UES",
    name: "Utibe-Abasi Emmanuel Samuel",
    role: "CEO / Chairman, Board of Directors",
    bio: "Founder and visionary behind Affidex Academy. Drives the company's strategic direction, government partnerships, and the broader vision of making quality ICT education accessible to every Nigerian youth regardless of economic background.",
  },
  {
    initials: "EES",
    name: "Edidiong Emmanuel Samuel",
    role: "Managing Director / Director of Academics & Programmes",
    bio: "Oversees all academic operations and curriculum development. As a Student Union Government Senator at the University of Uyo, he bridges the gap between Affidex Academy and the university community, driving campus outreach and institutional partnerships.",
  },
  {
    initials: "OG",
    name: "Ogoluwa",
    role: "Director of Operations",
    bio: "Manages day-to-day operations, venue logistics, trainer coordination, and programme delivery. Ensures that every cohort runs smoothly from onboarding through graduation.",
  },
  {
    initials: "FBU",
    name: "First Born of Uyo",
    role: "Director of Partnerships & Business Development",
    bio: "Leads sponsor and investor engagement, corporate outreach, and community partnerships. Leverages an extensive local network to secure the resources and visibility needed for each cohort launch.",
  },
];

const milestones = [
  { year: "2025", event: "Affidex Academy Ltd incorporated at the Corporate Affairs Commission (CAC)", rc: "RC: 9316934" },
  { year: "Feb 2026", event: "First Board of Directors meeting held. Leadership team assembled." },
  { year: "Feb 2026", event: "NBTE TVET accreditation application initiated for Computer Hardware Repair & Maintenance track." },
  { year: "Feb 2026", event: "UNIUYO partnership negotiations commenced via Student Union Government Senator Edidiong Samuel." },
  { year: "Mar 2026", event: "Sponsorship campaign launched targeting corporate partners in Akwa Ibom and Lagos." },
  { year: "Q2 2026", event: "Target: First cohort launch. 100 trainees across 3 programmes." },
  { year: "Q3 2026", event: "Target: IDEAS Project TSP application submission. First FG training payments." },
  { year: "Q4 2026", event: "Target: Expansion to second state — Cross River or Lagos campus." },
];

const values = [
  { icon: <Award size={22} />, title: "Accessibility first", body: "We believe no Nigerian youth should be priced out of a quality education. Every programme at Affidex Academy is and will remain free at point of access." },
  { icon: <BookOpen size={22} />, title: "Practical over theoretical", body: "Our curricula are built around real tools and real projects — not textbook exercises. Graduates leave with a portfolio, not just a certificate." },
  { icon: <Users size={22} />, title: "Community as infrastructure", body: "The strongest thing we build is the cohort itself. Graduates support each other, refer clients to each other, and become the local tech ecosystem." },
  { icon: <TrendingUp size={22} />, title: "Accountability to outcomes", body: "We track what happens to our graduates — employment, freelance income, business starts. Our success is measured in livelihoods changed, not courses delivered." },
];

export default function AcademyAbout() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#0A2540] py-20">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#C9973A] mb-3">About Affidex Academy</p>
            <h1 className="text-4xl font-extrabold text-white md:text-5xl leading-tight">
              Built to close Nigeria's <span className="text-[#C9973A]">digital skills gap.</span>
            </h1>
            <p className="mt-5 text-lg text-slate-300 leading-relaxed">
              Nigeria has over 20 million young people who are neither in education nor employment. The barrier isn't ambition — it's access. Affidex Academy exists to remove that barrier entirely.
            </p>
          </div>
        </div>
      </section>

      {/* Mission + Vision */}
      <section className="bg-white py-16 border-b">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl">
            <div className="rounded-2xl bg-slate-50 border p-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0A2540] text-white"><Target size={18} /></div>
                <h2 className="text-xl font-extrabold text-[#0A2540]">Our Mission</h2>
              </div>
              <p className="text-slate-600 leading-relaxed">
                To deliver world-class, government-aligned vocational and ICT training to Nigerian youth at zero cost — creating a pipeline of skilled, employable, and entrepreneurial graduates that transform communities.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50 border p-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0A2540] text-white"><Eye size={18} /></div>
                <h2 className="text-xl font-extrabold text-[#0A2540]">Our Vision</h2>
              </div>
              <p className="text-slate-600 leading-relaxed">
                To become the most trusted and impactful Training Service Provider (TSP) in South-South and South-East Nigeria — and ultimately a national institution that puts ICT skills in the hands of every young Nigerian.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Story */}
      <section className="bg-slate-50 py-16 border-b">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#C9973A] mb-3">Our Story</p>
            <h2 className="text-3xl font-extrabold text-[#0A2540] mb-6">From a problem we saw first-hand.</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Walk through any university town in Akwa Ibom or Cross River State and you'll see the same reality: brilliant young people with smartphones, ambition, and hours of free time — but no pathway to turn that potential into a career.
              </p>
              <p>
                Affidex Academy was born from the frustration of watching that talent go to waste. Our founders — themselves from these communities — understood that the gap wasn't talent. It was access: access to training, facilities, mentorship, and the government programmes that existed but weren't reaching the people who needed them most.
              </p>
              <p>
                We registered Affidex Academy Ltd, assembled a team with deep roots in the University of Uyo and local business community, and began building the infrastructure to change that — starting with a suite of free, nationally aligned, practical ICT training programmes.
              </p>
              <p>
                We are pursuing accreditation from the National Board for Technical Education (NBTE), Training Service Provider (TSP) status under the World Bank-funded IDEAS Project, and partnerships with Uniuyo and local businesses. Every step is designed to make our training sustainable, credible, and permanently free for trainees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-16 border-b">
        <div className="container">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#C9973A] mb-3">What We Stand For</p>
          <h2 className="text-3xl font-extrabold text-[#0A2540] mb-10 max-w-xl">Our values are operational, not decorative.</h2>
          <div className="grid gap-5 sm:grid-cols-2 max-w-4xl">
            {values.map((v, i) => (
              <div key={i} className="rounded-2xl border p-6">
                <div className="mb-4 inline-flex rounded-xl bg-[#0A2540]/8 p-3 text-[#0A2540]">{v.icon}</div>
                <h3 className="text-base font-bold text-[#0A2540]">{v.title}</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-slate-50 py-16 border-b">
        <div className="container">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#C9973A] mb-3">Leadership</p>
          <h2 className="text-3xl font-extrabold text-[#0A2540] mb-10">The people behind the mission.</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl">
            {team.map((t, i) => (
              <div key={i} className="rounded-2xl border bg-white p-6">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#0A2540] text-white text-sm font-extrabold">
                  {t.initials}
                </div>
                <h4 className="text-sm font-extrabold text-[#0A2540] leading-snug">{t.name}</h4>
                <p className="mt-1 text-xs font-semibold text-[#C9973A]">{t.role}</p>
                <p className="mt-3 text-xs text-slate-500 leading-relaxed">{t.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="bg-white py-16 border-b">
        <div className="container">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#C9973A] mb-3">Our Journey</p>
          <h2 className="text-3xl font-extrabold text-[#0A2540] mb-10">Where we've been. Where we're going.</h2>
          <div className="max-w-2xl space-y-4">
            {milestones.map((m, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0A2540] text-white text-xs font-bold">
                  {m.year.includes("Q") ? m.year : m.year.slice(-4)}
                </div>
                <div className="rounded-xl border bg-slate-50 px-5 py-3 flex-1">
                  <div className="text-xs font-semibold text-[#C9973A] mb-0.5">{m.year}</div>
                  <p className="text-sm text-slate-700">{m.event}</p>
                  {m.rc && <p className="text-xs text-slate-400 mt-0.5">{m.rc}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Locations */}
      <section className="bg-slate-50 py-16 border-b">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 max-w-4xl">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#C9973A] mb-3">Where We Operate</p>
              <h2 className="text-2xl font-extrabold text-[#0A2540] mb-5">Our locations</h2>
              <div className="space-y-3">
                {["Cross River State", "Akwa Ibom State", "Lagos", "Abia State"].map((loc, i) => (
                  <div key={i} className="flex items-center gap-3 rounded-xl border bg-white px-5 py-3">
                    <MapPin size={16} className="text-[#C9973A]" />
                    <span className="text-sm font-semibold text-[#0A2540]">{loc}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#C9973A] mb-3">Get In Touch</p>
              <h2 className="text-2xl font-extrabold text-[#0A2540] mb-5">Contact us</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3 rounded-xl border bg-white px-5 py-4">
                  <Mail size={16} className="mt-0.5 text-[#C9973A]" />
                  <div>
                    <p className="text-xs text-slate-400 mb-1">Email</p>
                    <a href="mailto:affidexacademy@gmail.com" className="text-sm text-[#0A2540] hover:underline block">affidexacademy@gmail.com</a>
                    <a href="mailto:academy@affidexlab.com" className="text-sm text-[#0A2540] hover:underline block">academy@affidexlab.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-xl border bg-white px-5 py-4">
                  <Globe size={16} className="mt-0.5 text-[#C9973A]" />
                  <div>
                    <p className="text-xs text-slate-400 mb-1">Website</p>
                    <a href="https://www.affidexlab.com/academy" className="text-sm text-[#0A2540] hover:underline">www.affidexlab.com/academy</a>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-xl border bg-white px-5 py-4">
                  <Building2 size={16} className="mt-0.5 text-[#C9973A]" />
                  <div>
                    <p className="text-xs text-slate-400 mb-1">Registration</p>
                    <p className="text-sm text-[#0A2540]">Affidex Academy Ltd · RC: 9316934</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A2540] py-16">
        <div className="container text-center text-white">
          <h2 className="text-3xl font-extrabold">Be part of the first cohort.</h2>
          <p className="mt-3 text-slate-300 max-w-xl mx-auto">Apply today and be among the founding generation of Affidex Academy graduates.</p>
          <Link to="/academy/apply" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#C9973A] px-7 py-3.5 text-base font-bold text-white hover:bg-[#b8862e] transition">
            Apply now — it's free <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
