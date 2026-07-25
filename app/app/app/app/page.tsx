import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Languages from "@/components/Languages";
import About from "@/components/About";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import WhyUs from "@/components/WhyUs";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Languages />
      <About />
      <Process />
      <Pricing />
      <WhyUs />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}

