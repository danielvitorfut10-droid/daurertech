import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "O que fazemos", href: "#servicos" },
  { label: "Clientes", href: "#clientes" },
  { label: "Sobre nós", href: "#sobre" },
  { label: "Nosso time", href: "#time" },
  { label: "FAQ", href: "#faq" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-auto px-1 py-1 rounded-full border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.05)] ${
        scrolled
          ? "bg-daurer-navy/70 backdrop-blur-xl shadow-[0_0_30px_rgba(255,255,255,0.1)] scale-95"
          : "bg-daurer-navy/40 backdrop-blur-lg"
      }`}
    >
      <div className="flex items-center justify-center px-4 py-1.5 h-full">
        {/* Logo Removed */}

        {/* Desktop nav (Centered) */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-titillium font-semibold text-primary-foreground/80 hover:text-primary transition-colors uppercase tracking-[0.2em]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            className="bg-primary hover:bg-daurer-cyan text-primary-foreground px-5 py-2 rounded-full text-xs font-bold transition-all hover:scale-105 uppercase tracking-wider"
          >
            Contato
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-primary-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu (Floating Cloud) */}
      {mobileOpen && (
        <div className="lg:hidden bg-daurer-navy/90 backdrop-blur-xl border border-white/10 absolute top-[calc(100%+0.5rem)] left-0 right-0 rounded-[2rem] shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300">
          <nav className="flex flex-col items-center gap-4 py-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-primary-foreground/80 hover:text-primary text-sm font-titillium font-semibold uppercase tracking-widest transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setMobileOpen(false)}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-bold uppercase tracking-wider mt-2 hover:bg-daurer-cyan transition-colors"
            >
              Contato
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
