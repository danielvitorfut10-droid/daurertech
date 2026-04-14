import { useState, useEffect } from "react";
import ThreeBackground from "./ThreeBackground";

const phrases = [
  "EXPERIÊNCIA INTERNACIONAL",
  "PROJETOS COMPLEXOS",
  "PERFORMANCE",
  "CIBERSEGURANÇA",
];

const Hero = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 60);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 30);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setPhraseIndex((i) => (i + 1) % phrases.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, phraseIndex]);

  const displayText = phrases[phraseIndex].substring(0, charIndex);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-daurer-dark">
      <ThreeBackground />
      {/* Overlay for better readability over the 3D scene */}
      <div className="absolute inset-0 bg-daurer-navy/70 z-0" />

      <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center pt-24 pb-32 relative z-10">
        {/* Right: text (now centered) */}
        <div className="space-y-6 flex flex-col items-center">
          <p className="text-daurer-cyan font-titillium text-sm uppercase tracking-[0.3em] font-semibold text-center">
            Criação de Sites
          </p>
          <h1 className="font-titillium text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground leading-tight text-center">
            AGÊNCIA DE CRIAÇÃO
            <br />
            DE SITES
            <br />
            <span className="text-primary">PROFISSIONAIS</span>
          </h1>
          <p className="text-primary-foreground/70 font-opensans text-lg max-w-2xl leading-relaxed text-center">
            Criação de sites complexos com foco em UX/UI, SEO e Performance.
            Agência em São Paulo com 300+ projetos entregues.
          </p>

          {/* Typewriter */}
          <div className="h-10 flex items-center">
            <span className="font-titillium text-xl md:text-2xl font-semibold text-daurer-cyan typewriter-cursor pr-1">
              {displayText}
            </span>
          </div>

          <a
            href="#contato"
            className="inline-block bg-primary hover:bg-daurer-light-blue text-primary-foreground px-8 py-4 rounded-full font-semibold text-base uppercase tracking-wider transition-colors"
          >
            Fale com um especialista
          </a>
        </div>
      </div>

      {/* Diagonal divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-[80px]"
        >
          <path
            d="M0,60 C400,120 800,0 1200,60 L1200,120 L0,120 Z"
            fill="hsl(0,0%,100%)"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
