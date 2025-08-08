import ContactSection from '../sections/Contact';
import Hero from '../sections/Hero';
import HomeAboutSection from '../sections/AboutHome';
import HomeServicesSection from '../sections/ServicesHome';

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