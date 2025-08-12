import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function AnimatedBackground() {
  const bgRef = useRef();

  useLayoutEffect(() => {
    if (!bgRef.current) return;

    gsap.to(bgRef.current, {
      backgroundPosition: "80px 80px",
      duration: 30,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });
  }, []);

  return (
    <div
      ref={bgRef}
      className="fixed inset-0 -z-10"
      style={{
        backgroundColor: "#0b0b0b",
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.025) 2px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.025) 2px, transparent 1px)
        `,
        backgroundSize: "80px 80px",
        backgroundPosition: "40px 40px",
      }}
    />
  );
}
