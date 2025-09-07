import { FileText, Download, Lightbulb, Rocket, Cog, Shield, ChartLine, Users } from "lucide-react";

export default function WhitePaper() {
  return (
    <div className="bg-[radial-gradient(1000px_600px_at_50%_-200px,rgba(10,37,64,0.35),transparent_60%),linear-gradient(180deg,#0A2540,#001428)] text-white">
      <div className="container text-center py-16">
        <FileText className="mx-auto h-12 w-12 text-[#8b5cf6] mb-4" />
        <h1 className="text-4xl md:text-6xl font-bold">Affidex Lab White Paper</h1>
        <p className="mt-4 text-gray-300 max-w-3xl mx-auto">A comprehensive overview of our incubation laboratory, mission, technology, and vision for the future of blockchain and AI solutions.</p>
        <button className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#8b5cf6] px-8 py-3 font-semibold">
          <Download size={16}/> Download PDF
        </button>
      </div>

      <div className="container grid lg:grid-cols-4 gap-8 pb-20">
        <aside className="lg:col-span-1 rounded-xl border border-gray-800 bg-gray-900 p-6 sticky top-6 h-fit">
          <h3 className="font-semibold mb-3">Table of Contents</h3>
          <nav className="space-y-2 text-sm text-gray-400">
            <a href="#introduction" className="block hover:text-purple-400">Introduction</a>
            <a href="#mission" className="block hover:text-purple-400">Mission & Vision</a>
            <a href="#tech" className="block hover:text-purple-400">Technology Stack</a>
            <a href="#products" className="block hover:text-purple-400">Product Portfolio</a>
            <a href="#roadmap" className="block hover:text-purple-400">Roadmap</a>
            <a href="#team" className="block hover:text-purple-400">Team</a>
          </nav>
        </aside>

        <main className="lg:col-span-3 space-y-10">
          <section id="introduction" className="rounded-xl border border-gray-800 bg-gray-900 p-8">
            <div className="flex items-center gap-2 mb-4"><Lightbulb className="text-[#8b5cf6]"/><h2 className="text-2xl font-bold">Introduction</h2></div>
            <p className="text-gray-300 mb-4">Affidex Lab represents the evolution of CreedTech Group into a specialized incubation laboratory focused on developing core utility projects in the blockchain and artificial intelligence domains. Our transformation reflects a strategic pivot towards building foundational technologies that will shape the future of decentralized systems and intelligent applications.</p>
            <p className="text-gray-300 mb-4">As an incubation laboratory, we operate at the intersection of innovation and practicality, taking promising concepts from ideation through MVP development and market validation. Our approach combines rigorous technical development with user‑centered design principles to create solutions that are both cutting‑edge and accessible.</p>
            <p className="text-gray-300">This white paper outlines our comprehensive approach to innovation, detailing our technological capabilities, product portfolio, and strategic vision for contributing to the next generation of digital infrastructure.</p>
          </section>

          <section id="mission" className="rounded-xl border border-gray-800 bg-gray-900 p-8">
            <div className="flex items-center gap-2 mb-4"><Rocket className="text-[#8b5cf6]"/><h2 className="text-2xl font-bold">Mission & Vision</h2></div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-lg bg-gray-800 p-6">
                <h3 className="font-semibold mb-2">Our Mission</h3>
                <p className="text-gray-300">To incubate and develop innovative blockchain and AI solutions that prioritize user privacy, accessibility, and real‑world utility. We bridge the gap between complex technologies and practical applications, making advanced systems usable for everyone.</p>
              </div>
              <div className="rounded-lg bg-gray-800 p-6">
                <h3 className="font-semibold mb-2">Our Vision</h3>
                <p className="text-gray-300">To become the leading incubation laboratory for core utility projects, fostering an ecosystem where privacy‑first solutions and AI‑powered tools work together to create a more secure, intelligent, and accessible digital future.</p>
              </div>
            </div>
          </section>

          <section id="tech" className="rounded-xl border border-gray-800 bg-gray-900 p-8">
            <div className="flex items-center gap-2 mb-4"><Cog className="text-[#8b5cf6]"/><h2 className="text-2xl font-bold">Technology Stack</h2></div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-lg bg-gray-800 p-6">
                <h4 className="font-semibold mb-2">Blockchain Technologies</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• EVM chains & Solidity</li>
                  <li>• Layer 2 scaling</li>
                  <li>• Cross‑chain interoperability</li>
                  <li>• DeFi integrations</li>
                </ul>
              </div>
              <div className="rounded-lg bg-gray-800 p-6">
                <h4 className="font-semibold mb-2">AI & Machine Learning</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• NLP and CV</li>
                  <li>• Generative AI models</li>
                  <li>• ML pipelines</li>
                </ul>
              </div>
              <div className="rounded-lg bg-gray-800 p-6">
                <h4 className="font-semibold mb-2">Development Stack</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• React & TypeScript</li>
                  <li>• Node.js</li>
                  <li>• Docker</li>
                  <li>• Cloud (AWS/GCP)</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="products" className="rounded-xl border border-gray-800 bg-gray-900 p-8">
            <div className="flex items-center gap-2 mb-4"><Shield className="text-[#8b5cf6]"/><h2 className="text-2xl font-bold">Product Portfolio</h2></div>
            <p className="text-gray-300">Highlights include Cipher Wallet (seedless wallet with biometric recovery and duress protection) and Gamify (AI‑powered natural‑language game creation platform).</p>
          </section>

          <section id="roadmap" className="rounded-xl border border-gray-800 bg-gray-900 p-8">
            <div className="flex items-center gap-2 mb-4"><ChartLine className="text-[#8b5cf6]"/><h2 className="text-2xl font-bold">Roadmap</h2></div>
            <ul className="space-y-3 text-gray-300">
              <li>Q1 – Foundation & MVP Launch</li>
              <li>Q2 – Market Expansion</li>
              <li>Q3 – Next‑Gen Products</li>
              <li>Q4 – Ecosystem Growth</li>
            </ul>
          </section>

          <section id="team" className="rounded-xl border border-gray-800 bg-gray-900 p-8">
            <div className="flex items-center gap-2 mb-4"><Users className="text-[#8b5cf6]"/><h2 className="text-2xl font-bold">Our Team</h2></div>
            <p className="text-gray-300">Our diverse team combines expertise in blockchain development, artificial intelligence, user experience design, and product management. We’re united by a shared vision of privacy‑first, accessible technologies.</p>
          </section>
        </main>
      </div>
    </div>
  );
}
