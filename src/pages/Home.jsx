import ContactSection from '../sections/Contact';
import Hero from '../sections/Hero';
import HomeAboutSection from '../sections/AboutHome';
import HomeServicesSection from '../sections/ServicesHome';
import AnimatedBackground from "../components/AnimatedBackground";

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <Hero />
      <section id="about">
        <HomeAboutSection />
      </section>
      <HomeServicesSection />
      <ContactSection animate="true" />
    </>
  );
}