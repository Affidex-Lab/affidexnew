import { Rocket, Shield, BrainCircuit, Code2, Smartphone, Cloud, Users, Lightbulb, LineChart } from "lucide-react";

export default function Services() {
  const services = [
    { icon: <Rocket className="w-6 h-6" />, title: "Turn your idea into an MVP", description: "You have a vision but need a working product to show investors. We build your MVP fast—UI/UX, frontend, backend, smart contracts—so you can start pitching within weeks, not months.", gradient: "from-blue-500 to-purple-600" },
    { icon: <Shield className="w-6 h-6" />, title: "Build your blockchain product", description: "Need DeFi protocols, NFT platforms, or Web3 apps? We develop secure, scalable smart contracts and decentralized systems that investors and users can trust.", gradient: "from-green-500 to-blue-600" },
    { icon: <BrainCircuit className="w-6 h-6" />, title: "Add AI to your product", description: "Want to integrate AI but don't have the expertise? We implement machine learning, NLP, and intelligent automation that makes your product stand out and work smarter.", gradient: "from-purple-500 to-pink-600" },
    { icon: <Code2 className="w-6 h-6" />, title: "Build your complete product", description: "No technical team? No problem. We handle the entire stack—frontend, backend, databases, APIs—so you get a polished, production-ready product without hiring a single developer.", gradient: "from-orange-500 to-red-600" },
    { icon: <Smartphone className="w-6 h-6" />, title: "Launch on mobile", description: "Your users are on mobile. We build cross-platform iOS and Android apps that deliver smooth experiences and help you reach more customers faster.", gradient: "from-teal-500 to-green-600" },
    { icon: <Cloud className="w-6 h-6" />, title: "Scale your infrastructure", description: "Growing fast and need your tech to keep up? We design and deploy cloud infrastructure that handles growth, stays secure, and keeps costs under control.", gradient: "from-indigo-500 to-purple-600" },
  ];

  const steps = [
    { num: "01", title: "Understand your vision", desc: "We dig deep into your idea, target market, and funding goals to map out exactly what you need to succeed." },
    { num: "02", title: "Design for investors and users", desc: "We create UI/UX and architecture that impresses investors while solving real problems for your users." },
    { num: "03", title: "Build and keep you updated", desc: "We develop your product in sprints, showing you progress every step so you're never in the dark." },
    { num: "04", title: "Launch and connect you to VCs", desc: "We deploy your product, then introduce you to the investors and ecosystems that can take you to the next level." },
  ];

  return (
    <div className="bg-[radial-gradient(1000px_600px_at_50%_-200px,rgba(10,37,64,0.35),transparent_60%),linear-gradient(180deg,#0A2540,#001428)] text-white">
      <div className="container text-center py-16">
        <h1 className="text-4xl md:text-6xl font-bold">What we'll build for you</h1>
        <p className="mt-4 text-gray-300 max-w-3xl mx-auto">From your initial idea to a fully-funded product, we handle every technical aspect so you can focus on growing your business.</p>
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
          <h2 className="text-3xl font-bold">How we work with you</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">A clear, proven process that keeps you in the loop and gets your product to market fast.</p>
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
          <h2 className="text-3xl font-bold">Why founders choose us</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">We don't just build products—we open doors to the funding and networks that turn projects into companies.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="text-center">
            <Users className="w-12 h-12 text-[#8b5cf6] mx-auto mb-4" />
            <div className="text-lg font-semibold mb-2">Direct access to VCs</div>
            <p className="text-gray-400">We connect you to investors actively looking for projects like yours—not just a referral, real introductions.</p>
          </div>
          <div className="text-center">
            <Lightbulb className="w-12 h-12 text-[#8b5cf6] mx-auto mb-4" />
            <div className="text-lg font-semibold mb-2">Full technical execution</div>
            <p className="text-gray-400">From smart contracts to UI design, we build everything so you don't need to hire or manage a dev team.</p>
          </div>
          <div className="text-center">
            <LineChart className="w-12 h-12 text-[#8b5cf6] mx-auto mb-4" />
            <div className="text-lg font-semibold mb-2">Fast, fundable MVPs</div>
            <p className="text-gray-400">We build products that impress investors and work for real users—not glorified prototypes.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
