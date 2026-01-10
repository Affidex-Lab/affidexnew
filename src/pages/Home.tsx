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
            Web3 Incubation & Scaling
          </span>
          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight sm:text-6xl">
            Got a Web3 idea but can't build it yourself?
          </h1>
          <h2 className="mt-3 max-w-3xl text-2xl font-semibold text-white/90">
            We turn your vision into a funded, market-ready product
          </h2>
          <p className="mt-4 max-w-3xl text-lg/7 text-white/80">
            From UI/UX design to smart contracts, we handle the technical execution while connecting you to the VCs and ecosystems that will fund your project. You focus on the vision—we build, scale, and open doors.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 font-semibold text-slate-900 shadow-sm transition hover:shadow"
            >
              Start building your project
              <ArrowRight className="ml-2" size={18} />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/10 px-5 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              See what we've built
            </Link>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="border-t bg-white py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[#0A2540] font-medium">Who We Help</p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">
              Are you a founder stuck at the idea stage or struggling to scale?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Whether you need to build your MVP from scratch or scale your existing project to attract serious investors, we've got you covered.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border p-6">
              <div className="mb-4 inline-flex rounded-lg bg-[#0A2540]/10 p-3 text-[#0A2540]"><FlaskConical /></div>
              <h3 className="text-lg font-semibold">You have an idea but no technical team</h3>
              <p className="mt-2 text-sm text-muted-foreground">We build your complete product—UI/UX, frontend, backend, and smart contracts—so you can launch without hiring a full dev team.</p>
            </div>
            <div className="rounded-2xl border p-6">
              <div className="mb-4 inline-flex rounded-lg bg-[#0A2540]/10 p-3 text-[#0A2540]"><Users /></div>
              <h3 className="text-lg font-semibold">You need to connect with VCs and ecosystems</h3>
              <p className="mt-2 text-sm text-muted-foreground">We introduce you to the right investors and communities, giving your project the visibility and credibility it needs to raise funds.</p>
            </div>
            <div className="rounded-2xl border p-6">
              <div className="mb-4 inline-flex rounded-lg bg-[#0A2540]/10 p-3 text-[#0A2540]"><Rocket /></div>
              <h3 className="text-lg font-semibold">Your project exists but needs to scale</h3>
              <p className="mt-2 text-sm text-muted-foreground">We refine your product, expand functionality, and position you for growth—then connect you to the investors who can take you to the next level.</p>
            </div>
            <div className="rounded-2xl border p-6">
              <div className="mb-4 inline-flex rounded-lg bg-[#0A2540]/10 p-3 text-[#0A2540]"><Shield /></div>
              <h3 className="text-lg font-semibold">You're overwhelmed by the technical complexity</h3>
              <p className="mt-2 text-sm text-muted-foreground">From blockchain infrastructure to AI integration, we handle the hard technical work so you can focus on your business and vision.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services snapshot */}
      <section className="border-t bg-slate-50 py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-wider text-muted-foreground">How We Help You Win</p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Everything you need to launch and fund your Web3 project</h2>
            <p className="mt-4 text-muted-foreground">We don't just build products. We turn ideas into investment-ready projects with the connections to make them succeed.</p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border bg-white p-6">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0A2540] text-white"><Code2 size={18}/></div>
              <h3 className="text-lg font-semibold">Full technical execution</h3>
              <p className="mt-2 text-sm text-muted-foreground">UI/UX design, frontend and backend development, smart contract deployment—we build your entire product from the ground up.</p>
            </div>
            <div className="rounded-2xl border bg-white p-6">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0A2540] text-white"><Users size={18}/></div>
              <h3 className="text-lg font-semibold">Direct access to VCs and ecosystems</h3>
              <p className="mt-2 text-sm text-muted-foreground">We connect you to investors and communities actively looking for projects like yours—giving you a real shot at funding.</p>
            </div>
            <div className="rounded-2xl border bg-white p-6">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0A2540] text-white"><Rocket size={18}/></div>
              <h3 className="text-lg font-semibold">Incubation and scaling support</h3>
              <p className="mt-2 text-sm text-muted-foreground">Whether you're at day zero or ready to grow, we incubate new projects and help existing ones scale to the next stage.</p>
            </div>
            <div className="rounded-2xl border bg-white p-6">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0A2540] text-white"><Bot size={18}/></div>
              <h3 className="text-lg font-semibold">Blockchain and AI expertise</h3>
              <p className="mt-2 text-sm text-muted-foreground">From DeFi protocols to AI-powered apps, we have the specialized skills to bring cutting-edge Web3 ideas to life.</p>
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <Link to="/services" className="inline-flex items-center gap-2 rounded-full bg-[#0A2540] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:shadow">
              See how we work
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t bg-white py-16">
        <div className="container text-center">
          <h3 className="text-2xl font-semibold">Have an idea? Need funding? Let's talk.</h3>
          <p className="mt-2 text-muted-foreground">Tell us about your project and what stage you're at. We'll show you exactly how we can help you build, scale, and connect with the right investors.</p>
          <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0A2540] px-5 py-3 text-white font-semibold">
            Get started now
            <ArrowRight size={16}/>
          </Link>
        </div>
      </section>
    </div>
  );
}
