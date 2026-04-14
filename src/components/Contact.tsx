import { useState } from "react";
import { Send } from "lucide-react";

const serviceOptions = ["website", "seo", "digital", "design"];
const budgetOptions = [
  "de R$ 20 mil a R$ 50 mil / mês",
  "de R$ 50 mil a R$ 100 mil / mês",
  "acima de R$ 100 mil / mês",
];

const Contact = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState("");

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

  return (
    <section id="contato" className="py-24 bg-gradient-to-br from-daurer-navy to-daurer-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[60px]">
          <path d="M0,60 C400,120 800,0 1200,60 L1200,120 L0,120 Z" fill="hsl(210,40%,96.1%)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 pt-8">
        <div className="text-center mb-12 reveal">
          <h2 className="font-titillium text-3xl md:text-4xl font-bold text-primary-foreground">
            COMO PODEMOS AJUDAR?
          </h2>
          <p className="text-primary-foreground/60 font-opensans mt-3">
            POR FAVOR SELECIONE OS SERVIÇOS DE SEU INTERESSE:
          </p>
        </div>

        <div className="max-w-4xl mx-auto reveal">
          {/* Service tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {serviceOptions.map((service) => (
              <button
                key={service}
                onClick={() => toggleService(service)}
                className={`px-6 py-2.5 rounded-full font-titillium text-sm uppercase tracking-wider transition-all ${
                  selectedServices.includes(service)
                    ? "bg-primary text-primary-foreground"
                    : "glass text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary/20"
                }`}
              >
                {service}
              </button>
            ))}
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="grid md:grid-cols-2 gap-6"
          >
            <input
              type="text"
              placeholder="Nome *"
              className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/40 font-opensans focus:outline-none focus:border-primary"
            />
            <input
              type="email"
              placeholder="E-mail *"
              className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/40 font-opensans focus:outline-none focus:border-primary"
            />
            <input
              type="tel"
              placeholder="Whatsapp"
              className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/40 font-opensans focus:outline-none focus:border-primary"
            />
            <input
              type="url"
              placeholder="Site da empresa *"
              className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/40 font-opensans focus:outline-none focus:border-primary"
            />
            <textarea
              placeholder="Mensagem"
              rows={4}
              className="md:col-span-2 bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/40 font-opensans focus:outline-none focus:border-primary resize-none"
            />

            {/* Budget */}
            <div className="md:col-span-2">
              <p className="text-primary-foreground/60 font-opensans text-sm mb-3 uppercase">
                Por favor indique sua <strong className="text-primary-foreground">verba mensal de marketing:</strong>
              </p>
              <div className="flex flex-wrap gap-3">
                {budgetOptions.map((budget) => (
                  <button
                    key={budget}
                    type="button"
                    onClick={() => setSelectedBudget(budget)}
                    className={`px-5 py-2 rounded-full text-sm font-opensans transition-all ${
                      selectedBudget === budget
                        ? "bg-primary text-primary-foreground"
                        : "glass text-primary-foreground/60 hover:text-primary-foreground"
                    }`}
                  >
                    {budget}
                  </button>
                ))}
              </div>
            </div>

            <div className="md:col-span-2 flex flex-col sm:flex-row items-center gap-4 pt-4">
              <button
                type="submit"
                className="bg-primary hover:bg-daurer-light-blue text-primary-foreground px-10 py-4 rounded-full font-semibold uppercase tracking-wider transition-colors flex items-center gap-2"
              >
                <Send className="w-4 h-4" /> Enviar
              </button>
              <p className="text-primary-foreground/40 font-opensans text-sm">
                Se preferir envie um email para{" "}
                <a href="mailto:contato@daurer.com" className="text-daurer-cyan hover:underline">
                  contato@daurer.com
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
