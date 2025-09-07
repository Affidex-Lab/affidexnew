import { Rocket, Shield, BrainCircuit, Code2, Smartphone, Cloud, Users, Lightbulb, LineChart } from "lucide-react";

export default function Services() {
  const services = [
    { icon: <Rocket className="w-6 h-6" />, title: "MVP Development", description: "Rapidly prototype and launch minimum viable products that solve real problems. We focus on bringing innovative ideas to market quickly and efficiently.", gradient: "from-blue-500 to-purple-600" },
    { icon: <Shield className="w-6 h-6" />, title: "Blockchain Development", description: "Build secure, scalable blockchain solutions including smart contracts, DeFi protocols, and Web3 applications with privacy-first architecture.", gradient: "from-green-500 to-blue-600" },
    { icon: <BrainCircuit className="w-6 h-6" />, title: "AI Integration", description: "Leverage artificial intelligence to create intuitive, powerful tools. From natural language processing to machine learning models.", gradient: "from-purple-500 to-pink-600" },
    { icon: <Code2 className="w-6 h-6" />, title: "Custom Software", description: "End-to-end software development services for Web2 and Web3 applications, tailored to your specific business needs.", gradient: "from-orange-500 to-red-600" },
    { icon: <Smartphone className="w-6 h-6" />, title: "Mobile Apps", description: "Cross‑platform mobile applications that provide seamless user experiences across iOS and Android devices.", gradient: "from-teal-500 to-green-600" },
    { icon: <Cloud className="w-6 h-6" />, title: "Cloud Infrastructure", description: "Design and implement scalable cloud infrastructure solutions with focus on security, performance, and cost optimization.", gradient: "from-indigo-500 to-purple-600" },
  ];

  const steps = [
    { num: "01", title: "Discovery & Planning", desc: "We start by understanding your vision, requirements, and goals to create a comprehensive project roadmap." },
    { num: "02", title: "Design & Architecture", desc: "Our team designs the technical architecture and user experience to ensure optimal performance and usability." },
    { num: "03", title: "Development & Testing", desc: "We build your solution using agile methodologies with continuous testing and quality assurance." },
    { num: "04", title: "Deployment & Support", desc: "We deploy your solution and provide ongoing support, maintenance, and optimization services." },
  ];

  return (
    <div className="bg-[radial-gradient(1000px_600px_at_50%_-200px,rgba(10,37,64,0.35),transparent_60%),linear-gradient(180deg,#0A2540,#001428)] text-white">
      <div className="container text-center py-16">
        <h1 className="text-4xl md:text-6xl font-bold">Our Services</h1>
        <p className="mt-4 text-gray-300 max-w-3xl mx-auto">We offer comprehensive development services to help you build the next generation of blockchain and AI‑powered solutions.</p>
      </div>

      <div className="container pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((s, i) => (
            <div key={i} className="rounded-2xl border border-gray-800 bg-gray-900 p-8 hover:border-gray-600 transition">
              <div className="mb-5 inline-flex rounded-full bg-[#0A2540] p-3 text-white">{s.icon}</div>
              <div className="text-xl font-bold mb-2">{s.title}</div>
              <p className="text-gray-300">{s.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="container pb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Our Process</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">We follow a proven methodology to ensure your project is delivered on time, within budget, and exceeds expectations.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((st, i) => (
            <div key={i} className="rounded-xl border border-gray-800 bg-gray-900 p-6 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gray-700 font-bold">{st.num}</div>
              <div className="font-semibold mb-2">{st.title}</div>
              <p className="text-gray-400 text-sm">{st.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="container pb-20">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Why Choose Affidex Lab?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">We combine deep technical expertise with a user‑first approach to deliver solutions that truly make a difference.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="text-center">
            <Users className="w-12 h-12 text-[#8b5cf6] mx-auto mb-4" />
            <div className="text-lg font-semibold mb-2">Expert Team</div>
            <p className="text-gray-400">Our team combines years of experience in blockchain, AI, and software development.</p>
          </div>
          <div className="text-center">
            <Lightbulb className="w-12 h-12 text-[#8b5cf6] mx-auto mb-4" />
            <div className="text-lg font-semibold mb-2">Innovation Focus</div>
            <p className="text-gray-400">We stay at the forefront of technology trends to bring you cutting‑edge solutions.</p>
          </div>
          <div className="text-center">
            <LineChart className="w-12 h-12 text-[#8b5cf6] mx-auto mb-4" />
            <div className="text-lg font-semibold mb-2">Proven Results</div>
            <p className="text-gray-400">Our track record speaks for itself with successful projects and satisfied clients.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
