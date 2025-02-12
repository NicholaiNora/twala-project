import wp from "../assets/partners_wp.png";
import secuna from "../assets/partners_secuna.png";
import nextpay from "../assets/partners_nextpay.png";
import ien from "../assets/partners_ien.png";
import bukoventures from "../assets/partners_buko-ventures.png";
import cci from "../assets/partners_cci-logo.png";
import sprout from "../assets/partners_Sprout-Logo-1-02-1-p-500.png";
import coop from "../assets/partners_coop.png";
import pcieerd from "../assets/partners_Pcieerd_logo.png";
import dost from "../assets/partners_DOST-ASTI-Logo-RGB-p-500.png";
import pldt from "../assets/partners_pldt.png";

const Partners = () => {
  return (
    <section className="pt-[60px] bg-[#f8f8f8] p-[120px_24px]">
      <div className="z-22 max-w-[1140px] mx-auto relative">
        <div className="gap-y-12 flex flex-col flex-[1]">
          <h3 className="text-center tracking-[4px] uppercase font-[Inter] text-xl leading-[140%]">
            Our Partners
          </h3>
          <div className="gap-x-[100px] gap-y-10 flex flex-wrap justify-center mx-5">
            <img
              className="pointer-events-auto max-w-full border-0 h-12 self-center align-middle transition-all duration-200 hover:scale-[1.2]"
              src={wp}
              loading="lazy"
            ></img>
            <img
              className="pointer-events-auto max-w-full border-0 h-12 self-center align-middle transition-all duration-200 hover:scale-[1.2]"
              src={secuna}
              loading="lazy"
            ></img>
            <img
              className="pointer-events-auto max-w-full border-0 h-[35px] self-center align-middle transition-all duration-200 hover:scale-[1.2]"
              src={nextpay}
              loading="lazy"
            ></img>
            <img
              className="pointer-events-auto max-w-full border-0 h-12 self-center align-middle transition-all duration-200 hover:scale-[1.2]"
              src={ien}
              loading="lazy"
            ></img>
            <img
              className="pointer-events-auto max-w-full border-0 h-12 self-center align-middle transition-all duration-200 hover:scale-[1.2]"
              src={bukoventures}
              loading="lazy"
            ></img>
            <img
              className="pointer-events-auto max-w-full border-0 h-12 self-center align-middle transition-all duration-200 hover:scale-[1.2]"
              src={cci}
              loading="lazy"
            ></img>
            <img
              className="pointer-events-auto max-w-full border-0 h-12 self-center align-middle transition-all duration-200 hover:scale-[1.2]"
              src={sprout}
              loading="lazy"
              sizes="(max-width: 479px) 66vw, 103.3125px"
              srcSet="../../src/assets/partners_Sprout-Logo-1-02-1-p-500.png 500w, ../../src/assets/partners_Sprout-Logo-1-02-1-p-800.png 800w, ../../src/assets/partners_Sprout-Logo-1-02-1-p-1080.png 1080w, ../../src/assets/partners_Sprout-Logo-1-02-1-p-1600.png 1600w, ../../src/assets/partners_Sprout-Logo-1-02-1-p-1920.png 1920w"
            ></img>
            <img
              className="pointer-events-auto max-w-full border-0 h-12 self-center align-middle transition-all duration-200 hover:scale-[1.2]"
              src={coop}
              loading="lazy"
            ></img>
            <img
              className="pointer-events-auto max-w-full border-0 h-12 self-center align-middle transition-all duration-200 hover:scale-[1.2]"
              src={pcieerd}
              loading="lazy"
            ></img>
            <img
              className="pointer-events-auto max-w-full border-0 h-12 self-center align-middle transition-all duration-200 hover:scale-[1.2]"
              src={dost}
              loading="lazy"
              sizes="(max-width: 479px) 40vw, 48px"
              srcSet="../../src/assets/partners_DOST-ASTI-Logo-RGB-p-500.png 500w, ../../src/assets/partners_DOST-ASTI-Logo-RGB-p-800.png 800w, ../../src/assets/partners_DOST-ASTI-Logo-RGB-p-900.png 900w"
            ></img>
            <img
              className="pointer-events-auto max-w-full border-0 h-[35px] self-center align-middle transition-all duration-200 hover:scale-[1.2]"
              src={pldt}
              loading="lazy"
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
