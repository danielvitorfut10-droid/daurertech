import { ArrowDown } from "lucide-react";

const MobileCTA = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 lg:hidden">
      <a
        href="#contato"
        className="flex items-center justify-center w-14 h-14 bg-[#0a2342] text-white rounded-full shadow-[0_0_15px_rgba(0,0,0,0.5)] border border-white/20 hover:scale-105 transition-transform"
        aria-label="Ir para Contato"
      >
        <ArrowDown size={24} className="stroke-[2.5]" />
      </a>
    </div>
  );
};

export default MobileCTA;
