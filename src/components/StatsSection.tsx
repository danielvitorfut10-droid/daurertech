const stats = [
  { value: "150+", label: "Projetos Entregues" },
  { value: "80+", label: "Clientes Satisfeitos" },
  { value: "5+", label: "Anos de Experiência" },
  { value: "99%", label: "Taxa de Satisfação" },
];

const StatsSection = () => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center space-y-2 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <p className="text-4xl md:text-5xl font-bold text-purple-300">{s.value}</p>
            <p className="text-sm text-white/60">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
