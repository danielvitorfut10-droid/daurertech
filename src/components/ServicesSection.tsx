import { Globe, Palette, Rocket, Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  { icon: Globe, title: "Desenvolvimento Web", description: "Sites responsivos e modernos com as melhores tecnologias do mercado." },
  { icon: Palette, title: "Design UI/UX", description: "Interfaces intuitivas e atraentes que encantam seus usuários." },
  { icon: Search, title: "SEO & Performance", description: "Otimização para mecanismos de busca e velocidade de carregamento." },
  { icon: Rocket, title: "Landing Pages", description: "Páginas de alta conversão focadas em resultados e vendas." },
];

const ServicesSection = () => (
  <section id="servicos" className="py-24">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nossos Serviços</h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Soluções completas para sua presença digital.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s) => (
          <Card key={s.title} className="group hover:shadow-lg transition-shadow border-border">
            <CardHeader>
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <s.icon className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg">{s.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{s.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
