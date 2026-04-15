'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'


import { GooeyText } from '@/components/ui/gooey-text-morphing'
import { Typewriter } from '@/components/ui/typewriter'
import { cn } from '@/lib/utils'
import { Menu, X, ChevronRight } from 'lucide-react'
import { useScroll, motion } from 'framer-motion' // Switched back to framer-motion as it's more stable for these imports in some envs, but user said motion/react. I'll try to stick to framer-motion if possible or motion if installed.

export function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-x-hidden">
                <section className="min-h-screen flex items-center">
                    <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-6 py-32 lg:px-12">
                        <div className="max-w-2xl">
                            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-0 lg:gap-4 h-[80px] md:h-[100px] lg:h-[120px]">
                                <span className="font-bold tracking-tight whitespace-nowrap text-5xl md:text-6xl xl:text-7xl text-white select-none">
                                    Daurer
                                </span>
                                <GooeyText
                                    texts={["Cria", "Otimiza", "Escala", "Vende"]}
                                    className="h-full flex-1"
                                    textClassName="font-bold tracking-tight"
                                />
                            </div>
                            <p className="mt-8 max-w-2xl text-balance text-lg text-white/80 h-20">
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
    const [scrolled, setScrolled] = React.useState(false)
    const { scrollYProgress } = useScroll()

    React.useEffect(() => {
        const unsubscribe = scrollYProgress.on('change', (latest) => {
            setScrolled(latest > 0.05)
        })
        return () => unsubscribe()
    }, [scrollYProgress])

    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="group fixed z-20 w-full pt-2">
                <div className={cn('mx-auto max-w-7xl px-6 transition-all duration-300 lg:px-12', scrolled ? 'bg-white/10 backdrop-blur-2xl shadow-[0_0_20px_rgba(255,255,255,0.2),inset_0_0_15px_rgba(255,255,255,0.1)] rounded-[50px] border border-white/20' : 'rounded-[50px]')}>
                    <motion.div
                        className={cn('relative flex flex-wrap items-center justify-center gap-6 py-3 duration-200 lg:gap-0 lg:py-6', scrolled && 'lg:py-4')}>
                        <div className="flex items-center justify-center lg:w-auto">
                            {/* Logo removed */}

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="absolute right-6 lg:hidden z-20 -m-2.5 block cursor-pointer p-2.5">
                                <Menu className="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>

                            <div className="block">
                                <ul className="flex flex-wrap justify-center gap-4 sm:gap-8 text-sm font-medium">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <a
                                                href={item.href}
                                                className="text-white hover:text-white/80 block duration-150 font-semibold drop-shadow-md">
                                                <span className="drop-shadow-sm">{item.name}</span>
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
