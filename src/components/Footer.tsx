import { Mail, MessageCircle, Globe } from "lucide-react";

const Footer = () => (
  <footer className="py-12 border-t border-border">
    <div className="container mx-auto px-4">
      <div className="grid sm:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 className="font-bold text-foreground mb-3">SuaAgência</h3>
          <p className="text-sm text-muted-foreground">
            Criando experiências digitais que fazem a diferença.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-3 text-sm">Links</h4>
          <nav className="space-y-2">
            {["Home", "Serviços", "Portfólio", "Sobre", "Contato"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                {l}
              </a>
            ))}
          </nav>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-3 text-sm">Redes Sociais</h4>
          <div className="flex gap-4">
            {[Mail, MessageCircle, Globe].map((Icon, i) => (
              <a key={i} href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-border pt-6 text-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} SuaAgência. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
