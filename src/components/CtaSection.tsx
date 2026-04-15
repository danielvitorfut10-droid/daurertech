import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CtaSection = () => (
  <section id="contato" className="py-24 relative z-10 border-t border-white/10">
    <div className="container mx-auto px-4 text-center space-y-6">
      <h2 className="text-3xl md:text-4xl font-bold text-white">Pronto para transformar sua presença digital?</h2>
      <p className="max-w-md mx-auto text-white/70">
        Entre em contato e vamos conversar sobre o seu projeto.
      </p>
      <Button
        size="lg"
        className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white rounded-full px-8"
      >
        Fale Conosco <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  </section>
);

export default CtaSection;
