export default function About() {
  return (
    <div className="flex flex-col justify-center w-full px-6 py-12">
      <h2 className="relative z-10 mb-6 text-2xl sm:text-3xl font-bold text-center">About Us</h2>
      <div className="relative w-full max-w-3xl mx-auto rounded-4xl overflow-hidden border border-white">
        <div className="bg-black/84 backdrop-blur-sm text-white px-4 py-6">
          <p className="text-sm sm:text-md md:text-lg lg:text-xl text-center">
            Box Studio is a home-based music production studio in Baguio City, Philippines, operating under BOX84, an independent record label and artist collective established in 2020.
            We work across genres with a primary focus on hip-hop.<br/><br/>

            We offer a full range of services, including beat-making, composition and arrangement, instrument and vocal recording, mixing and mastering, and distribution to major streaming platforms.<br/><br/>
            
            At Box Studio, our mission is to help artists turn their creative ideas into professional, high-quality tracks by combining technical expertise with a genuine passion for music. We regularly collaborate with local and independent artists, supporting projects from concept through release.
          </p>
        </div>
      </div>
    </div>
  );
}