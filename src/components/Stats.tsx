import { useEffect, useState, useRef } from "react";

const stats = [
  { value: 20, suffix: "+", label: "Mais de 20 anos de experiência na criação de sites nacionais e internacionais." },
  { value: 300, suffix: "+", label: "Mais de 300 projetos entre sites institucionais, portais e ecommerce." },
  { value: 100, suffix: "%", label: "Todos os sites entregues com performance de SEO com nota A no GTmetrix." },
];

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let current = 0;
          const step = Math.max(1, Math.floor(target / 40));
          const interval = setInterval(() => {
            current += step;
            if (current >= target) {
              current = target;
              clearInterval(interval);
            }
            setCount(current);
          }, 30);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="font-titillium text-5xl md:text-6xl font-bold text-primary-foreground">
      {count}{suffix}
    </span>
  );
}

const Stats = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-daurer-navy to-daurer-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <p className="text-daurer-cyan font-titillium text-sm uppercase tracking-[0.3em] font-semibold mb-3">
            Empresa de Criação de Site
          </p>
          <h2 className="font-titillium text-3xl md:text-4xl font-bold text-primary-foreground">
            CONFIANÇA DE GRANDES EMPRESAS
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="space-y-3">
              <AnimatedNumber target={stat.value} suffix={stat.suffix} />
              <p className="text-primary-foreground/70 font-opensans text-sm max-w-xs mx-auto">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
