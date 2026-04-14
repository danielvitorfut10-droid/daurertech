import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CtaSection = () => (
  <section id="contato" className="py-24 bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 text-center space-y-6">
      <h2 className="text-3xl md:text-4xl font-bold">Pronto para transformar sua presença digital?</h2>
      <p className="max-w-md mx-auto opacity-90">
        Entre em contato e vamos conversar sobre o seu projeto.
      </p>
      <Button size="lg" variant="secondary">
        Fale Conosco <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  </section>
);

export default CtaSection;
