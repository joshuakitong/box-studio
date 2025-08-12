import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Music, MicVocal, AudioWaveform, ListMusic } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Services() {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  const services = [
    {
      title: "Music Production",
      description: "Turn your ideas into fully produced tracks.",
      icon: Music,
    },
    {
      title: "Recording",
      description: "Record your vocals and instruments.",
      icon: MicVocal,
    },
    {
      title: "Mix and Master",
      description: "Polish your tracks for release-ready quality.",
      icon: AudioWaveform,
    },
    {
      title: "Music Publishing",
      description: "Release your music on all major platforms.",
      icon: ListMusic,
    },
  ];

  useEffect(() => {
    const container = containerRef.current;
    const title = titleRef.current;
    const cards = cardsRef.current;

    gsap.set(container, { opacity: 0, filter: "blur(4px)" });
    gsap.set(title, { opacity: 0, y: 10, filter: "blur(4px)" });
    gsap.set(cards, { opacity: 0, y: 10, filter: "blur(4px)" });

    let hasAnimated = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;

          const timeline = gsap.timeline();

          timeline.to(container, { opacity: 1, filter: "blur(0px)", duration: 1, ease: "power2.out" })
            .to(title, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.7, ease: "power2.out" })
            .to(cards, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.7, ease: "power2.out" });

          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-cover bg-center bg-no-repeat border-b"
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}services/servicesbackground.jpg)`,
      }}
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-12 pb-12">
        <h2
          ref={titleRef}
          className="text-2xl sm:text-3xl font-bold text-center mb-6 text-white"
        >
          Our Services
        </h2>
        <div ref={cardsRef} className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {services.map(({ title, description, icon: Icon }, idx) => (
            <div
              onClick={() => navigate("/services")}
              key={idx}
              className="group flex flex-col items-center justify-center gap-4 p-4 bg-black/80 backdrop-blur-sm text-white rounded-4xl border border-white
                         hover:bg-white hover:text-black transition-all duration-300 cursor-pointer shadow-md hover:shadow-xl min-h-40"
            >
              <Icon
                size={42}
                className="group-hover:hidden transition-all duration-300"
              />
              <p className="text-sm sm:text-md md:text-lg lg:text-xl text-center font-semibold group-hover:hidden">
                {title}
              </p>
              <p className="text-xs sm:text-sm md:text-md lg:text-lg text-center opacity-0 group-hover:opacity-100 group-hover:block hidden transition-opacity duration-300">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
