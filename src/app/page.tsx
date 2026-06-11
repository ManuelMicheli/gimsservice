import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Acronym from "@/components/sections/Acronym";
import Manifesto from "@/components/sections/Manifesto";
import Services from "@/components/sections/Services";
import Partners from "@/components/sections/Partners";
import FeaturedWork from "@/components/sections/FeaturedWork";
import Testimonials from "@/components/sections/Testimonials";
import Method from "@/components/sections/Method";
import ServiceArea from "@/components/sections/ServiceArea";
import FaqTeaser from "@/components/sections/FaqTeaser";

// Home GIMS Service — ordine sezioni identico a White Maple.
export default function Home() {
  return (
    <>
      <Header />
      <Acronym />
      <main>
        <Hero />
        <Manifesto />
        <Services />
        <div className="cv"><Partners /></div>
        <FeaturedWork />
        <div className="cv"><Testimonials /></div>
        <div className="cv"><Method /></div>
        <div className="cv"><ServiceArea /></div>
        <div className="cv"><FaqTeaser /></div>
      </main>
      <div className="cv"><Footer /></div>
    </>
  );
}
