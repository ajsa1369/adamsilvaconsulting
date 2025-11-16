import CTA from "@/components/CTA";
import Categories from "./sections/Categories";
import Portfolio from "./sections/Portfolio";
import ServicesHero from "./sections/ServicesHero";
import ServicesCTA from "./sections/ServicesCTA";

export default function Services() {
  return <main className="mb-20">

    <ServicesHero />
    <Portfolio/>
    <Categories/>
    <ServicesCTA/>
     </main>
}