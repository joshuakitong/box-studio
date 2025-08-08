import ContactSection from '../components/ContactSection';
import Hero from '../components/HeroSection';
import HomeAboutSection from '../components/HomeAboutSection';
import HomeServicesSection from '../components/HomeServicesSection';

export default function Home() {
  return (
    <>
      <Hero />
      <HomeAboutSection />
      <HomeServicesSection />
      <ContactSection />
    </>
  );
}