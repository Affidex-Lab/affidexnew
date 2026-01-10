import { Shield, Users, Lightbulb, History, Target, Eye } from "lucide-react";

export default function About() {
  const values = [
    { icon: <Shield className="w-6 h-6" />, title: "We build for investors and users", description: "Your product needs to impress VCs and solve real problems. We design with both audiences in mind so you can raise funds and gain traction." },
    { icon: <Users className="w-6 h-6" />, title: "We keep you in the loop", description: "You'll see progress every step. No disappearing for months—we show you what we're building as we build it so you're always informed." },
    { icon: <Lightbulb className="w-6 h-6" />, title: "We move fast", description: "Speed matters when you're trying to raise capital. We ship MVPs in weeks, not quarters, so you can start pitching investors ASAP." },
    { icon: <History className="w-6 h-6" />, title: "We open doors", description: "Building the product is half the battle. We introduce you to VCs, ecosystems, and communities that can fund and amplify your project." },
  ];

  const milestones = [
    { year: "2023", title: "CreedTech Group Founded", description: "Started as a technology consultancy focusing on Web2 development and digital transformation." },
    { year: "2024", title: "Blockchain Expansion", description: "Expanded into Web3 and blockchain development, building solutions for the decentralized ecosystem." },
    // { year: "2023", title: "AI Integration", description: "Integrated artificial intelligence capabilities to enhance our development offerings and create smarter solutions." },
    { year: "2025", title: "Affidex Lab Evolution", description: "Transformed into Affidex Lab, an incubation laboratory focused on core utility projects and MVP development." },
  ];

  return (
    <div className="bg-[radial-gradient(1000px_600px_at_50%_-200px,rgba(10,37,64,0.35),transparent_60%),linear-gradient(180deg,#0A2540,#001428)] text-white">
      <div className="container py-16">
        <h1 className="text-center text-4xl md:text-6xl font-bold">Why <span className="text-white">we exist</span></h1>
        <p className="mt-6 text-center text-gray-300 max-w-3xl mx-auto">
          Too many great Web3 ideas never launch because founders can't find the right technical team or the right investors. We're here to fix that.
        </p>
      </div>

      <div className="container pb-12">
        <div className="rounded-2xl border border-gray-800 bg-gray-900 p-8 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <History className="text-white" />
            <h2 className="text-3xl font-bold">What we learned building our own products</h2>
          </div>
          <p className="text-gray-300 leading-relaxed mb-4">We started by building Web3 projects ourselves—Credify, Cipher Wallet, and others. We know what it's like to go from a raw idea to a working product. We've been through the technical challenges, the investor pitches, the late-night debugging sessions.</p>
          <p className="text-gray-300 leading-relaxed mb-4">That experience taught us something critical: most founders have the vision and drive, but they get stuck on execution. They can't find developers who understand Web3. They can't get in front of the right investors. They waste months trying to piece together a team instead of building.</p>
          <p className="text-gray-300 leading-relaxed">So we built Affidex Lab to solve that problem. Now we use our technical expertise and investor network to help other founders get their products built and funded—fast. You bring the vision, we handle the execution and open the doors.</p>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          <div className="rounded-2xl border border-gray-800 bg-gray-900 p-8">
            <div className="flex items-center gap-3 mb-4">
              <Target className="text-white" />
              <h3 className="text-2xl font-bold">What we do for you</h3>
            </div>
            <p className="text-gray-300">We turn your Web3 idea into a fundable product by building the entire technical stack—UI/UX, frontend, backend, smart contracts—then connecting you to VCs and ecosystems that can take you to the next level. You focus on the vision and business, we handle the rest.</p>
          </div>
          <div className="rounded-2xl border border-gray-800 bg-gray-900 p-8">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="text-white" />
              <h3 className="text-2xl font-bold">What you get</h3>
            </div>
            <p className="text-gray-300">A complete product built by people who've done it before. Direct introductions to investors who are actively looking for Web3 projects. A partner who understands both the tech and the fundraising game—because we've played it ourselves.</p>
          </div>
        </div>

        <h3 className="text-3xl font-bold text-center mb-8">How we work</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {values.map((v, i) => (
            <div key={i} className="rounded-xl border border-gray-800 bg-gray-900 p-6">
              <div className="inline-flex items-center gap-2 rounded-lg bg-gray-800 border border-gray-700 p-2 text-white mb-4">{v.icon}</div>
              <div className="font-semibold mb-1">{v.title}</div>
              <p className="text-gray-400 text-sm">{v.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="container py-12">
        <h3 className="text-3xl font-bold text-center mb-10">Why founders trust us</h3>
        <div className="space-y-6 max-w-4xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-700 text-white font-bold">01</div>
            <div className="flex-1 rounded-xl border border-gray-800 bg-gray-900 p-6">
              <div className="text-xl font-semibold">We've built our own products from scratch</div>
              <p className="text-gray-300">We're not just contractors. We've launched live Web3 products like Credify. We know what it takes to go from idea to funded project.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-700 text-white font-bold">02</div>
            <div className="flex-1 rounded-xl border border-gray-800 bg-gray-900 p-6">
              <div className="text-xl font-semibold">We have real VC and ecosystem connections</div>
              <p className="text-gray-300">We're not promising warm intros to strangers. We actively work with investors and ecosystems looking for projects like yours.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-700 text-white font-bold">03</div>
            <div className="flex-1 rounded-xl border border-gray-800 bg-gray-900 p-6">
              <div className="text-xl font-semibold">We understand both tech and fundraising</div>
              <p className="text-gray-300">Most dev shops just write code. We build products that help you raise capital because we've been in the founder's seat ourselves.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
