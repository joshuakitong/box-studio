import Carousel from "../components/Carousel";
import { Youtube, Music, Facebook, Instagram } from "lucide-react";

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

      <div className="relative w-full max-w-3xl mx-auto rounded-4xl overflow-hidden border border-white p-6 bg-black/80 backdrop-blur-sm">
        <div className="text-center text-white">
          <p className="text-sm sm:text-md md:text-lg lg:text-xl mb-6">
            Check out our featured releases, produced at Box Studio.
          </p>
        </div>

        <div className="mb-6">
          <Carousel items={youtubeLinks} height="304px" />
        </div>

        <div className="mb-6">
          <Carousel items={spotifyLinks} height="152px" />
        </div>

        {/* Social Links Section */}
        <div className="mt-8 w-full text-center">
          <p className="mb-2 text-lg font-medium text-white">
            Find more releases at:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href="https://www.youtube.com/@BOX84"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto p-2 rounded-full border border-white text-white hover:bg-white hover:text-black transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <Youtube size={20} />
              YouTube
            </a>
            <a
              href="https://open.spotify.com/playlist/2AAIvXFYyNZo12DHMJqMi5"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto p-2 rounded-full border border-white text-white hover:bg-white hover:text-black transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <Music size={20} />
              Spotify
            </a>
          </div>

          <p className="mb-2 text-lg font-medium text-white">
            Follow us on social media to stay updated:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.facebook.com/box84official/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto p-2 rounded-full border border-white text-white hover:bg-white hover:text-black transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <Facebook size={20} />
              Facebook
            </a>
            <a
              href="https://www.instagram.com/box84official"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto p-2 rounded-full border border-white text-white hover:bg-white hover:text-black transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <Instagram size={20} />
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
