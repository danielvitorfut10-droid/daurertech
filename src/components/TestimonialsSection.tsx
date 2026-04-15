import { Star } from "lucide-react";

const testimonials = [
  { name: "Cliente 01", role: "CEO, Empresa A", text: "Excelente trabalho! O site ficou incrível e as conversões aumentaram significativamente." },
  { name: "Cliente 02", role: "Diretor, Empresa B", text: "Equipe muito profissional e atenciosa. Entregaram tudo no prazo e com qualidade." },
  { name: "Cliente 03", role: "Fundador, Empresa C", text: "Superou nossas expectativas. O design ficou moderno e a navegação muito fluida." },
];

const TestimonialsSection = () => (
  <section className="py-24 relative z-10">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Depoimentos</h2>
        <p className="text-white/60 max-w-lg mx-auto">
          O que nossos clientes dizem sobre nós.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div key={t.name} className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 space-y-4">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-purple-400 text-purple-400" />
              ))}
            </div>
            <p className="text-sm text-white/70 italic">"{t.text}"</p>
            <div>
              <p className="font-semibold text-white text-sm">{t.name}</p>
              <p className="text-xs text-white/50">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
