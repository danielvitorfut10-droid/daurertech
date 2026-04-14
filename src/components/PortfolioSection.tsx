const projects = [
  { title: "Projeto 01", category: "E-commerce" },
  { title: "Projeto 02", category: "Institucional" },
  { title: "Projeto 03", category: "Landing Page" },
  { title: "Projeto 04", category: "SaaS" },
  { title: "Projeto 05", category: "Blog" },
  { title: "Projeto 06", category: "Portfólio" },
];

const PortfolioSection = () => (
  <section id="portfolio" className="py-24 bg-muted/50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Portfólio</h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Alguns dos nossos trabalhos mais recentes.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div
            key={p.title}
            className="group relative aspect-[4/3] rounded-lg bg-muted overflow-hidden cursor-pointer"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-muted-foreground text-sm">Imagem</span>
            </div>
            <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-primary-foreground">
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <span className="text-sm opacity-80">{p.category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioSection;
