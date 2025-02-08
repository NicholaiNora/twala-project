import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";
import logo6 from "../assets/logo6.png";
import logo7 from "../assets/logo7.jpg";
import logo8 from "../assets/logo8.png";
import logo9 from "../assets/logo9.png";
import logo10 from "../assets/logo10.png";
import logo11 from "../assets/logo11.png";
import logo12 from "../assets/logo12.png";
import logo13 from "../assets/logo13.png";

const Logos = () => {
  return (
    <section className="bg-white p-[120px_24px] pt-14">
      <div className="z-22 max-w-[1140px] mx-auto relative">
        <div className="flex flex-col my-2.5 py-2.5 gap-x-12 gap-y-6">
          <h3 className="self-center tracking-[4px] uppercase font-[Inter] text-xl leading-[140%]">
            As featured in
          </h3>
          <div className="flex flex-wrap flex-[1] gap-y-10 gap-x-[100px] justify-center items-center mx-5">
            <img
              src={logo1}
              loading="lazy"
              className="h-[35px] hover:scale-[1.2]"
            />
            <img
              src={logo2}
              loading="lazy"
              className="w-auto h-[22px] hover:scale-[1.2]"
            />
            <img
              src={logo3}
              loading="lazy"
              className="h-[48px] pointer-events-auto hover:scale-[1.2]"
            />
            <img
              src={logo4}
              loading="lazy"
              className="w-auto h-[22px] hover:scale-[1.2]"
            />
            <img
              src={logo5}
              loading="lazy"
              className="h-[48px] pointer-events-auto hover:scale-[1.2]"
            />
            <img
              src={logo6}
              loading="lazy"
              className="h-[48px] pointer-events-auto hover:scale-[1.2]"
            />
            <img
              src={logo7}
              loading="lazy"
              className="h-[48px] pointer-events-auto hover:scale-[1.2]"
            />
            <img
              src={logo8}
              loading="lazy"
              className="w-auto h-[22px] hover:scale-[1.2]"
            />
            <img
              src={logo9}
              loading="lazy"
              className="h-[35px] hover:scale-[1.2]"
            />
            <img
              src={logo10}
              loading="lazy"
              className="h-[35px] hover:scale-[1.2]"
            />
            <img
              src={logo11}
              loading="lazy"
              className="h-[35px] hover:scale-[1.2]"
            />
            <img
              src={logo12}
              loading="lazy"
              className="h-[35px] hover:scale-[1.2]"
            />
            <img
              src={logo13}
              loading="lazy"
              className="h-[35px] hover:scale-[1.2]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logos;
