'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'


import { GooeyText } from '@/components/ui/gooey-text-morphing'
import { Typewriter } from '@/components/ui/typewriter'
import { AnimatedText } from '@/components/ui/animated-underline-text-one'
import { cn } from '@/lib/utils'
import { Menu, X, ChevronRight } from 'lucide-react'
import { useScroll, motion } from 'framer-motion'

export function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-x-hidden">
                <section className="min-h-screen flex items-center">
                    <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-6 py-32 lg:px-12">
                        <div className="max-w-2xl">
                            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-0 lg:gap-6 h-[80px] md:h-[100px] lg:h-[120px]">
                                <AnimatedText
                                    text="Daurer"
                                    textClassName="tracking-tight whitespace-nowrap text-5xl md:text-6xl xl:text-7xl"
                                    underlineClassName="text-purple-400"
                                    underlineDuration={1.2}
                                />
                                <GooeyText
                                    texts={["Cria", "Otimiza", "Escala", "Vende"]}
                                    className="h-full flex-1"
                                    textClassName="font-bold tracking-tight"
                                />
                            </div>
                            <p className="mt-8 max-w-2xl text-balance text-lg lg:text-xl font-medium text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] min-h-[5rem]">
                                <Typewriter
                                    text="Criamos experiências digitais premium. Sites de alta conversão, rápidos e com design exclusivo para posicionar sua marca no topo do mercado."
                                    speed={30}
                                    loop={false}
                                    cursorChar="|"
                                />
                            </p>

                            <div className="mt-12 flex flex-col items-start gap-2 sm:flex-row">
                                <Button
                                    size="lg"
                                    className="h-12 rounded-full pl-5 pr-3 text-base bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white">
                                    <a href="#link" className="flex items-center">
                                        <span className="text-nowrap">Solicitar Orçamento</span>
                                        <ChevronRight className="ml-1 h-4 w-4" />
                                    </a>
                                </Button>
                                <Button
                                    size="lg"
                                    variant="ghost"
                                    className="h-12 rounded-full px-5 text-base text-white hover:bg-white/10">
                                    <a href="#link">
                                        <span className="text-nowrap">Ver Portfólio</span>
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="pb-2">
                    <div className="group relative m-auto max-w-7xl px-6">
                        <div className="flex flex-col items-center md:flex-row">
                            <div className="md:max-w-44 md:border-r md:pr-6">
                                <p className="text-end text-sm text-muted-foreground whitespace-nowrap">Tecnologias de alta performance</p>
                            </div>
                            <div className="relative py-6 md:w-[calc(100%-11rem)]">
                                <InfiniteSlider
                                    speedOnHover={20}
                                    speed={40}
                                    gap={112}>
                                    <div className="flex">
                                        <img
                                            className="mx-auto h-6 w-fit dark:invert opacity-70"
                                            src="https://cdn.simpleicons.org/react/000000"
                                            alt="React Logo"
                                            height="24"
                                            width="auto"
                                        />
                                    </div>
                                    <div className="flex">
                                        <img
                                            className="mx-auto h-6 w-fit dark:invert opacity-70"
                                            src="https://cdn.simpleicons.org/tailwindcss/000000"
                                            alt="Tailwind CSS Logo"
                                            height="24"
                                            width="auto"
                                        />
                                    </div>
                                    <div className="flex">
                                        <img
                                            className="mx-auto h-6 w-fit dark:invert opacity-70"
                                            src="https://cdn.simpleicons.org/nextdotjs/000000"
                                            alt="Next.js Logo"
                                            height="24"
                                            width="auto"
                                        />
                                    </div>
                                    <div className="flex">
                                        <img
                                            className="mx-auto h-6 w-fit dark:invert opacity-70"
                                            src="https://cdn.simpleicons.org/vercel/000000"
                                            alt="Vercel Logo"
                                            height="24"
                                            width="auto"
                                        />
                                    </div>
                                    <div className="flex">
                                        <img
                                            className="mx-auto h-6 w-fit dark:invert opacity-70"
                                            src="https://cdn.simpleicons.org/typescript/000000"
                                            alt="TypeScript Logo"
                                            height="24"
                                            width="auto"
                                        />
                                    </div>
                                    <div className="flex">
                                        <img
                                            className="mx-auto h-6 w-fit dark:invert opacity-70"
                                            src="https://cdn.simpleicons.org/nodedotjs/000000"
                                            alt="Node.js Logo"
                                            height="24"
                                            width="auto"
                                        />
                                    </div>
                                    <div className="flex">
                                        <img
                                            className="mx-auto h-6 w-fit dark:invert opacity-70"
                                            src="https://cdn.simpleicons.org/figma/000000"
                                            alt="Figma Logo"
                                            height="24"
                                            width="auto"
                                        />
                                    </div>
                                    <div className="flex">
                                        <img
                                            className="mx-auto h-6 w-fit dark:invert opacity-70"
                                            src="https://cdn.simpleicons.org/framer/000000"
                                            alt="Framer Logo"
                                            height="24"
                                            width="auto"
                                        />
                                    </div>
                                </InfiniteSlider>

                                <div className="bg-gradient-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                                <div className="bg-gradient-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                                <ProgressiveBlur
                                    className="pointer-events-none absolute left-0 top-0 h-full w-20"
                                    direction="left"
                                    blurIntensity={1}
                                />
                                <ProgressiveBlur
                                    className="pointer-events-none absolute right-0 top-0 h-full w-20"
                                    direction="right"
                                    blurIntensity={1}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

const menuItems = [
    { name: 'Serviços', href: '#servicos' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Contato', href: '#contato' },
]

const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4">
            <nav
                data-state={menuState && 'active'}
                className="group relative max-w-full"
            >
                <div className="mx-auto w-fit rounded-full bg-white/10 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.1),inset_0_0_15px_rgba(255,255,255,0.2)] border border-white/20 px-8 sm:px-12 py-3 transition-all duration-300">
                    <motion.div className="flex items-center justify-center">
                        <div className="flex items-center justify-center">
                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="absolute right-4 lg:hidden z-20 block cursor-pointer p-2">
                                <Menu className="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 size-6 text-white duration-200" />
                                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 text-white -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>

                            <div className="block">
                                <ul className="flex flex-wrap justify-center gap-6 sm:gap-10 text-base md:text-lg font-bold tracking-wide">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <a
                                                href={item.href}
                                                className="text-white hover:text-white/80 block duration-150 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                                                <span>{item.name}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </nav>
        </header>
    )
}
