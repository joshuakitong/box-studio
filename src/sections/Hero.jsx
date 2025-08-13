import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const containerRef = useRef(null);
  const monitorRef = useRef(null);
  const micRef = useRef(null);
  const yellowLeftRef = useRef(null);
  const blackLeftRef = useRef(null);
  const yellowRightRef = useRef(null);
  const blackRightRef = useRef(null);
  const ringsTimeline = useRef(null);

  const boxstudioImgRef = useRef(null);
  const lineBorderRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const mic = micRef.current;
    const yellowLeft = yellowLeftRef.current;
    const blackLeft = blackLeftRef.current;
    const yellowRight = yellowRightRef.current;
    const blackRight = blackRightRef.current;

    ringsTimeline.current = gsap.timeline({ paused: true, repeat: -1, defaults: { ease: "power2.inOut" } });

    ringsTimeline.current.to(
      [yellowLeft, yellowRight],
      {
        scale: 1.025,
        y: -1,
        duration: 0.33,
        yoyo: true,
        repeat: -1,
      },
      0
    );

    ringsTimeline.current.to(
      [blackLeft, blackRight],
      {
        scale: 1.02,
        y: -1.5,
        duration: 0.33,
        yoyo: true,
        repeat: -1,
        delay: 0.067,
      },
      0
    );

    const onHoverIn = () => {
      gsap.to(monitorRef.current, {
        boxShadow: "inset 0 0 64px 12px rgba(255, 255, 255, 0.1)",
        duration: 1,
        ease: "power2.out",
      });
      gsap.to(mic, { 
        y: 42, 
        scale:1.1, 
        duration: 0.7, 
        ease: "power2.out" 
      });
      ringsTimeline.current.play();
    };

    const onHoverOut = () => {
      gsap.to(monitorRef.current, {
        boxShadow: "inset 0 0 0px 0px rgba(0,0,0,0)",
        duration: 1,
        ease: "power2.out",
      });
      gsap.to(mic, { 
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
      ringsTimeline.current.pause();
      gsap.to([yellowLeft, blackLeft, yellowRight, blackRight], {
        scale: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.out",
        onComplete: () => ringsTimeline.current.restart().pause(),
      });
    };

    const container = containerRef.current;
    container.addEventListener("mouseenter", onHoverIn);
    container.addEventListener("mouseleave", onHoverOut);

    const images = [
      boxstudioImgRef.current,
      yellowLeft,
      blackLeft,
      yellowRight,
      blackRight,
      mic,
    ];

    const loadImage = (img) =>
      new Promise((resolve) => {
        if (img && img.complete) {
          resolve();
        } else if (img) {
          img.onload = resolve;
          img.onerror = resolve;
        } else {
          resolve();
        }
      });

    //Start animation only after images are loaded
    Promise.all(images.map(loadImage)).then(() => {
      const loadTimeline = gsap.timeline();

      loadTimeline
        .fromTo(boxstudioImgRef.current,
          { opacity: 0, y: -15, filter: "blur(4px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.7, ease: "power3.out" }
        )
        .fromTo(lineBorderRef.current,
          { opacity: 0, scaleY: 0, filter: "blur(4px)", transformOrigin: "top center" },
          { opacity: 1, scaleY: 1, filter: "blur(0px)", duration: 0.3, ease: "power3.out" }
        )
        .fromTo(textRef.current,
          { opacity: 0, y: 15, filter: "blur(4px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.7, ease: "power3.out" },
          "<"
        )
        .fromTo(buttonRef.current,
          { opacity: 0, y: 15, filter: "blur(4px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.7, ease: "power3.out" }
        );
    });

    return () => {
      container.removeEventListener("mouseenter", onHoverIn);
      container.removeEventListener("mouseleave", onHoverOut);
      ringsTimeline.current.kill();
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen px-4 sm:px-16">
      <div
        ref={containerRef}
        className="relative flex flex-col items-center justify-center min-h-[calc(100vh-12rem)] w-full mx-auto border border-white rounded-4xl bg-center bg-no-repeat bg-cover overflow-hidden"
        style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}hero/background.jpg)`,
        }}
      >
        <div className="pb-12 mt-12 max-w-full flex justify-center w-full">
          <div className="relative flex items-center justify-center max-w-fit">
            {/* Left Speaker */}
            <div className="relative flex justify-center items-center min-w-52 md:min-w-64 lg:min-w-96 z-0 -mr-3 -mt-6 sm:-mt-32 md:-mt-34 lg:-mt-68">
              <img
                src={`${import.meta.env.BASE_URL}hero/speakerbodyl.png`}
                alt="Speaker Body Left"
                className="absolute top-0 left-0 w-full"
              />
              <img
                ref={yellowLeftRef}
                src={`${import.meta.env.BASE_URL}hero/speakeryl.png`}
                alt="Speaker Yellow Ring Left"
                className="absolute top-0 left-0 w-full"
              />
              <img
                ref={blackLeftRef}
                src={`${import.meta.env.BASE_URL}hero/speakerbl.png`}
                alt="Speaker Black Ring Left"
                className="absolute top-0 left-0 w-full"
              />
            </div>

            {/* Monitor */}
            <div className="relative z-10">
              <div className="border border-white rounded-md p-1 pb-6 bg-gradient-to-tl from-[#0b0b0b] via-[#232323] to-[#0b0b0b]">
                <div
                  ref={monitorRef}
                  className="relative overflow-hidden flex flex-col sm:flex-row items-center justify-center border border-white rounded-md bg-gradient-to-tl from-black via-[#131313] to-black
                    w-[12rem] h-[21rem] sm:w-[23rem] sm:h-[14rem] md:w-[34rem] md:h-[19rem] lg:w-[47rem] lg:h-[26rem] 
                    p-1 text-center sm:text-left gap-2 sm:gap-4"
                >
                  <img
                    src={`${import.meta.env.BASE_URL}hero/static.gif`}
                    alt="Static Overlay"
                    className="pointer-events-none absolute inset-0 w-full h-full rounded-md object-cover opacity-1 mix-blend-screen"
                    style={{ zIndex: 5 }}
                  />
                  <img
                    ref={boxstudioImgRef}
                    className="max-w-24 md:max-w-36 lg:max-w-48 max-h-full object-contain"
                    src={`${import.meta.env.BASE_URL}hero/boxstudio.png`}
                    alt="Box Studio"
                  />
                  <div
                    ref={lineBorderRef}
                    className="hidden sm:block border border-white sm:h-16 md:h-24 lg:h-32"
                  ></div>
                  <div>
                    <p
                      ref={textRef}
                      className="mt-4 sm:mt-0 text-white text-xs md:text-lg lg:text-xl"
                    >
                      <span className="font-semibold">
                        Music Production Home Studio
                      </span>
                      <br />
                      <span className="text-gray-300">
                        Based in Baguio City, Philippines
                      </span>
                    </p>
                    <button
                      ref={buttonRef}
                      onClick={() => {
                        const section = document.getElementById("about");
                        if (section) {
                          const yOffset = -96;
                          const y = section.getBoundingClientRect().top + window.scrollY + yOffset;

                          window.scrollTo({ top: y, behavior: "smooth" });
                        }
                      }}
                      className="text-xs md:text-md lg:text-lg mt-2 inline-block border border-white text-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Speaker */}
            <div className="relative flex justify-center items-center min-w-52 md:min-w-64 lg:min-w-96 z-0 -ml-3 -mt-6 sm:-mt-32 md:-mt-34 lg:-mt-68">
              <img
                src={`${import.meta.env.BASE_URL}hero/speakerbodyr.png`}
                alt="Speaker Body Right"
                className="absolute top-0 left-0 w-full"
              />
              <img
                ref={yellowRightRef}
                src={`${import.meta.env.BASE_URL}hero/speakeryr.png`}
                alt="Speaker Yellow Ring Right"
                className="absolute top-0 left-0 w-full"
              />
              <img
                ref={blackRightRef}
                src={`${import.meta.env.BASE_URL}hero/speakerbr.png`}
                alt="Speaker Black Ring Right"
                className="absolute top-0 left-0 w-full"
              />
            </div>
          </div>

          {/* Mic */}
          <img
            ref={micRef}
            src={`${import.meta.env.BASE_URL}hero/mic.png`}
            alt="Microphone"
            className="absolute -bottom-28 sm:-bottom-34 md:-bottom-48 lg:-bottom-58 left-1/2 -translate-x-1/2 min-w-64 w-64 sm:w-86 md:w-106 lg:w-128 z-50"
          />
        </div>
      </div>
    </div>
  );
}
