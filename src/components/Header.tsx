import { useState, useEffect } from "react";
import { Menu, X, Key } from "lucide-react";

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
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[95%] max-w-5xl rounded-full border shadow-[0_0_20px_rgba(255,255,255,0.05)] ${
        scrolled
          ? "bg-black/60 backdrop-blur-2xl border-white/40 shadow-[0_4px_30px_rgba(255,255,255,0.1)] scale-[0.98]"
          : "bg-black/30 backdrop-blur-xl border-white/30"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-3 md:py-3.5 h-full w-full">
        {/* Desktop nav (Left) */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-titillium font-semibold text-white/80 hover:text-white transition-colors uppercase tracking-[0.2em]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button (Right) */}
        <div className="hidden lg:flex shrink-0 ml-auto">
          <a
            href="#contato"
            className="flex items-center gap-2 bg-white text-black hover:bg-gray-100 px-6 py-2.5 rounded-full text-xs font-bold transition-all hover:scale-105 uppercase tracking-widest shadow-sm"
          >
            <Key size={14} className="stroke-[2.5]" />
            Contato
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-white ml-auto"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu (Floating Cloud) */}
      {mobileOpen && (
        <div className="lg:hidden bg-black/90 backdrop-blur-2xl border border-white/20 absolute top-[calc(100%+0.5rem)] left-0 right-0 rounded-[2rem] shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300">
          <nav className="flex flex-col items-center gap-5 py-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-white/80 hover:text-white text-sm font-titillium font-semibold uppercase tracking-widest transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full font-bold uppercase tracking-wider mt-4 hover:bg-gray-200 transition-colors"
            >
              <Key size={16} className="stroke-[2.5]" />
              Contato
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
