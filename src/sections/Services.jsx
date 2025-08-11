export default function Services() {
  const services = [
    {
      title: "Music Production",
      subtitle: "Turn your ideas into fully produced tracks.",
      description:
        "From beat-making and composition to arrangement and creative direction, we’ll help bring your vision to life."
    },
    {
      title: "Recording",
      subtitle: "Record your vocals and instruments.",
      description:
        "Get crisp, professional-quality recordings in our studio, with guidance to capture your best takes and performance."
    },
    {
      title: "Mix & Master",
      subtitle: "Polish your tracks for release-ready quality.",
      description:
        "We’ll mix your instrumentals and vocals for balance and clarity, then master them so they sound great on any platform."
    },
    {
      title: "Music Publishing",
      subtitle: "Release your music on all major platforms.",
      description:
        "We’ll distribute your music under Ditto Music, with BOX84 as your publisher, ensuring your music reaches a global audience."
    }
  ];

  return (
    <div className="flex flex-col justify-center w-full px-6 pt-12">
      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 text-white">
          Our Services
        </h2>
        <p className="text-center text-xs sm:text-sm md:text-md lg:text-lg text-white mb-6">
          We are flexible on our rates. Connect with us to learn more.
        </p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2">
          {services.map((service, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center bg-black/80 backdrop-blur-sm border border-white rounded-3xl p-3 hover:scale-102 transition-all duration-300"
            >
              <h3 className="text-sm sm:text-md md:text-lg lg:text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-white text-xs sm:text-sm md:text-md lg:text-lg mb-2">{service.subtitle}</p>
              <p className="text-gray-300 text-xs sm:text-sm md:text-md lg:text-lg">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
