import { Code2, Globe, Rocket, Palette, ShieldCheck, Zap, BarChart3, Clock } from "lucide-react";

const services = [
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Criação de Sites e Lojas Ecommerce",
    desc: "Desenvolvemos sites institucionais, landing pages e e-commerces em WordPress, WooCommerce, Magento, PHP, Java, ASP.Net e mais.",
  },
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Sistemas Web & Integrações",
    desc: "Equipe de nível internacional para integração de sistemas, simuladores, APIs e desenvolvimentos complexos.",
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Sites para Transformação Digital",
    desc: "Melhorias significativas de conversão com páginas específicas para diferentes campanhas e Growth Hacking.",
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Design e Responsividade",
    desc: "Sites personalizados por webdesigners premiados na Europa e Brasil. Todos ajustados para mobile.",
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Otimizados para o Google",
    desc: "Especialistas em SEO garantindo desempenho máximo do seu website nos mecanismos de busca.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Hospedagem, Segurança e Manutenção",
    desc: "Serviços de hospedagem com cibersegurança e manutenção. Especialistas em segurança para WordPress.",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Tecnologia e IA",
    desc: "Softwares com inteligência artificial para identificar o melhor layout e aumentar a taxa de conversão.",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Prazos de Entrega",
    desc: "Entregamos 100% dos projetos dentro dos prazos informados. Prezamos pelos compromissos assumidos.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <p className="text-primary font-titillium text-sm uppercase tracking-[0.3em] font-semibold mb-3">
            Criação de Sites em SP
          </p>
          <h2 className="font-titillium text-3xl md:text-4xl font-bold text-foreground mb-4">
            COMO FUNCIONA A CRIAÇÃO DE SITES
          </h2>
          <p className="text-muted-foreground font-opensans max-w-2xl mx-auto">
            Nosso núcleo de desenvolvimento é formado por especialistas com experiência
            internacional em diferentes plataformas. Oferecemos um serviço 100% personalizado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="reveal group p-6 rounded-xl border border-border bg-card hover:bg-primary hover:border-primary transition-all duration-300 cursor-default"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="text-primary group-hover:text-primary-foreground mb-4 transition-colors">
                {service.icon}
              </div>
              <h3 className="font-titillium text-lg font-semibold text-foreground group-hover:text-primary-foreground mb-2 transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground group-hover:text-primary-foreground/80 text-sm font-opensans transition-colors">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 reveal">
          <a
            href="#contato"
            className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-full font-semibold uppercase tracking-wider transition-colors"
          >
            Tire suas dúvidas com nossos especialistas
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
