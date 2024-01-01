import CtaBackgroundPattern from ".//..//assets//bg-pattern-2.svg";
import mobile from ".//..//assets/illustration-app.png";
import AppleIcon from ".//..//assets//icon-apple.svg";
import AndroidIcon from ".//..//assets//icon-android.svg";

const CtaSection = () => {
  return (
    <div className="bg-midnight-charcoal rounded-[0.75rem] pb-20 mt-[21rem] relative">
      <div className="overflow-hidden">
        <img
          alt="background pattern"
          src={CtaBackgroundPattern}
          className="-translate-y-[3rem]  mx-auto"
        />
      </div>
      <img
        src={mobile}
        alt="equlizer mobile app"
        className="absolute -top-56 sm:bottom-28 h-full sm:h-[120%] left-1/2 sm:left-[30%] lg:left-[33%] -translate-x-1/2"
      />
      <div className=" sm:max-w-[23rem] w-full  absolute -bottom-[27rem]  sm:-bottom-[11rem] lg:-bottom-[7.1rem] p-[3.08rem] rounded-[0.75rem] sm:right-[33%] sm:translate-x-1/2 bg-sunset-blaze">
        <h2 className="text-winter-whisper text-[2rem] font-IBM-plex-sans font-bold leading-[2.5rem]">
          Premium EQ
        </h2>
        <p className="text-winter-whisper mt-3">
          Get expert-level control with a robust equalizer, volume mixer, and
          spatial audio. Take your listening experience to a whole new level and
          access all our incredible features!
        </p>
        <div className="mt-9 flex items-center gap-4">
          <span className="text-winter-whisper text-[4rem] font-bold">$4</span>
          <span className="text-winter-whisper leading-[2rem] text-[1.25rem]">
            / month
          </span>
        </div>
        <button
          className="flex items-center justify-center gap-2 mt-8
         bg-midnight-charcoal w-full py-4 text-winter-whisper font-bold leading-8 text-[1.125rem] rounded-[0.75rem]"
        >
          <img src={AppleIcon} alt="apple logo icon" />
          iOS Download
        </button>
        <button
          className="flex items-center justify-center gap-2 mt-8
         bg-winter-whisper w-full py-4 text-midnight-charcoal font-bold leading-8 text-[1.125rem] rounded-[0.75rem]"
        >
          <img src={AndroidIcon} alt="andorid icon" />
          iOS Download
        </button>
      </div>
    </div>
  );
};

export default CtaSection;
