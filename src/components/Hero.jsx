export default function Hero() {
  return (
    <>
      <div className="relative flex items-center justify-center w-full">
        {/* Left Speaker */}
        <div className="relative flex justify-center items-center min-w-40 sm:min-w-52 md:min-w-64 lg:min-w-96 z-0 -mt-24 md:-mt-36 lg:-mt-72">
          <img
            src={`${import.meta.env.BASE_URL}hero/speakerbodyl.png`}
            alt="Speaker Body Left"
            className="absolute top-0 left-0 w-full"
          />
          <img
            src={`${import.meta.env.BASE_URL}hero/speakeryl.png`}
            alt="Speaker Yellow Ring Left"
            className="absolute top-0 left-0 w-full"
          />
          <img
            src={`${import.meta.env.BASE_URL}hero/speakerbl.png`}
            alt="Speaker Black Ring Left"
            className="absolute top-0 left-0 w-full"
          />
        </div>

        {/* Monitor */}
        <div className="relative z-10">
          <div className="border border-white rounded-md p-2 pb-6 bg-gradient-to-tl from-[#0a0a0a] via-[#232323] to-[#0a0a0a]">
            <div className="border border-white rounded-md bg-black w-[12rem] h-[21rem] sm:w-[23rem] sm:h-[13rem] md:w-[34rem] md:h-[19rem] lg:w-[45rem] lg:h-[25rem] flex items-center justify-center">
              <img
                className="max-w-24 md:max-w-36 lg:max-w-48 max-h-full object-contain"
                src={`${import.meta.env.BASE_URL}box84studio.png`}
                alt="BOX84 Studio"
              />
            </div>
          </div>
        </div>

        {/* Right Speaker */}
        <div className="relative flex justify-center items-center min-w-40 sm:min-w-52 md:min-w-64 lg:min-w-96 z-0 -mt-24 md:-mt-36 lg:-mt-72">
          <img
            src={`${import.meta.env.BASE_URL}hero/speakerbodyr.png`}
            alt="Speaker Body Right"
            className="absolute top-0 left-0 w-full"
          />
          <img
            src={`${import.meta.env.BASE_URL}hero/speakeryr.png`}
            alt="Speaker Yellow Ring Right"
            className="absolute top-0 left-0 w-full"
          />
          <img
            src={`${import.meta.env.BASE_URL}hero/speakerbr.png`}
            alt="Speaker Black Ring Right"
            className="absolute top-0 left-0 w-full"
          />
        </div>
      </div>

      {/* Mic */}
      <img
        src={`${import.meta.env.BASE_URL}hero/mic.png`}
        alt="Microphone"
        className="absolute -bottom-32 sm:-bottom-43 md:-bottom-53 lg:-bottom-64 left-1/2 -translate-x-1/2 w-64 sm:w-86 md:w-106 lg:w-128 z-50"
      />
    </>
  );
}
