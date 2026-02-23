import { Link } from "react-router-dom";
import { ArrowRight, Clock, BookOpen, CheckCircle2, Award, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const programmes = [
  {
    id: "hardware",
    icon: "🖥️",
    title: "Computer Hardware Repair & Maintenance",
    subtitle: "NBTE-Approved · Govt. Funded Track",
    badge: "NBTE Approved",
    badgeClass: "bg-emerald-100 text-emerald-700",
    duration: "16 weeks",
    sessions: "3× per week",
    level: "Beginner",
    cert: "NBTE Certificate of Competency",
    description:
      "Nigeria's most in-demand technical vocational skill. This NBTE-accredited programme covers computer assembly, fault diagnosis, component repair, and system maintenance. It is fully aligned with the Nigerian Skills Qualifications Framework (NSQF) and qualifies Affidex Academy for reimbursement under the World Bank IDEAS Project (₦300,000 per trained youth).",
    outcomes: [
      "Assemble and disassemble desktops and laptops",
      "Diagnose and repair hardware faults",
      "Install, configure, and troubleshoot operating systems",
      "Set up and maintain basic local area networks",
      "Apply safety and workshop procedures",
      "Run an independent hardware repair business",
    ],
    modules: [
      { week: "Weeks 1–2", title: "Introduction to Computer Systems", topics: ["Computer history & types", "Hardware components overview", "Health & safety in the workshop"] },
      { week: "Weeks 3–4", title: "Computer Assembly & Disassembly", topics: ["Desktop and laptop disassembly", "Component identification", "Safe re-assembly procedures"] },
      { week: "Weeks 5–6", title: "Operating Systems & Software", topics: ["Windows & Linux installation", "BIOS/UEFI configuration", "Driver management"] },
      { week: "Weeks 7–8", title: "Fault Diagnosis & Troubleshooting", topics: ["POST error codes", "Diagnostic tools & methods", "Power supply testing"] },
      { week: "Weeks 9–10", title: "Storage Devices & Memory", topics: ["HDD, SSD, and RAM types", "Cloning and backup", "RAID basics"] },
      { week: "Weeks 11–12", title: "Display, Input & Peripheral Devices", topics: ["Monitor calibration & repair", "Keyboard/mouse servicing", "Printer maintenance"] },
      { week: "Weeks 13–14", title: "Networking Fundamentals", topics: ["LAN/WAN concepts", "IP addressing basics", "Router & switch configuration"] },
      { week: "Weeks 15–16", title: "Capstone & Assessment", topics: ["Practical assessment on real machines", "Client-facing repair simulation", "Portfolio compilation"] },
    ],
  },
  {
    id: "fullstack",
    icon: "🧩",
    title: "Fullstack Web Development",
    subtitle: "Frontend + Backend + Deployment",
    badge: "High Demand",
    badgeClass: "bg-blue-100 text-blue-700",
    duration: "24 weeks",
    sessions: "4× per week",
    level: "Beginner → Intermediate",
    cert: "Affidex Academy Certificate of Completion",
    description:
      "The most comprehensive offering at Affidex Academy. Students journey from zero HTML knowledge to deploying a full, production-grade web application. This programme combines our Frontend and Backend tracks with an additional focus on architecture, APIs, and deployment.",
    outcomes: [
      "Build and deploy complete web applications end-to-end",
      "Design responsive, accessible user interfaces",
      "Develop RESTful APIs and connect to databases",
      "Implement user authentication and security",
      "Collaborate using Git and modern development workflows",
      "Launch real products on cloud platforms",
    ],
    modules: [
      { week: "Weeks 1–4", title: "Web Foundations", topics: ["HTML5 semantics & structure", "CSS3, Flexbox & Grid", "JavaScript fundamentals"] },
      { week: "Weeks 5–8", title: "Frontend Development", topics: ["React & component architecture", "State management", "Responsive design with Tailwind CSS"] },
      { week: "Weeks 9–10", title: "Version Control & Collaboration", topics: ["Git & GitHub workflow", "Branching strategies", "Code reviews & pull requests"] },
      { week: "Weeks 11–14", title: "Backend Fundamentals", topics: ["Node.js & Express framework", "REST API design", "Middleware & routing"] },
      { week: "Weeks 15–17", title: "Databases", topics: ["SQL with PostgreSQL", "NoSQL with MongoDB", "ORM & query building"] },
      { week: "Weeks 18–19", title: "Authentication & Security", topics: ["JWT & session management", "Password hashing", "CORS & basic security practices"] },
      { week: "Weeks 20–21", title: "Deployment & DevOps Basics", topics: ["Cloud deployment (Vercel, Render)", "Environment variables & CI/CD", "Domain & DNS setup"] },
      { week: "Weeks 22–24", title: "Capstone Project", topics: ["Build a real-world full application", "Technical documentation", "Live demo & portfolio presentation"] },
    ],
  },
  {
    id: "frontend",
    icon: "🎨",
    title: "Frontend Web Development",
    subtitle: "UI · Design Systems · React",
    badge: "Popular",
    badgeClass: "bg-purple-100 text-purple-700",
    duration: "16 weeks",
    sessions: "3× per week",
    level: "Beginner → Intermediate",
    cert: "Affidex Academy Certificate of Completion",
    description:
      "Focused on the craft of building what users see and interact with. Students learn to write clean HTML, style with CSS and Tailwind, and build dynamic interfaces with JavaScript and React. Perfect for those who love design and want to create polished digital products.",
    outcomes: [
      "Write semantic, accessible HTML5",
      "Style complex layouts with CSS3, Flexbox, Grid, and Tailwind",
      "Build interactive UIs with JavaScript",
      "Create component-based applications with React",
      "Implement responsive design for all screen sizes",
      "Deliver a portfolio of real projects",
    ],
    modules: [
      { week: "Weeks 1–2", title: "HTML & Document Structure", topics: ["Semantic HTML5 elements", "Forms & accessibility", "SEO fundamentals"] },
      { week: "Weeks 3–5", title: "CSS & Visual Design", topics: ["CSS3, Flexbox & Grid", "Animations & transitions", "Tailwind CSS utility classes"] },
      { week: "Weeks 6–8", title: "JavaScript Essentials", topics: ["Variables, functions & loops", "DOM manipulation", "Events & async basics"] },
      { week: "Weeks 9–12", title: "React Fundamentals", topics: ["Components & props", "State & hooks", "React Router"] },
      { week: "Weeks 13–14", title: "APIs & Data Fetching", topics: ["REST API consumption", "Fetch & Axios", "Loading & error states"] },
      { week: "Weeks 15–16", title: "Capstone & Portfolio", topics: ["Build 2 portfolio projects", "Deploy to Vercel/Netlify", "Portfolio review & presentation"] },
    ],
  },
  {
    id: "backend",
    icon: "⚙️",
    title: "Backend Web Development",
    subtitle: "APIs · Databases · Server Architecture",
    badge: "In Demand",
    badgeClass: "bg-orange-100 text-orange-700",
    duration: "16 weeks",
    sessions: "3× per week",
    level: "Intermediate",
    cert: "Affidex Academy Certificate of Completion",
    description:
      "The invisible engine behind every digital product. Students learn to build robust APIs, design relational and non-relational databases, implement authentication, and deploy backend services. Prerequisite: basic programming knowledge (or Frontend track completion).",
    outcomes: [
      "Design and build RESTful APIs from scratch",
      "Model and query SQL and NoSQL databases",
      "Implement secure user authentication with JWT",
      "Build middleware and server-side validation",
      "Deploy backend services to cloud platforms",
      "Understand system architecture patterns",
    ],
    modules: [
      { week: "Weeks 1–2", title: "Node.js & Runtime Fundamentals", topics: ["Node.js architecture", "Modules & NPM ecosystem", "File system & async I/O"] },
      { week: "Weeks 3–5", title: "Express.js & API Design", topics: ["Routing & controllers", "Middleware chains", "Request validation"] },
      { week: "Weeks 6–8", title: "Databases — SQL", topics: ["PostgreSQL setup & querying", "Joins, indexes & transactions", "Sequelize ORM"] },
      { week: "Weeks 9–10", title: "Databases — NoSQL", topics: ["MongoDB & Mongoose", "Document modeling", "Aggregation pipeline"] },
      { week: "Weeks 11–12", title: "Authentication & Security", topics: ["JWT & refresh tokens", "Bcrypt & password policy", "Rate limiting & CORS"] },
      { week: "Weeks 13–14", title: "Testing & Error Handling", topics: ["Unit & integration tests", "Error middleware", "Logging & monitoring"] },
      { week: "Weeks 15–16", title: "Deployment & Capstone", topics: ["Render/Railway deployment", "Environment configuration", "Build a real API capstone"] },
    ],
  },
  {
    id: "mobile",
    icon: "📱",
    title: "Mobile App Development",
    subtitle: "React Native · Flutter · iOS & Android",
    badge: "Growing",
    badgeClass: "bg-sky-100 text-sky-700",
    duration: "20 weeks",
    sessions: "3× per week",
    level: "Intermediate",
    cert: "Affidex Academy Certificate of Completion",
    description:
      "Build real apps that run on iOS and Android from a single codebase. Students get hands-on experience with React Native and Flutter — the two most in-demand mobile frameworks. The programme ends with a fully deployed app in the Play Store / App Store pipeline.",
    outcomes: [
      "Build cross-platform mobile apps with React Native",
      "Design mobile UIs with Flutter widgets",
      "Integrate REST APIs into mobile apps",
      "Handle navigation, state, and offline data",
      "Submit apps to the Google Play Store",
      "Understand mobile performance and UX patterns",
    ],
    modules: [
      { week: "Weeks 1–3", title: "Mobile Development Foundations", topics: ["Mobile vs. web development", "React Native setup & Expo", "Core components & styling"] },
      { week: "Weeks 4–6", title: "React Native Deep Dive", topics: ["Navigation with React Navigation", "State with Redux / Context", "Hooks & lifecycle"] },
      { week: "Weeks 7–9", title: "Flutter Introduction", topics: ["Dart language basics", "Widget tree & layout", "Stateful widgets"] },
      { week: "Weeks 10–12", title: "Data & APIs in Mobile", topics: ["REST API integration", "Local storage & AsyncStorage", "Push notifications"] },
      { week: "Weeks 13–15", title: "Device Features & Permissions", topics: ["Camera, GPS & sensors", "File system access", "Biometric auth"] },
      { week: "Weeks 16–18", title: "Testing & Performance", topics: ["Jest for React Native", "Performance profiling", "App size optimization"] },
      { week: "Weeks 19–20", title: "Capstone & App Store", topics: ["Build & submit a complete app", "App Store metadata & screenshots", "Demo day presentation"] },
    ],
  },
];

function ProgrammeCard({ p }: { p: (typeof programmes)[0] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="rounded-2xl border bg-white overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-7">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{p.icon}</span>
            <div>
              <h3 className="text-lg font-extrabold text-[#0A2540] leading-snug">{p.title}</h3>
              <p className="text-sm text-slate-500 mt-0.5">{p.subtitle}</p>
            </div>
          </div>
          <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold shrink-0 ${p.badgeClass}`}>
            {p.badge}
          </span>
        </div>

        <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-500">
          <span className="flex items-center gap-1.5"><Clock size={14} />{p.duration}</span>
          <span className="flex items-center gap-1.5"><BookOpen size={14} />{p.sessions}</span>
          <span className="flex items-center gap-1.5"><Award size={14} className="text-[#C9973A]" />{p.cert}</span>
        </div>

        <p className="mt-4 text-sm text-slate-600 leading-relaxed">{p.description}</p>

        <div className="mt-5">
          <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">What you'll be able to do</h4>
          <ul className="grid gap-1.5 sm:grid-cols-2">
            {p.outcomes.map((o, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                <CheckCircle2 size={14} className="mt-0.5 text-[#C9973A] shrink-0" />
                {o}
              </li>
            ))}
          </ul>
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-[#0A2540] hover:text-[#C9973A] transition-colors"
        >
          {expanded ? <><ChevronUp size={16} />Hide curriculum</> : <><ChevronDown size={16} />View full curriculum</>}
        </button>
      </div>

      {expanded && (
        <div className="border-t bg-slate-50 px-7 py-5">
          <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">Week-by-week curriculum</h4>
          <div className="grid gap-3 sm:grid-cols-2">
            {p.modules.map((m, i) => (
              <div key={i} className="rounded-xl border bg-white p-4">
                <div className="text-xs font-bold text-[#C9973A] mb-1">{m.week}</div>
                <div className="text-sm font-semibold text-[#0A2540] mb-2">{m.title}</div>
                <ul className="space-y-1">
                  {m.topics.map((t, j) => (
                    <li key={j} className="flex items-center gap-1.5 text-xs text-slate-500">
                      <span className="h-1 w-1 rounded-full bg-slate-400 shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="border-t px-7 py-4 bg-white flex items-center justify-between">
        <span className="text-sm font-semibold text-[#0A2540]">Level: {p.level}</span>
        <Link
          to="/academy/apply"
          className="inline-flex items-center gap-1.5 rounded-full bg-[#0A2540] px-4 py-2 text-xs font-bold text-white hover:bg-[#0d2e52] transition-colors"
        >
          Apply for this programme
          <ArrowRight size={13} />
        </Link>
      </div>
    </div>
  );
}

export default function AcademyProgrammes() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#0A2540] py-20">
        <div className="container text-center text-white">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#C9973A] mb-3">Our Programmes</p>
          <h1 className="text-4xl font-extrabold md:text-5xl">Five pathways. All free.</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-300">
            Every programme at Affidex Academy is built around real-world skills, employer demand, and zero cost to you. Pick your path and apply today.
          </p>
        </div>
      </section>

      {/* Quick pick */}
      <section className="bg-slate-50 border-b py-6">
        <div className="container">
          <div className="flex flex-wrap gap-3 justify-center">
            {programmes.map((p) => (
              <a
                key={p.id}
                href={`#${p.id}`}
                className="inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:border-[#0A2540] hover:text-[#0A2540] transition-colors"
              >
                <span>{p.icon}</span>
                {p.title.split(" ").slice(0, 3).join(" ")}…
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Programme cards */}
      <section className="bg-white py-16">
        <div className="container">
          <div className="flex flex-col gap-8">
            {programmes.map((p) => (
              <div id={p.id} key={p.id} className="scroll-mt-20">
                <ProgrammeCard p={p} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="bg-[#0A2540] py-16">
        <div className="container text-center text-white">
          <h2 className="text-3xl font-extrabold">All programmes are free. Apply now.</h2>
          <p className="mt-3 text-slate-300 max-w-xl mx-auto">Seats per cohort are limited. Fill the application and secure your spot before the next intake closes.</p>
          <Link
            to="/academy/apply"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#C9973A] px-7 py-3.5 text-base font-bold text-white hover:bg-[#b8862e] transition"
          >
            Apply now — it's free
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
