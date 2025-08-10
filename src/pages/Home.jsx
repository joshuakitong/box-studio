import ContactSection from '../sections/Contact';
import Hero from '../sections/Hero';
import HomeAboutSection from '../sections/AboutHome';
import HomeServicesSection from '../sections/ServicesHome';

export default function Home() {
  return (
    <>
      <Hero />
      <section id="about">
        <HomeAboutSection />
      </section>
      <HomeServicesSection />
      <ContactSection />
    </>
  );
}