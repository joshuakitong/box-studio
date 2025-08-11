import AboutSection from "../sections/About";
import ReleasesSection from "../sections/Releases";

export default function About() {
  return (
    <div
      className="min-h-screen flex flex-col w-full pt-12 bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}about/aboutpagebackground.jpg)`,
      }}
    >
      <AboutSection />
      <ReleasesSection />
    </div>
  );
}
