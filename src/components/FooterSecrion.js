import Logo from ".//..//assets//logo.svg";
import FacebookIcon from ".//..//assets//icon-facebook.svg";
import InstagramIcon from ".//..//assets//icon-instagram.svg";
import TwitterIcon from ".//..//assets//icon-twitter.svg";

const FooterSection = () => {
  return (
    <div className="mt-[30rem] sm:mt-[16rem] mb-20 lg:mt-[12.5rem] grid md:grid-rows-[3.125rem_1fr] md:gap-8 lg:gap-0 lg:grid-cols-[17rem_1fr] items-start">
      <div>
        <img
          src={Logo}
          alt="equalizer logo"
          className="mb-[2rem] sm:mb-[6rem]"
        />
      </div>
      <div className="flex flex-col gap-16 sm:flex-row justify-between items-center">
        <p className="text-[1rem] font-normal">
          All rights reserved © Equalizer 2021
          <br className="hidden sm:block" /> Have any problems? Contact us via
          social media or
          <br className="hidden sm:block" /> email us at
          <br className="sm:hidden font-bold" /> equalizer@example.com
        </p>
        <div className="flex flex-row gap-8 ">
          <img src={FacebookIcon} className="h-5" alt="facebook icon" />
          <img src={InstagramIcon} className="h-5" alt="instagram icon" />
          <img src={TwitterIcon} className="h-5" alt="twitter icon" />
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
