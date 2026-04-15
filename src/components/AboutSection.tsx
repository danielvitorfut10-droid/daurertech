const AboutSection = () => (
  <section id="sobre" className="py-24">
    <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
      <div className="aspect-square rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center">
        <span className="text-white/40 text-sm">Imagem Sobre</span>
      </div>
      <div className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Sobre Nós</h2>
        <p className="text-white/70 leading-relaxed">
          Somos uma agência especializada em criar experiências digitais que geram resultados.
          Com anos de experiência no mercado, nossa equipe combina design, tecnologia e estratégia
          para entregar projetos que superam expectativas.
        </p>
        <p className="text-white/70 leading-relaxed">
          Acreditamos que cada projeto é único e merece uma solução personalizada.
          Do planejamento à entrega, trabalhamos lado a lado com nossos clientes.
        </p>
      </div>
    </div>
  </section>
);

export default AboutSection;
