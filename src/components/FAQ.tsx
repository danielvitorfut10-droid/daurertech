import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Qual o investimento necessário para um site profissional?",
    a: "O investimento varia de acordo com a complexidade do projeto, número de páginas, funcionalidades e integrações necessárias. Entre em contato para um orçamento personalizado.",
  },
  {
    q: "Quais são os principais tipos de sites que posso desenvolver?",
    a: "Sites institucionais, landing pages, e-commerces, portais, blogs, sistemas web e plataformas integradas a ERPs e CRMs.",
  },
  {
    q: "Quais são os primeiros passos para criação de um site?",
    a: "Iniciamos com uma imersão profunda no negócio do cliente, entendendo objetivos, público, mercado e desafios. A partir disso, criamos layouts para aprovação antes da programação.",
  },
  {
    q: "Qual é a diferença entre um site estático e um site dinâmico?",
    a: "Sites estáticos possuem conteúdo fixo, enquanto sites dinâmicos permitem atualização de conteúdo pelo cliente através de um painel administrativo (CMS).",
  },
  {
    q: "O que são CMS e quais são os mais utilizados?",
    a: "CMS (Content Management System) são plataformas que permitem gerenciar o conteúdo do site. Os mais utilizados são WordPress, Drupal, Magento e Joomla.",
  },
  {
    q: "Por que é importante ter um site responsivo?",
    a: "Um site responsivo se adapta a todos os dispositivos (desktop, tablet, celular), melhorando a experiência do usuário e o posicionamento no Google.",
  },
  {
    q: "Como posso garantir a segurança do meu site?",
    a: "Através de certificados SSL, atualizações regulares, firewalls, backups automáticos e boas práticas de cibersegurança. Somos especialistas em segurança para WordPress.",
  },
  {
    q: "Quanto tempo leva para criar um site?",
    a: "O prazo varia conforme a complexidade. Sites institucionais levam em média 30 a 60 dias. Projetos mais complexos podem levar de 3 a 6 meses.",
  },
  {
    q: "Como posso medir o sucesso do meu site?",
    a: "Através de ferramentas como Google Analytics 4, GTmetrix e Search Console, analisando métricas como tráfego, conversões, tempo de permanência e posicionamento orgânico.",
  },
  {
    q: "O que é uma agência de criação de sites?",
    a: "É uma empresa especializada em planejar, desenvolver e manter websites profissionais, combinando design, tecnologia e estratégia de marketing digital.",
  },
  {
    q: "Por que devo contratar uma agência de criação de sites?",
    a: "Uma agência oferece expertise multidisciplinar, desde UX/UI até SEO e segurança, garantindo um site que gera resultados reais para o seu negócio.",
  },
  {
    q: "Por que a velocidade de carregamento do site é importante para SEO?",
    a: "O Google considera a velocidade como fator de rankeamento. Sites lentos perdem posições e visitantes. Todos nossos sites têm nota A no GTmetrix.",
  },
  {
    q: "Por que escolher uma Agência de Criação de Sites em São Paulo?",
    a: "São Paulo concentra os melhores profissionais e empresas de tecnologia do Brasil, permitindo atendimento presencial e acesso a talentos de alto nível.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <h2 className="font-titillium text-3xl md:text-4xl font-bold text-foreground">
            PERGUNTAS <span className="text-primary">FREQUENTES</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto reveal">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left font-titillium font-semibold text-foreground hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-opensans">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
