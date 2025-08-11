import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Carousel({ items, height }) {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );

  const next = () =>
    setIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );

  const goToSlide = (i) => setIndex(i);

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col items-center gap-4">
      <div className="relative w-full overflow-hidden rounded-2xl border border-white">
        <iframe
          src={items[index]}
          height={height}
          className="top-0 left-0 w-full"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={prev}
          className="p-2 rounded-full bg-transparent hover:bg-white hover:text-black text-white cursor-pointer transition-colors duration-300"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="flex gap-4">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`w-2 h-2 rounded-full transition-colors duration-300 cursor-pointer ${
                i === index ? "bg-white" : "bg-white/30 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            ></button>
          ))}
        </div>

        <button
          onClick={next}
          className="p-2 rounded-full bg-transparent hover:bg-white hover:text-black text-white cursor-pointer transition-colors duration-300"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
