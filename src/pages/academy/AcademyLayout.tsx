import { useState } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import { ArrowRight, Menu, X, ExternalLink, MapPin, Mail, Globe } from "lucide-react";
import { FaXTwitter, FaLinkedin, FaInstagram } from "react-icons/fa6";

function AcademyNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const nav = [
    { to: "/academy", label: "Home" },
    { to: "/academy/programmes", label: "Programmes" },
    { to: "/academy/about", label: "About" },
  ];

  const isActive = (to: string) => {
    if (to === "/academy") return pathname === "/academy";
    return pathname.startsWith(to);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/academy" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0A2540]">
            <span className="text-xs font-black text-white tracking-tight">AA</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-[13px] font-black tracking-widest text-[#0A2540] uppercase">Affidex Academy</span>
            <span className="text-[9px] font-medium tracking-wider text-[#C9973A] uppercase">Vocational Education & Training</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className={`font-medium transition-colors hover:text-[#0A2540] ${isActive(n.to) ? "text-[#0A2540]" : "text-slate-500"}`}
            >
              {n.label}
            </Link>
          ))}
          <a
            href="https://affidexlab.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs text-slate-400 hover:text-slate-600 transition-colors"
          >
            <ExternalLink size={12} />
            Affidex Lab
          </a>
          <Link
            to="/academy/apply"
            className="inline-flex items-center gap-2 rounded-full bg-[#0A2540] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0d2e52] hover:shadow-md"
          >
            Apply Free
            <ArrowRight size={14} />
          </Link>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white">
          <nav className="container flex flex-col gap-3 py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setIsOpen(false)}
                className={`text-sm font-medium py-1 transition-colors ${isActive(n.to) ? "text-[#0A2540]" : "text-slate-500"}`}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/academy/apply"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0A2540] px-4 py-2.5 text-sm font-semibold text-white mt-1"
            >
              Apply Free
              <ArrowRight size={14} />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

function AcademyFooter() {
  return (
    <footer className="border-t bg-[#0A2540] text-white">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 border border-white/20">
                <span className="text-xs font-black text-white tracking-tight">AA</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-sm font-black tracking-widest text-white uppercase">Affidex Academy</span>
                <span className="text-[10px] font-medium tracking-wider text-[#C9973A] uppercase">Vocational Education & Training</span>
              </div>
            </div>
            <p className="text-sm text-slate-300 max-w-xs leading-relaxed">
              Empowering Nigerian youth with free ICT and vocational skills training. World Bank IDEAS-aligned. NBTE accreditation in progress.
            </p>
            <p className="mt-3 text-xs text-slate-400">RC: 9316934 | Affidex Academy Ltd</p>
            <div className="mt-4 flex items-center gap-3">
              <a href="https://linkedin.com/company/affidexlab" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors"><FaLinkedin size={17} /></a>
              <a href="https://x.com/affidexlab" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors"><FaXTwitter size={17} /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><FaInstagram size={17} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link to="/academy" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/academy/programmes" className="hover:text-white transition-colors">Programmes</Link></li>
              <li><Link to="/academy/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/academy/apply" className="hover:text-white transition-colors">Apply Now</Link></li>
              <li><a href="https://affidexlab.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">Affidex Lab <ExternalLink size={11} /></a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <Mail size={14} className="mt-0.5 text-[#C9973A] shrink-0" />
                <div>
                  <a href="mailto:affidexacademy@gmail.com" className="hover:text-white block transition-colors">affidexacademy@gmail.com</a>
                  <a href="mailto:academy@affidexlab.com" className="hover:text-white block transition-colors">academy@affidexlab.com</a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 text-[#C9973A] shrink-0" />
                <span>Cross River State · Akwa Ibom State<br />Lagos · Abia State</span>
              </li>
              <li className="flex items-start gap-2">
                <Globe size={14} className="mt-0.5 text-[#C9973A] shrink-0" />
                <a href="https://www.affidexlab.com/academy" className="hover:text-white transition-colors">www.affidexlab.com/academy</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-slate-400">© {new Date().getFullYear()} Affidex Academy Ltd. A division of Affidex Lab.</p>
          <div className="flex gap-4 text-xs text-slate-400">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function AcademyLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <AcademyNavbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <AcademyFooter />
    </div>
  );
}
