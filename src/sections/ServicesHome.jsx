import { Music, MicVocal, AudioWaveform, ListMusic } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Services() {
  const navigate = useNavigate();

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

  return (
    <div
      className="relative w-full bg-cover bg-center bg-no-repeat border-b"
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}services/servicesbackground.jpg)`,
      }}
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-12 pb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-white">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
