import fileImg from "../assets/file.svg";
import pageEarOutside from "../assets/stats_pageear_outside.svg";
import pageEarInside from "../assets/stats_pageear_inside.svg";
import forestImg from "../assets/img_forest-p-888.png";

const Stats = () => {
  return (
    <section className="bg-[#f8f8f8] relative overflow-hidden p-[120px_40px]">
      <div className="relative z-22 max-w-[1140px] mx-auto">
        <div className="z-22 gap-y-[120px] flex flex-col relative">
          <div className="w-[75%] gap-y-4 flex flex-col p-0">
            <p className="tracking-[4px] uppercase font-[Inter] text-xl leading-[140%]">
              BEHIND THE NUMBERS
            </p>
            <h2 className="text-black font-[Inter] text-6xl font-semibold leading-[120%]">
              Lower your costs, <br />
              save time, & improve customer experience
            </h2>
          </div>

          <div className="grid gap-y-12 grid-cols-[1fr_1fr_1fr_1fr] grid-rows-[auto_auto] auto-cols-[1fr]">
            <div className="gap-y-6 bg-[#0000] flex flex-col p-6 transition-all duration-200">
              <span className="text-black font-[Inter] text-[64px] font-bold leading-[120%]">
                40%
              </span>
              <div className="bg-gradient-to-r from-[#7a13ce] to-[#09dbce] w-full h-[1px]"></div>
              <p className="text-[#262626] font-[Inter] text-base leading-[140%]">
                Savings in time and materials per agreement
              </p>
            </div>
            <div className="gap-y-6 bg-[#0000] flex flex-col p-6 transition-all duration-200">
              <span className="text-black font-[Inter] text-[64px] font-bold leading-[120%]">
                6
              </span>
              <div className="bg-gradient-to-r from-[#7a13ce] to-[#09dbce] w-full h-[1px]"></div>
              <p className="text-[#262626] font-[Inter] text-base leading-[140%]">
                Layers of information <br /> security
              </p>
            </div>
            <div className="gap-y-6 bg-[#0000] flex flex-col p-6 transition-all duration-200">
              <span className="text-black font-[Inter] text-[64px] font-bold leading-[120%]">
                80%
              </span>
              <div className="bg-gradient-to-r from-[#7a13ce] to-[#09dbce] w-full h-[1px]"></div>
              <p className="text-[#262626] font-[Inter] text-base leading-[140%]">
                Faster turnaround <br /> time
              </p>
            </div>
            <div className="h-full"></div>
            <div className="bg-[#ececfa] flex items-center justify-center">
              <img
                src={fileImg}
                loading="lazy"
                className="max-w-full transition-all duration-200 hover:scale-[1.25]"
              ></img>
            </div>
            <div className="gap-y-6 bg-[#0000] flex flex-col p-6 transition-all duration-200">
              <span className="text-black font-[Inter] text-[64px] font-bold leading-[120%]">
                100K+
              </span>
              <div className="bg-gradient-to-r from-[#7a13ce] to-[#09dbce] w-full h-[1px]"></div>
              <p className="text-[#262626] font-[Inter] text-base leading-[140%]">
                Individual users
              </p>
            </div>
            <div className="gap-y-6 bg-[#0000] flex flex-col p-6 transition-all duration-200">
              <span className="text-black font-[Inter] text-[64px] font-bold leading-[120%]">
                300+
              </span>
              <div className="bg-gradient-to-r from-[#7a13ce] to-[#09dbce] w-full h-[1px]"></div>
              <p className="text-[#262626] font-[Inter] text-base leading-[140%]">
                Companies served
              </p>
            </div>
            <div className="z-33 bg-[#09dbce] gap-y-6 relative flex flex-col p-6 transition-all duration-200 hover:shadow-[0_20px_80px_#09dbce99] hover:saturate-[200%]">
              <span className="text-black font-[Inter] text-[64px] font-bold leading-[120%]">
                1
              </span>
              <div className="bg-gradient-to-r from-[#7a13ce] to-[#09dbce] w-full h-[1px]"></div>
              <p className="text-[#262626] font-[Inter] text-base leading-[140%]">
                Tree is saved per 10,000 pages of agreement digitally signed
              </p>
            </div>
          </div>
        </div>
        <div className="z-11 grid-container grid-rows-[auto] auto-cols-[1fr] absolute inset-[0%]">
          <div
            className="justify-self-auto object-cover w-[35rem] max-w-[100ch] h-[90%] absolute inset-[0%_auto_0%_0%]"
            style={{ gridArea: "Area" }}
          >
            <img
              className="z-44 absolute transform-3d inset-[0%_auto_auto_0%]"
              src={pageEarOutside}
              loading="lazy"
            />
            <img
              className="z-88 absolute transform-3d inset-[0%_auto_auto_0%]"
              src={pageEarInside}
              loading="lazy"
            />
            <img
              src={forestImg}
              className="z-22 object-cover w-full min-w-full h-full transition-all duration-200 relative inset-[0%] hover:saturate-[200%]"
              loading="lazy"
              width="560"
              sizes="(max-width: 479px) 93vw, (max-width: 991px) 97vw, 560px"
              // srcSet="../../src/assets/img_forest-p-500.png 500w, ../../src/assets/img_forest-p-800.png 800w, ../../src/assets/img_forest-p-888.png 888w"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
