export default function AboutHome() {
  return (
    <div className="relative w-full py-12 px-6 sm:px-12 border-y border-white">
      <h2 className="relative z-10 mb-6 text-2xl sm:text-3xl font-bold text-center">About Us</h2>
      <img
        src={`${import.meta.env.BASE_URL}about/aboutbackground.jpg`}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover object-left sm:object-center"
      />

      <div className="relative w-full max-w-xl mx-auto rounded-4xl overflow-hidden border border-white">
        <div className="bg-black/80 backdrop-blur-sm text-white px-4 py-6">
          <p className="text-xs sm:text-sm md:text-md lg:text-lg text-center">
            Box Studio is a music production home studio based in Baguio City, specializing in hip-hop but open to all genres.
            Operating under the independent record label and artist collective BOX84, we provide comprehensive services to help artists bring their creative vision to life.
            From music production and recording to mixing, mastering, and distribution on all major streaming platforms, we’re dedicated to supporting you every step of the way.
          </p>
        </div>
      </div>
    </div>
  );
}
