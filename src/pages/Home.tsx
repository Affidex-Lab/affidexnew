import { ArrowRight, Rocket, FlaskConical, Cpu, Users, Shield, MessageSquare, Bot, Code2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(1000px_600px_at_50%_-200px,rgba(10,37,64,0.35),transparent_60%),linear-gradient(180deg,#0A2540,#001428)]" />
        <div className="container flex min-h-[70vh] flex-col items-center justify-center py-24 text-white text-center md:min-h-[78vh]">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs uppercase tracking-widest backdrop-blur">
            Incubation Lab
          </span>
          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight sm:text-6xl">
            Welcome to Affidex Lab
          </h1>
          <h2 className="mt-3 max-w-3xl text-2xl font-semibold text-white/90">
            Incubation Lab for Core Utility Projects
          </h2>
          <p className="mt-4 max-w-3xl text-lg/7 text-white/80">
            Formerly CreedTech Group, we've evolved into an incubation laboratory focused on building the next generation of blockchain and AI-powered solutions.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/products"
              className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 font-semibold text-slate-900 shadow-sm transition hover:shadow"
            >
              Explore our products
              <ArrowRight className="ml-2" size={18} />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/10 px-5 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              Learn about us
            </Link>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="border-t bg-white py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[#0A2540] font-medium">What We Do</p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">
              We incubate innovative projects that push the boundaries of blockchain and AI
            </h2>
            <p className="mt-4 text-muted-foreground">
              As an incubation laboratory, we focus on building the next generation of blockchain and AI-powered solutions.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border p-6">
              <div className="mb-4 inline-flex rounded-lg bg-[#0A2540]/10 p-3 text-[#0A2540]"><Shield /></div>
              <h3 className="text-lg font-semibold">Privacy-First Solutions</h3>
              <p className="mt-2 text-sm text-muted-foreground">Building secure, privacy-focused applications that put user control first.</p>
            </div>
            <div className="rounded-2xl border p-6">
              <div className="mb-4 inline-flex rounded-lg bg-[#0A2540]/10 p-3 text-[#0A2540]"><Bot /></div>
              <h3 className="text-lg font-semibold">AI Innovation</h3>
              <p className="mt-2 text-sm text-muted-foreground">Leveraging AI to create intuitive, powerful tools for everyone.</p>
            </div>
            <div className="rounded-2xl border p-6">
              <div className="mb-4 inline-flex rounded-lg bg-[#0A2540]/10 p-3 text-[#0A2540]"><Rocket /></div>
              <h3 className="text-lg font-semibold">MVP Development</h3>
              <p className="mt-2 text-sm text-muted-foreground">Rapidly prototyping and launching MVPs that solve real problems.</p>
            </div>
            <div className="rounded-2xl border p-6">
              <div className="mb-4 inline-flex rounded-lg bg-[#0A2540]/10 p-3 text-[#0A2540]"><MessageSquare /></div>
              <h3 className="text-lg font-semibold">Clear Client Communication</h3>
              <p className="mt-2 text-sm text-muted-foreground">Transparent updates and open channels at every stage of your project.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services snapshot */}
      <section className="border-t bg-slate-50 py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-wider text-muted-foreground">Unleashing Potential</p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Your Gateway to Web3 Excellence</h2>
            <p className="mt-4 text-muted-foreground">From idea to execution, we provide tailored solutions that drive success in Web3.</p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border bg-white p-6">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0A2540] text-white"><Rocket size={18}/></div>
              <h3 className="text-lg font-semibold">A-Z Project Launch</h3>
              <p className="mt-2 text-sm text-muted-foreground">Comprehensive support from ideation to execution for successful launches.</p>
            </div>
            <div className="rounded-2xl border bg-white p-6">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0A2540] text-white"><Code2 size={18}/></div>
              <h3 className="text-lg font-semibold">Custom Software</h3>
              <p className="mt-2 text-sm text-muted-foreground">Tailored software solutions to meet your specific business needs.</p>
            </div>
            <div className="rounded-2xl border bg-white p-6">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0A2540] text-white"><Cpu size={18}/></div>
              <h3 className="text-lg font-semibold">AI & Project Management</h3>
              <p className="mt-2 text-sm text-muted-foreground">Integrating AI to optimize workflows and decision‑making.</p>
            </div>
            <div className="rounded-2xl border bg-white p-6">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0A2540] text-white"><Users size={18}/></div>
              <h3 className="text-lg font-semibold">Global Support</h3>
              <p className="mt-2 text-sm text-muted-foreground">Round‑the‑clock support and accessibility for a global audience.</p>
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <Link to="/services" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:shadow">
              Explore services
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t bg-white py-16">
        <div className="container text-center">
          <h3 className="text-2xl font-semibold">Ready to build?</h3>
          <p className="mt-2 text-muted-foreground">Tell us about your project. We’ll respond within a few days.</p>
          <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0A2540] px-5 py-3 text-white font-semibold">
            Get in touch
            <ArrowRight size={16}/>
          </Link>
        </div>
      </section>
    </div>
  );
}
