import { MapPin } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal space-y-6">
            <p className="text-primary font-titillium text-sm uppercase tracking-[0.3em] font-semibold">
              Agência de Criação de Sites em SP
            </p>
            <h2 className="font-titillium text-3xl md:text-4xl font-bold text-foreground">
              POR QUE NÓS SOMOS A MELHOR AGÊNCIA DE CRIAÇÃO DE SITES?
            </h2>
            <p className="text-muted-foreground font-opensans leading-relaxed">
              Basta olhar as empresas que nos contrataram, os exemplos de sites desenvolvidos e o
              currículo de nossos especialistas. Nossa agência cumpre prazos, conhece cyber-segurança
              e garante um menor risco para o cliente e seu projeto.
            </p>
            <p className="text-muted-foreground font-opensans leading-relaxed">
              Há mais de 20 anos de atuação, nossa agência coleciona um histórico sólido de entregas
              e parcerias com diversos tipos de empresas e setores. Cada projeto nasce de uma análise
              que considera o mercado, o público que você quer atingir e as metas que sua empresa
              precisa alcançar.
            </p>
            <a
              href="#contato"
              className="inline-block bg-primary hover:bg-daurer-light-blue text-primary-foreground px-8 py-3 rounded-full font-semibold uppercase tracking-wider transition-colors"
            >
              Peça um orçamento
            </a>
          </div>

          <div className="reveal space-y-6">
            <div className="glass bg-gradient-to-br from-daurer-navy to-daurer-dark rounded-2xl p-8 space-y-6">
              <h3 className="font-titillium text-xl font-bold text-primary-foreground">
                Nossa Engenharia de Software
              </h3>
              <p className="text-primary-foreground/70 font-opensans text-sm leading-relaxed">
                Cada linha de código, cada arquitetura e cada funcionalidade recebe atenção
                estratégica, pensada para trazer confiabilidade, escalabilidade e eficiência.
                Trabalhamos com diferentes linguagens e tecnologias, escolhendo sempre o que melhor
                se adapta às metas do projeto.
              </p>
              <div className="space-y-4 pt-4 border-t border-primary-foreground/10">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-daurer-cyan mt-0.5 shrink-0" />
                  <div>
                    <p className="text-primary-foreground font-semibold text-sm">Unidade Alphaville – Barueri</p>
                    <p className="text-primary-foreground/60 text-xs">
                      Al. Rio Negro, 500 – conj. 215/216 Alphaville – Barueri – SP
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-daurer-cyan mt-0.5 shrink-0" />
                  <div>
                    <p className="text-primary-foreground font-semibold text-sm">Unidade São Paulo – Itaim Bibi</p>
                    <p className="text-primary-foreground/60 text-xs">
                      Av. Eng. Luís Carlos Berrini, 1748 Itaim Bibi – São Paulo – SP
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
