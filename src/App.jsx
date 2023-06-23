import React from "react";
import "tailwindcss/tailwind.css";
import "./styles.css";
import SvgComponentMob from "./components/SvgComponentMobile";
import BothLetters from "./components/BothLetters";
import logoWhite from "./components/logowhite.png";
import MobileBg from "./components/MobileBg.png";

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#151515] text-white">
      <div className="relative flex min-h-screen items-center justify-center">
        {/* show this when on big display */}
        <div className="absolute inset-0 z-0 flex hidden items-center justify-center sm:flex">
          <BothLetters className="h-[85%] w-[85%]" />
        </div>
        {/* show this when on small display  */}
        <div className="absolute inset-0 z-0 flex items-center justify-center sm:hidden">
          <img
            className="-mt-5 h-auto w-full translate-x-36 scale-150 transform"
            src={MobileBg}
            alt="MobileCover"
          />
        </div>
        <img
          src={logoWhite}
          alt="Logo"
          className="absolute left-5 top-4 z-30  w-72 max-w-lg"
        />
        <SvgComponentMob className="absolute z-10 -mt-4 h-auto w-[90%] sm:-mt-10 sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%]" />

        <a
          href="https://storage.googleapis.com/crosslinksnsut/Yearbook_Horizons_2023.pdf"
          download
          className="button mt-56 cursor-pointer font-montserrat font-semibold text-[#EDEDED] sm:mt-72"
        >
          DOWNLOAD
        </a>
      </div>
    </div>
  );
}

export default App;
