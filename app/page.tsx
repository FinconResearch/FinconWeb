
import Hero from '@/components/Hero';
import {Footer} from '@/components/layout/Footer';
import { HeroServices } from '@/components/HeroServices';
import ContactPage from '@/components/ContactForm';
import OurValues from '@/components/OurValues';
import WhyUs from '@/components/WhyUs';


export default function App() {
  return (
    <div className="text-white font-space relative min-h-screen">
      <div className="relative z-10">
        <div className="custom-cursor"/>
        <Hero />
        <HeroServices />
        <OurValues/>
        <WhyUs/>
        <ContactPage/>
        <Footer />
      </div>
    </div>
  );
}