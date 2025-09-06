import { Link, Routes, Route, useLocation } from "react-router-dom";
import { ArrowRight, Linkedin, Twitter } from "lucide-react";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Products from "./pages/Products";
import WhitePaper from "./pages/WhitePaper";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";

function Nav() {
  const nav = [
    { to: "/", label: "Home" },
    { to: "/products", label: "Products" },
    { to: "/services", label: "Services" },
    { to: "/white-paper", label: "White Paper" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];
  const { pathname } = useLocation();
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-extrabold tracking-tight">
          <span className="text-xl">AFFIDEX</span>
          <span className="rounded-full bg-[#0A2540] px-2 py-0.5 text-xs font-bold text-white">LAB</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className={`transition-colors hover:text-foreground ${pathname === n.to ? "text-foreground" : "text-muted-foreground"}`}>
              {n.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#0A2540] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:shadow-md"
          >
            Get in touch
            <ArrowRight size={16} />
          </Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  const footerLinks = [
    { to: "/privacy-policy", label: "Privacy Policy" },
    { to: "/terms-and-conditions", label: "Terms & Conditions" },
  ];
  return (
    <footer className="mt-auto border-t bg-slate-50">
      <div className="container flex flex-col items-center justify-between gap-4 py-8 text-center md:flex-row md:text-left">
        <div className="text-sm text-muted-foreground">© {new Date().getFullYear()} AFFIDEX LAB • Brand color: #0A2540</div>
        <div className="flex items-center gap-6 text-sm">
          {footerLinks.map((n) => (
            <Link key={n.to} to={n.to} className="text-muted-foreground hover:text-foreground">
              {n.label}
            </Link>
          ))}
          <a href="https://linkedin.com/company/affidexlab" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground"><Linkedin size={18} /></a>
          <a href="https://x.com/affidexlab" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground"><Twitter size={18} /></a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/white-paper" element={<WhitePaper />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<Terms />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
