const clients = [
  "Nestlé", "FC Barcelona", "AIG", "GPTW",
  "CCAA", "Espaço Laser", "3DCRiAR", "Barça Academy Pro",
];

const Clients = () => {
  return (
    <section id="clientes" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <p className="text-primary font-titillium text-sm uppercase tracking-[0.3em] font-semibold mb-3">
            Criação de Sites
          </p>
          <h2 className="font-titillium text-3xl md:text-4xl font-bold text-foreground mb-4">
            NOSSO PORTFÓLIO
          </h2>
          <p className="text-muted-foreground font-opensans max-w-2xl mx-auto">
            Mais de 300 projetos de criação de sites entregues. Empresas como Nestlé, Barcelona,
            AIG e GPTW confiam na Daurer para criar sites de alta complexidade.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 reveal">
          {clients.map((client, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-xl p-8 flex items-center justify-center hover:shadow-lg hover:border-primary/30 transition-all duration-300"
            >
              <span className="font-titillium text-lg font-semibold text-foreground/70">
                {client}
              </span>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="mt-16 reveal">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-daurer-navy to-daurer-dark rounded-2xl p-8 md:p-12 text-center">
            <div className="text-5xl text-primary mb-6">"</div>
            <p className="text-primary-foreground/90 font-opensans text-lg italic leading-relaxed mb-6">
              O serviço de criação de sites da Daurer é algo de primeiro mundo. O desenvolvimento do
              site seguiu padrões mundiais de estética e performance (SEO). Executivos do clube
              elogiaram muito o trabalho de criação de sites executado aqui no Brasil.
            </p>
            <div>
              <p className="font-titillium font-bold text-primary-foreground">Fabeka Lebron</p>
              <p className="text-primary-foreground/60 text-sm">CEO - FC BARCELONA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
