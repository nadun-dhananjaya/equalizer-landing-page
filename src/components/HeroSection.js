import Logo from "..//assets//logo.svg";

const HeroSection = () => {
  return (
    <div className="relative">
      <div className="h-[6rem] flex items-center ">
        <img src={Logo} alt="equalizer logo" />
      </div>
      <div className="mt-[6rem] ">
        <h1 className="font-IBM-plex-sans  sm:mr-[15.5rem] md:mr-[20rem]  lg:mr-[21rem] text-[2.5rem] sm:text-[4rem] md:text-[4rem] lg:text-[5rem] xl:text-[5.5rem] leading-[3rem] sm:leading-[88px] -tracking-[0.455px] sm:-tracking-[1px] font-bold text-midnight-charcoal">
          We make your <br className="block sm:hidden" /> music
          <br className="hidden xl:block" /> sound extraordinary.
        </h1>
        <p className="text-midnight-charcoal  sm:mr-[9rem] md:mr-[12rem]   mt-[2.5rem] text-[1rem] md:text-[1.125rem] lg:text-[1.25rem] font-normal leading-[34px]">
          A system audio equalizer specifically designed for Android and iOS.
          Freely tune the way your
          <br className="hidden xl:block" /> music sounds with a professional
          grade parametric EQ & volume mixer. Control bass, mids,
          <br className="hidden xl:block" /> treble, gain control, reverb, and
          more!
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
