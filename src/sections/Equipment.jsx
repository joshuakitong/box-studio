export default function Equipment() {
  return (
    <div className="flex flex-col justify-center w-full px-6 py-12">
      <div className="relative z-10 max-w-full mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 text-white">
          Equipment
        </h2>
        <p className="text-center text-xs sm:text-sm md:text-md lg:text-lg text-white mb-6">
          We have multiple home studios with different equipment in each. Here’s the core setup of our main studio.
        </p>

        <div className="flex flex-col max-w-xl mx-auto items-center text-center bg-black/80 backdrop-blur-sm border border-white rounded-3xl p-6 hover:scale-102 transition-all duration-300">
          <p className="text-gray-300 text-xs sm:text-sm md:text-md lg:text-lg">
            <strong>Microphone:</strong> Audio-Technica AT2035<br />
            <strong>Headphones:</strong> Audio-Technica ATH-M50x<br />
            <strong>Speakers:</strong> 2× KRK Rokit 5<br />
            <strong>Audio Interface:</strong> Behringer UMC202HD<br />
            <strong>Instruments:</strong> Full band instruments available upon request
          </p>
        </div>
      </div>
    </div>
  );
}
