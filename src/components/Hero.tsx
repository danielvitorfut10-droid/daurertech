import { useState, useEffect } from "react";

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
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-daurer-navy via-daurer-dark to-daurer-navy overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-daurer-cyan/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center pt-24 pb-32 relative z-10">
        {/* Left: visual */}
        <div className="hidden lg:flex justify-center">
          <div className="relative w-[420px] h-[420px]">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/30 to-daurer-cyan/20 blur-2xl" />
            <div className="relative glass rounded-2xl w-full h-full flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 mx-auto rounded-xl bg-primary/20 flex items-center justify-center">
                  <span className="text-4xl font-titillium font-bold text-primary-foreground">D</span>
                </div>
                <p className="text-primary-foreground/60 font-opensans text-sm">300+ projetos entregues</p>
                <p className="text-primary-foreground/60 font-opensans text-sm">20+ anos de experiência</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: text */}
        <div className="space-y-6">
          <p className="text-daurer-cyan font-titillium text-sm uppercase tracking-[0.3em] font-semibold">
            Criação de Sites
          </p>
          <h1 className="font-titillium text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
            AGÊNCIA DE CRIAÇÃO
            <br />
            DE SITES
            <br />
            <span className="text-primary">PROFISSIONAIS</span>
          </h1>
          <p className="text-primary-foreground/70 font-opensans text-lg max-w-xl leading-relaxed">
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
