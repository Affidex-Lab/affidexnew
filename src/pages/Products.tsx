import { Shield, Gamepad2, Lock, Fingerprint, Palette, Rocket } from "lucide-react";

export default function Products() {
  const products = [
    {
      title: "Cipher Wallet",
      category: "Blockchain Security",
      description:
        "A revolutionary crypto wallet that eliminates seed phrases using Shamir's Secret Sharing, featuring biometric recovery and duress auto-lock for maximum security.",
      icon: <Shield className="w-6 h-6" />,
      features: [
        "No seed phrases required",
        "Shamir's Secret Sharing",
        "Biometric recovery system",
        "Duress auto-lock protection",
      ],
      status: "MVP",
    },
    {
      title: "Gamify",
      category: "AI Platform",
      description:
        "An AI-powered platform that enables anyone to create engaging games through natural language prompts, democratizing game development for creators worldwide.",
      icon: <Gamepad2 className="w-6 h-6" />,
      features: [
        "Natural language game creation",
        "AI-powered development tools",
        "No coding required",
        "Rapid prototyping",
      ],
      status: "MVP",
    },
  ];

  const past = [
    { title: "Blockchain Infrastructure", description: "Built scalable blockchain solutions for enterprise clients", icon: <Lock className="w-5 h-5" /> },
    { title: "AI Integration Services", description: "Developed AI-powered tools for various business applications", icon: <Fingerprint className="w-5 h-5" /> },
    { title: "Custom Software Solutions", description: "Created tailored software solutions for Web2 and Web3 businesses", icon: <Palette className="w-5 h-5" /> },
  ];

  return (
    <div className="bg-black text-white">
      <div className="container text-center py-16">
        <h1 className="text-4xl md:text-6xl font-bold">Our <span className="text-white">Products</span></h1>
        <p className="mt-4 text-gray-300 max-w-3xl mx-auto">Discover our innovative MVP products and explore the cutting-edge solutions we've built for the future of blockchain and AI.</p>
      </div>

      <div className="container pb-16">
        <h2 className="text-3xl font-bold text-center mb-10">Current MVPs</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {products.map((p, i) => (
            <div key={i} className="rounded-2xl border border-gray-800 bg-gray-900 p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="inline-flex rounded-full bg-[#0A2540] p-3 text-white">{p.icon}</div>
                <span className="rounded-full bg-green-900 px-3 py-1 text-sm text-green-300">{p.status}</span>
              </div>
              <div className="mb-6">
                <div className="text-2xl font-bold">{p.title}</div>
                <div className="text-gray-300 font-medium">{p.category}</div>
                <p className="mt-3 text-gray-300">{p.description}</p>
              </div>
              <div>
                <div className="font-semibold mb-2">Key Features:</div>
                {p.features.map((f, j) => (
                  <div key={j} className="flex items-center gap-2 text-sm text-gray-300">
                    <div className="h-2 w-2 rounded-full bg-gray-600" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
              <button className="mt-6 w-full rounded-lg bg-gray-700 px-6 py-3 font-semibold">Learn More</button>
            </div>
          ))}
        </div>
      </div>

      <div className="container pb-20">
        <h2 className="text-3xl font-bold text-center mb-10">Past Projects</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {past.map((x, i) => (
            <div key={i} className="rounded-xl border border-gray-800 bg-gray-900 p-6">
              <div className="mb-3 inline-flex items-center gap-2 rounded-lg bg-gray-800 p-2 text-gray-300">{x.icon}<span className="font-semibold">{x.title}</span></div>
              <p className="text-gray-400 text-sm">{x.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="container pb-24 text-center">
        <Rocket className="mx-auto mb-4 h-10 w-10 text-gray-300" />
        <h3 className="text-3xl font-bold mb-2">Ready to Build the Future?</h3>
        <p className="text-gray-300 max-w-2xl mx-auto mb-6">Join us in our mission to create innovative solutions that push the boundaries of blockchain and AI technology.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/contact" className="rounded-lg bg-gray-700 px-8 py-3 font-semibold">Get In Touch</a>
          <a href="/about" className="rounded-lg border border-gray-600 px-8 py-3 font-semibold text-gray-300 hover:bg-gray-700 hover:text-white">Learn About Us</a>
        </div>
      </div>
    </div>
  );
}
