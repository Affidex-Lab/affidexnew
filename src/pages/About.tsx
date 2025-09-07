import { Shield, Users, Lightbulb, History, Target, Eye } from "lucide-react";

export default function About() {
  const values = [
    { icon: <Shield className="w-6 h-6" />, title: "Privacy by Design", description: "We build privacy-first solutions that put user control and data protection at the forefront of everything we create." },
    { icon: <Users className="w-6 h-6" />, title: "User-Centric Development", description: "Our development process centers around real user needs, ensuring our solutions are both powerful and accessible." },
    { icon: <Lightbulb className="w-6 h-6" />, title: "Innovation Through Iteration", description: "We believe in rapid prototyping and continuous improvement to bring the best possible solutions to market." },
    { icon: <History className="w-6 h-6" />, title: "Open Collaboration", description: "We foster an environment of open communication and collaboration to drive innovation and success." },
  ];

  const milestones = [
    { year: "2020", title: "CreedTech Group Founded", description: "Started as a technology consultancy focusing on Web2 development and digital transformation." },
    { year: "2022", title: "Blockchain Expansion", description: "Expanded into Web3 and blockchain development, building solutions for the decentralized ecosystem." },
    { year: "2023", title: "AI Integration", description: "Integrated artificial intelligence capabilities to enhance our development offerings and create smarter solutions." },
    { year: "2024", title: "Affidex Lab Evolution", description: "Transformed into Affidex Lab, an incubation laboratory focused on core utility projects and MVP development." },
  ];

  return (
    <div className="bg-[radial-gradient(1000px_600px_at_50%_-200px,rgba(10,37,64,0.35),transparent_60%),linear-gradient(180deg,#0A2540,#001428)] text-white">
      <div className="container py-16">
        <h1 className="text-center text-4xl md:text-6xl font-bold">About <span className="text-white">Affidex Lab</span></h1>
        <p className="mt-6 text-center text-gray-300 max-w-3xl mx-auto">
          Formerly CreedTech Group, we've evolved into an incubation laboratory focused on building the next generation of blockchain and AI-powered solutions.
        </p>
      </div>

      <div className="container pb-12">
        <div className="rounded-2xl border border-gray-800 bg-gray-900 p-8 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <History className="text-white" />
            <h2 className="text-3xl font-bold">Our Story</h2>
          </div>
          <p className="text-gray-300 leading-relaxed mb-4">Affidex Lab represents the natural evolution of CreedTech Group, born from our vision to create meaningful, utility-focused projects that push the boundaries of what's possible with blockchain and artificial intelligence technologies.</p>
          <p className="text-gray-300 leading-relaxed mb-4">Our transformation from a traditional development consultancy to a specialized incubation laboratory reflects our deep commitment to innovation and our belief that the future belongs to those who can seamlessly integrate privacy-first design with cutting-edge technology.</p>
          <p className="text-gray-300 leading-relaxed">Today, we focus on developing minimum viable products that solve real-world problems, with our flagship projects Cipher Wallet and Gamify demonstrating our ability to turn complex technologies into accessible, user-friendly solutions.</p>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          <div className="rounded-2xl border border-gray-800 bg-gray-900 p-8">
            <div className="flex items-center gap-3 mb-4">
              <Target className="text-white" />
              <h3 className="text-2xl font-bold">Our Mission</h3>
            </div>
            <p className="text-gray-300">To incubate and develop innovative blockchain and AI solutions that prioritize user privacy, accessibility, and real-world utility. We bridge the gap between complex technologies and practical applications, making advanced systems usable for everyone.</p>
          </div>
          <div className="rounded-2xl border border-gray-800 bg-gray-900 p-8">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="text-white" />
              <h3 className="text-2xl font-bold">Our Vision</h3>
            </div>
            <p className="text-gray-300">To become the leading incubation laboratory for core utility projects, fostering an ecosystem where privacy-first solutions and AI-powered tools work together to create a more secure, intelligent, and accessible digital future.</p>
          </div>
        </div>

        <h3 className="text-3xl font-bold text-center mb-8">Our Core Values</h3>
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
        <h3 className="text-3xl font-bold text-center mb-10">Our Journey</h3>
        <div className="space-y-6 max-w-4xl mx-auto">
          {milestones.map((m, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-700 text-white font-bold">{m.year}</div>
              <div className="flex-1 rounded-xl border border-gray-800 bg-gray-900 p-6">
                <div className="text-xl font-semibold">{m.title}</div>
                <p className="text-gray-300">{m.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
