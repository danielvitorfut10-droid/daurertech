import { Briefcase, Code2, Lightbulb, Palette } from "lucide-react";

const team = [
  {
    dept: "COMERCIAL",
    icon: <Briefcase className="w-6 h-6" />,
    desc: "Eng. Eletrônico e Computação, Adm. FGV, Marketing – Wharton / USA e negócios em Harvard.",
    detail: "Presidente e Executivo de empresas multinacionais com carreira internacional na HP, DuPont e British Petroleum.",
  },
  {
    dept: "OPERAÇÕES",
    icon: <Briefcase className="w-6 h-6" />,
    desc: "Graduada pela ESPM, trabalhou na DuPont e Dafiti.",
    detail: "Certificada em Estratégias de Marketing Digital por Harvard – USA. Especialista em Marketing Digital de alta performance para segmentos B2B e B2C.",
  },
  {
    dept: "INOVAÇÃO",
    icon: <Lightbulb className="w-6 h-6" />,
    desc: "Especialista em tecnologias e softwares aplicados no Marketing Digital.",
    detail: "Especialista em SEO, ABM e LinkedIn. Responsável por inovações que impactam nos resultados de nossos clientes.",
  },
  {
    dept: "CRIAÇÃO",
    icon: <Palette className="w-6 h-6" />,
    desc: "Designer, graduado em multimídia e pós graduado em branding: estratégias de marcas.",
    detail: "Participou do desenvolvimento de várias marcas conhecidas tais como Itaú, Globo, Motorola, Yamaha, Comgás.",
  },
  {
    dept: "DEV. FULLSTACK",
    icon: <Code2 className="w-6 h-6" />,
    desc: "Mais de 15 anos em projetos PHP e Java. DevOps em Linux, Docker, Oracle PL/SQL.",
    detail: "Experiência em integração de APIs (WordPress, Shopify, WooCommerce, BigCommerce, Google Maps, YouTube, Slack).",
  },
  {
    dept: "DEV. SOFTWARE",
    icon: <Code2 className="w-6 h-6" />,
    desc: "Profissional Sênior com mais de 18 anos de experiência em TI.",
    detail: "Projetos com foco específico em ASP.NET desde 2006. Analista e Desenvolvedor Fullstack Sênior.",
  },
];

const Team = () => {
  return (
    <section id="time" className="py-24 bg-gradient-to-br from-daurer-navy to-daurer-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[60px]">
          <path d="M0,60 C400,120 800,0 1200,60 L1200,120 L0,120 Z" fill="hsl(0,0%,100%)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 pt-8">
        <div className="text-center mb-16 reveal">
          <p className="text-daurer-cyan font-titillium text-sm uppercase tracking-[0.3em] font-semibold mb-3">
            Agência de Criação de Sites
          </p>
          <h2 className="font-titillium text-3xl md:text-4xl font-bold text-primary-foreground">
            NOSSO TIME
          </h2>
          <p className="text-primary-foreground/60 font-opensans max-w-2xl mx-auto mt-4">
            Confira alguns currículos de nossa equipe de especialistas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <div
              key={i}
              className="reveal glass rounded-xl p-6 hover:bg-primary/10 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-daurer-cyan">
                  {member.icon}
                </div>
                <h3 className="font-titillium font-bold text-primary-foreground text-sm uppercase tracking-wider">
                  {member.dept}
                </h3>
              </div>
              <p className="text-primary-foreground/80 font-opensans text-sm mb-3">
                {member.desc}
              </p>
              <p className="text-primary-foreground/50 font-opensans text-xs">
                {member.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
