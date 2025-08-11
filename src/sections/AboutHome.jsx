export default function AboutHome() {
  return (
    <div className="relative w-full py-16 px-6 sm:px-12 border-y border-white">
      {/* Background image */}
      <img
        src={`${import.meta.env.BASE_URL}about/aboutbackground.jpg`}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover object-left sm:object-center"
      />

      {/* Overlay for border, rounding, and text */}
      <div className="relative w-full max-w-xl mx-auto rounded-4xl overflow-hidden border border-white/30">
        <div className="bg-black/84 backdrop-blur-sm text-white px-4 py-6">
          <p className="text-sm sm:text-md md:text-lg lg:text-xl text-center">
            Box Studio is a music production home studio based in Baguio City, specializing in hip-hop but open to all genres.
            Operating under the independent record label and artist collective BOX84, we provide comprehensive services to help artists bring their creative vision to life.
            From music production and recording to mixing, mastering, and distribution on all major streaming platforms, we’re dedicated to supporting you every step of the way.
          </p>
        </div>
      </div>
    </div>
  );
}
