import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Cliente 01", role: "CEO, Empresa A", text: "Excelente trabalho! O site ficou incrível e as conversões aumentaram significativamente." },
  { name: "Cliente 02", role: "Diretor, Empresa B", text: "Equipe muito profissional e atenciosa. Entregaram tudo no prazo e com qualidade." },
  { name: "Cliente 03", role: "Fundador, Empresa C", text: "Superou nossas expectativas. O design ficou moderno e a navegação muito fluida." },
];

const TestimonialsSection = () => (
  <section className="py-24 bg-muted/50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Depoimentos</h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          O que nossos clientes dizem sobre nós.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <Card key={t.name} className="border-border">
            <CardContent className="pt-6 space-y-4">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground italic">"{t.text}"</p>
              <div>
                <p className="font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
