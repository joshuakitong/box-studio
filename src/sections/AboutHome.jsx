import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function AboutHome() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const paraRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const title = titleRef.current;
    const para = paraRef.current;

    gsap.set(container, { opacity: 0, filter: "blur(4px)" });
    gsap.set(title, { opacity: 0, y: 10, filter: "blur(4px)" });
    gsap.set(para, { opacity: 0, y: 10, filter: "blur(4px)" });

    let hasAnimated = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;

          const timeline = gsap.timeline();

          timeline.to(container, { opacity: 1, filter: "blur(0px)", duration: 1, ease: "power2.out" })
            .to(title, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.7, ease: "power2.out" })
            .to(para, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.7, ease: "power2.out" });

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
      className="relative w-full py-12 px-6 sm:px-12 border-y border-white bg-cover bg-no-repeat bg-left sm:bg-center"
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}about/aboutbackground.jpg)`,
        zIndex: 0
      }}
    >
      <h2
        ref={titleRef}
        className="relative z-10 mb-6 text-2xl sm:text-3xl font-bold text-center"
      >
        About Us
      </h2>

      <div
        ref={paraRef}
        className="relative w-full max-w-xl mx-auto rounded-4xl overflow-hidden border border-white z-10 bg-black/80 backdrop-blur-sm text-white px-4 py-6"
      >
        <p className="text-xs sm:text-sm md:text-md lg:text-lg text-center">
          Box Studio is a music production home studio based in Baguio City, specializing in hip-hop but open to all genres.
          Operating under the independent record label and artist collective BOX84, we provide comprehensive services to help artists bring their creative vision to life.
          From music production and recording to mixing, mastering, and distribution on all major streaming platforms, we’re dedicated to supporting you every step of the way.
        </p>
      </div>
    </div>
  );
}
