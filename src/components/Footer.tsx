import { Linkedin, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-daurer-navy border-t border-primary-foreground/5 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <span className="font-titillium text-2xl font-bold text-primary-foreground tracking-wide">
              DAURER
            </span>
            <p className="text-primary-foreground/50 font-opensans text-sm leading-relaxed">
              Agência de criação de sites especialista em projetos de alta complexidade, em múltiplas
              plataformas. Desenvolvimento de sites do jeito que o seu negócio precisa para crescer.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://www.linkedin.com/company/daurer/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/40 hover:text-daurer-cyan transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <div className="text-primary-foreground/30 text-xs font-opensans space-y-1 pt-4">
              <p>© 2026 TODOS OS DIREITOS RESERVADOS</p>
              <p>CNPJ: 20.256.891/0001-59</p>
            </div>
          </div>

          {/* Col 2: Addresses */}
          <div className="space-y-6">
            <h4 className="font-titillium font-bold text-primary-foreground text-sm uppercase tracking-wider">
              Endereços
            </h4>
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-daurer-cyan mt-1 shrink-0" />
                <div>
                  <p className="text-primary-foreground/80 font-semibold text-sm">Unidade Alphaville – Barueri</p>
                  <p className="text-primary-foreground/40 text-xs">
                    Al. Rio Negro, 500 – conj. 215/216<br />
                    Alphaville – Barueri – SP | CEP 06454-000
                  </p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-daurer-cyan text-xs hover:underline"
                  >
                    Ver no Google Maps
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-daurer-cyan mt-1 shrink-0" />
                <div>
                  <p className="text-primary-foreground/80 font-semibold text-sm">Unidade São Paulo – Itaim Bibi</p>
                  <p className="text-primary-foreground/40 text-xs">
                    Av. Eng. Luís Carlos Berrini, 1748<br />
                    Itaim Bibi – São Paulo – SP | CEP 04571-010
                  </p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-daurer-cyan text-xs hover:underline"
                  >
                    Ver no Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Col 3: Links */}
          <div className="space-y-4">
            <h4 className="font-titillium font-bold text-primary-foreground text-sm uppercase tracking-wider">
              Institucional
            </h4>
            <nav className="flex flex-col gap-2">
              {[
                { label: "Home", href: "#" },
                { label: "Criação de Sites", href: "#servicos" },
                { label: "Consultoria SEO", href: "#" },
                { label: "Consultoria GA4", href: "#" },
                { label: "Blog", href: "#" },
                { label: "Política de Privacidade", href: "#" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-primary-foreground/50 hover:text-daurer-cyan text-sm font-opensans transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
