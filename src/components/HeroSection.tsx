import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => (
  <section id="home" className="min-h-screen flex items-center pt-16">
    <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
          Criamos sites que <span className="text-primary">convertem</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-md">
          Sua agência parceira para criar experiências digitais modernas, rápidas e focadas em resultados.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button size="lg">
            Solicitar Orçamento <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg">
            Ver Portfólio
          </Button>
        </div>
      </div>
      <div className="aspect-[4/3] rounded-lg bg-muted flex items-center justify-center">
        <span className="text-muted-foreground text-sm">Imagem Hero</span>
      </div>
    </div>
  </section>
);

export default HeroSection;
