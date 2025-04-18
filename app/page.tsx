
import Hero from '@/components/Hero';
import {Footer} from '@/components/layout/Footer';
import { HeroServices } from '@/components/HeroServices';
import  Salary  from '@/components/Salary';


export default function App() {
  return (
    <div className="text-white font-space relative min-h-screen">
      <div className="relative z-10">
        <div className="custom-cursor"/>
        <Hero />
        <HeroServices />
        <Salary/>
        <Footer />
      </div>
    </div>
  );
}