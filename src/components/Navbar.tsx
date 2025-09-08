import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const nav = [
    { to: "/products", label: "Products" },
    { to: "/services", label: "Services" },
    { to: "/roadmap", label: "Roadmap" },
    { to: "/about", label: "About" },
  ];
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex w-48 sm:w-60 items-center font-extrabold tracking-tight">
          <img src="/logo.png" alt="Affidex Lab" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className={`transition-colors hover:text-foreground ${pathname === n.to ? "text-foreground" : "text-muted-foreground"}`}
            >
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

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <nav className="container flex flex-col gap-4 py-4 text-center">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={toggleMenu}
                className={`text-sm transition-colors hover:text-foreground ${pathname === n.to ? "text-foreground" : "text-muted-foreground"}`}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={toggleMenu}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0A2540] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:shadow-md"
            >
              Get in touch
              <ArrowRight size={16} />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}