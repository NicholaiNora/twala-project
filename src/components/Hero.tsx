import twalaImg from "../assets/twala-img.png";
import arrowDown from "../assets/arrow_down.svg";

const Hero = () => {
  return (
    <section
      className="z-20 h-screen bg-[#120623] flex justify-center items-center p-[109px_24px] relative overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(#23013f, #0a0314f2), url(../../src/assets/hero-bg.png)",
        backgroundPosition: "0 0, 50%",
        backgroundSize: "auto, auto",
      }}
    >
      <div className="max-w-[1140px] mx-auto items-center grid grid-cols-[1fr_1fr] gap-12">
        <div className="flex flex-col gap-12">
          <h1 className="w-[90%] text-white font-[Inter] text-7xl leading-[116%] font-bold">
            Secure <br /> & Tamper-proof
            <span className="font-normal"> digital signature</span>
          </h1>
          <div className="w-[16%] h-1 bg-gradient-to-r from-[#7a13ce] to-[#09dbce] "></div>
          <p className="w-[95%] text-white font-[Inter] text-lg font-light leading-[140%]">
            Digitally transform your agreement workflows with a legally binding
            and secure esignature powered by Twala's Hashproof Technology.
          </p>
        </div>
        <div className="flex relative self-stretch gap-6 flex-[1] flex-col">
          <img
            src={twalaImg}
            width="491"
            className="z-50 flex-[1] inline-block mb-auto mt-auto self-center max-w-[90%] transition-all duration-200 inset-[0%_0%_0%_auto] absolute hover:saturate-150"
            sizes="(max-width: 479px) 100vw, (max-width: 767px) 84vw, 41vw"
            // srcSet="../../src/assets/634430e610fb184affe3286f_img_twalaSign-p-500.png 500w, ../../src/assets/634430e610fb184affe3286f_img_twalaSign-p-800.png 800w, ../../src/assets/634430e610fb184affe3286f_img_twalaSign-p-1080.png 1080w, ../../src/assets/634430e610fb184affe3286f_img_twalaSign-1256.png 1256w"
          ></img>
        </div>
        <div className="z-55 text-center flex-[1] flex justify-center self-center pb-12 absolute inset-[auto_0%_0%] scroll-smooth">
          <a
            href="#Feature"
            className="bg-[#3b0568] justify-center items-center p-4 transition-all duration-200 inline-block hover:rounded-[100px] hover:bg-[#b631da] hover:shadow-[0_20px_80px_#7a13ce66] scroll-smooth"
          >
            <img src={arrowDown} loading="lazy" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
