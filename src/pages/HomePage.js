import CtaSection from "../components/CtaSection";
import FooterSection from "../components/FooterSecrion";
import HeroSection from "../components/HeroSection";
import BackgroundPatternHeader from "../assets/bg-pattern-1.svg";
const HomePage = () => {
  return (
    <div className="max-w-[90rem]  relative mx-auto overflow-hidden">
      <header className="px-6 sm:px-8 ">
        <img
          src={BackgroundPatternHeader}
          alt="background pattern"
          className="absolute hidden sm:block -top-12 sm:-right-[4rem]  lg:right-8 md:scale-90 lg:scale-100"
        />
        <HeroSection />
      </header>
      <main className=" sm:px-8">
        <CtaSection />
      </main>
      <footer className="px-6 sm:px-8">
        <FooterSection />
      </footer>
    </div>
  );
};

export default HomePage;
