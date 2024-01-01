import HomePage from "./pages/HomePage";
import BackgroundDesktop from ".//assets//bg-main-desktop.png";
import BackgroundTablet from ".//assets//bg-main-tablet.png";
import BackgroundMobile from ".//assets//bg-main-mobile.png";

function App() {
  return (
    <>
      <img
        alt="background color grading shade"
        src={BackgroundDesktop}
        className="fixed hidden md:block top-0 -left-32 scale-150"
      />
      <img
        alt="background color grading shade"
        src={BackgroundTablet}
        className="fixed sm:block hidden lg:hidden  scale-150 -top-16 -left-[13rem]"
      />
      <img
        alt="background color grading shade"
        src={BackgroundMobile}
        className="fixed block md:hidden -top-28 -right-28 scale-150"
      />
      <HomePage />
    </>
  );
}

export default App;
