const projects = [
  { title: "Projeto 01", category: "E-commerce" },
  { title: "Projeto 02", category: "Institucional" },
  { title: "Projeto 03", category: "Landing Page" },
  { title: "Projeto 04", category: "SaaS" },
  { title: "Projeto 05", category: "Blog" },
  { title: "Projeto 06", category: "Portfólio" },
];

const PortfolioSection = () => (
  <section id="portfolio" className="py-24 relative z-10">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Portfólio</h2>
        <p className="text-white/60 max-w-lg mx-auto">
          Alguns dos nossos trabalhos mais recentes.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div
            key={p.title}
            className="group relative aspect-[4/3] rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden cursor-pointer transition-all hover:border-purple-400/50 hover:bg-white/10"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white/30 text-sm">Imagem</span>
            </div>
            <div className="absolute inset-0 bg-purple-900/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white backdrop-blur-sm">
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
