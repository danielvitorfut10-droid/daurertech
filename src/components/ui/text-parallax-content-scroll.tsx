import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

export const TextParallaxContentExample = () => {
  return (
    <div id="servicos" className="bg-transparent pt-24 text-foreground">
      <TextParallaxContent
        imgUrl="/imagem1.png"
        subheading="Velocidade"
        heading="Alta Performance"
      >
        <ExampleContent 
            title="Desenvolvimento Rápido e Escalável"
            p1="Nossos sites são otimizados para carregar em frações de segundo. Utilizamos as melhores tecnologias do mercado (como React, Next.js e Tailwind) para garantir a máxima fluidez e uma experiência de usuário inesgotável."
            p2="Chega de sites lentos e engessados. A velocidade é o fator primordial para manter o usuário engajado."
        />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop"
        subheading="Design e UX"
        heading="Experiências Premium"
      >
        <ExampleContent 
            title="Design Deslumbrante e Exclusivo"
            p1="Abandonamos o comum. Cada layout é desenhado de forma exclusiva e inovadora, com foco total na usabilidade (UX) e beleza (UI)."
            p2="O objetivo é encantar seus clientes ao primeiro clique e fazer sua marca transparecer luxo, tecnologia e altíssima qualidade."
        />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
        subheading="Resultados"
        heading="Conversão Extrema"
      >
        <ExampleContent 
            title="Construído para Otimização de Vendas"
            p1="Um site bonito não basta: ele precisa vender. Estruturamos a inteira jornada do usuário voltada para conversão e otimização de SEO para o Google."
            p2="Transforme visitantes em leads, leads em clientes, e clientes em embaixadores da sua marca de forma orgânica e previsível."
        />
      </TextParallaxContent>
    </div>
  );
};

const IMG_PADDING = 12;

interface TextParallaxContentProps {
    imgUrl: string;
    subheading: string;
    heading: string;
    children: React.ReactNode;
}

const TextParallaxContent = ({ imgUrl, subheading, heading, children }: TextParallaxContentProps) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
      className="pb-12"
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }: { imgUrl: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const isPng = imgUrl.endsWith(".png") || imgUrl.endsWith(".webp");

  return (
    <motion.div
      style={{
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
        ...(isPng ? {} : {
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }),
      }}
      ref={targetRef}
      className={`sticky z-0 overflow-hidden rounded-3xl flex items-center justify-center ${isPng ? "bg-transparent" : ""}`}
    >
      {isPng ? (
        <motion.img
          src={imgUrl}
          alt=""
          className="h-full w-auto object-contain select-none pointer-events-none"
          style={{ opacity }}
        />
      ) : (
        <motion.div
          className="absolute inset-0 bg-neutral-950/70"
          style={{ opacity }}
        />
      )}
    </motion.div>
  );
};


const OverlayCopy = ({ subheading, heading }: { subheading: string, heading: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const ExampleContent = ({ title, p1, p2 }: { title: string, p1: string, p2?: string }) => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4 text-foreground">
      {title}
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-muted-foreground md:text-2xl">
        {p1}
      </p>
      {p2 && (
        <p className="mb-8 text-xl text-muted-foreground md:text-2xl">
          {p2}
        </p>
      )}
      <button className="w-full rounded-2xl bg-foreground px-9 py-4 text-xl text-background transition-colors hover:bg-neutral-200 md:w-fit font-medium flex gap-2 items-center justify-center">
        Fale Conosco <FiArrowUpRight />
      </button>
    </div>
  </div>
);
