import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Clients from "@/components/Clients";
import About from "@/components/About";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <Services />
      <Clients />
      <About />
      <Team />
      <FAQ />
      <Contact />
      <Footer />
      <MobileCTA />
    </div>
  );
};

export default Index;
