import ContactSection from "../sections/Contact";
import AnimatedBackground from "../components/AnimatedBackground";

export default function Contact() {
  return (
    <>
      <AnimatedBackground />
      <div className="min-h-screen flex flex-col w-full pt-12">
        <ContactSection />
      </div>
    </>
  ); 
}