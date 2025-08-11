import Carousel from "../components/Carousel";

export default function Releases() {
  const youtubeLinks = [
    "https://www.youtube.com/embed/fsN_uJt1DnQ",
    "https://www.youtube.com/embed/vF6hub6jKl8",
    "https://www.youtube.com/embed/SolmCR-tvpU",
  ];

  const spotifyLinks = [
    "https://open.spotify.com/embed/track/2lupzTKwSvsAFNlMfcgw7F?utm_source=generator",
    "https://open.spotify.com/embed/track/0HvZIrLXMw65ASzzBeNB2o?utm_source=generator",
    "https://open.spotify.com/embed/track/71s8PcYd4L0k8iXT9qpXj4?utm_source=generator",
  ];

  return (
    <div className="flex flex-col justify-center w-full mx-auto px-6 py-12">
      <h2 className="relative z-10 text-2xl sm:text-3xl font-bold text-center mb-6">Releases</h2>
      <div className="relative w-full max-w-3xl mx-auto rounded-4xl overflow-hidden border border-white p-6">
        <div className="text-center text-white">
          <p className="text-sm sm:text-md md:text-lg lg:text-xl mb-6">
            Check out our featured releases produced at Box Studio
          </p>
        </div>

        <div className="mb-6">
          <Carousel items={youtubeLinks} height="304px" />
        </div>

        <div>
          <Carousel items={spotifyLinks} height="152px" />
        </div>
      </div>
    </div>
  );
}
