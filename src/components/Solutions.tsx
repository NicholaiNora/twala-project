import pageEarOutside from "../assets/solution_pageear_outside.svg";
import pageEarInside from "../assets/solution_pageear_inside.svg";
import arrowTop from "../assets/arrow-topright.svg";
import solutionImg from "../assets/img_solution-1-p-1200.png";
import cityImg from "../assets/img_solution_city.svg";
const Solutions = () => {
  return (
    <section className="relative p-[120px_24px]">
      <div className="z-44 inset-[0%_auto_auto_0%] absolute">
        <img src={pageEarOutside} loading="lazy"></img>
      </div>
      <div className="z-88 inset-[0%_auto_auto_0%] absolute">
        <img src={pageEarInside} loading="lazy"></img>
      </div>
      <div className="z-33 relative max-w-[1140px] mx-auto">
        <div className="gap-y-[60px] flex flex-col">
          <div className="gap-y-[60px] flex flex-col">
            <div className="gap-y-4 flex flex-col p-0">
              <h3 className="tracking-[4px] uppercase font-[Inter] text-xl leading-[140%]">
                Why Twala Sign
              </h3>
              <h2 className="text-black font-[Inter] text-6xl font-semibold leading-[120%]">
                Cross-Industry Solutions
              </h2>
            </div>
          </div>
          <div className="gap-x-[60px] flex justify-between">
            <div className="border-b-4 border-b-[#7a13ce] flex-[1] self-auto">
              <div className="grid grid-rows-[auto_auto_auto_auto_max-content] grid-cols-[1fr] grid-flow-row">
                <a
                  href="https://www.twala.io/human-resources"
                  className="max-w-full flex justify-between py-6 transition-all duration-500 ease-in-out bg-[rgba(122,19,206,0)] text-[rgb(38,38,38)] border-b-[1px] border-b-[#7a13ce] hover:bg-[rgb(122,19,206)] hover:text-white hover:px-6 hover:outline-0"
                >
                  <p className="font-[Inter] text-[32px] leading-[120%]">
                    Human <span className="font-bold">Resources</span>
                  </p>
                  <img src={arrowTop} loading="lazy" />
                </a>
                <a
                  href="https://www.twala.io/financial-and-accounting"
                  className="max-w-full flex justify-between py-6 transition-all duration-500 ease-in-out bg-[rgba(122,19,206,0)] text-[rgb(38,38,38)] border-b-[1px] border-b-[#7a13ce] hover:bg-[rgb(122,19,206)] hover:text-white hover:px-6 hover:outline-0"
                >
                  <p className="font-[Inter] text-[32px] leading-[120%]">
                    Financial & <span className="font-bold">Accounting</span>
                  </p>
                  <img src={arrowTop} loading="lazy" />
                </a>
                <a
                  href="https://www.twala.io/local-government"
                  className="max-w-full flex justify-between py-6 transition-all duration-500 ease-in-out bg-[rgba(122,19,206,0)] text-[rgb(38,38,38)] border-b-[1px] border-b-[#7a13ce] hover:bg-[rgb(122,19,206)] hover:text-white hover:px-6 hover:outline-0"
                >
                  <p className="font-[Inter] text-[32px] leading-[120%]">
                    Local <span className="font-bold">Government</span>
                  </p>
                  <img src={arrowTop} loading="lazy" />
                </a>
                <a
                  href="https://www.twala.io/legal"
                  className="max-w-full flex justify-between py-6 transition-all duration-500 ease-in-out bg-[rgba(122,19,206,0)] text-[rgb(38,38,38)] border-b-[1px] border-b-[#7a13ce] hover:bg-[rgb(122,19,206)] hover:text-white hover:px-6 hover:outline-0"
                >
                  <p className="font-[Inter] text-[32px] leading-[120%]">
                    <span className="font-bold">Legal</span>
                  </p>
                  <img src={arrowTop} loading="lazy" />
                </a>
                <div className="relative h-[100px] min-h-full max-h-full items-start">
                  <img
                    src={solutionImg}
                    loading="lazy"
                    className="w-[64%] transition-all duration-200 absolute inset-[auto_0%_0%_auto] hover:saturate-[200%]"
                    sizes="(max-width: 479px) 55vw, 29vw"
                    // srcSet="../../src/assets/img_solution-1-p-500.png 500w, ../../src/assets/img_solution-1-p-800.png 800w, ../../src/assets/img_solution-1-p-1080.png 1080w, ../../src/assets/img_solution-1-p-1200.png 1200w"
                  ></img>
                </div>
              </div>
            </div>
            <div className="flex-[1] self-auto">
              <div className="grid grid-cols-[1fr] grid-rows-[min-content_min-content_min-content_min-content_auto] h-full auto-cols-[1fr] ">
                <div className="overflow-hidden">
                  <img
                    src={cityImg}
                    loading="lazy"
                    width="487"
                    className="origin-[50%_100%] object-cover object-[50%_100%] w-full transition-all duration-200 hover:scale-[1.1]"
                  ></img>
                </div>
                <a
                  href="https://www.twala.io/education"
                  className="max-w-full flex justify-between py-6 transition-all duration-500 ease-in-out bg-[rgba(122,19,206,0)] text-[rgb(38,38,38)] border-b-[1px] border-b-[#7a13ce] hover:bg-[rgb(122,19,206)] hover:text-white hover:px-6 hover:outline-0"
                >
                  <p className="font-[Inter] text-[32px] leading-[120%]">
                    <span className="font-bold">Education</span>
                  </p>
                  <img src={arrowTop} loading="lazy" />
                </a>
                <a
                  href="https://www.twala.io/real-estate"
                  className="max-w-full flex justify-between py-6 transition-all duration-500 ease-in-out bg-[rgba(122,19,206,0)] text-[rgb(38,38,38)] border-b-[1px] border-b-[#7a13ce] hover:bg-[rgb(122,19,206)] hover:text-white hover:px-6 hover:outline-0"
                >
                  <p className="font-[Inter] text-[32px] leading-[120%]">
                    Real <span className="font-bold">Estate</span>
                  </p>
                  <img src={arrowTop} loading="lazy" />
                </a>
                <a
                  href="https://www.twala.io/sales-procurement"
                  className="max-w-full flex justify-between py-6 transition-all duration-500 ease-in-out bg-[rgba(122,19,206,0)] text-[rgb(38,38,38)] border-b-[1px] border-b-[#7a13ce] hover:bg-[rgb(122,19,206)] hover:text-white hover:px-6 hover:outline-0"
                >
                  <p className="font-[Inter] text-[32px] leading-[120%]">
                    Sales & <span className="font-bold">Procurement</span>
                  </p>
                  <img src={arrowTop} loading="lazy" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="z-22 grid gap-x-14 bg-[#ececfa] grid-cols-[1fr_1fr] grid-rows-[auto] absolute inset-[0%] auto-cols-[1fr]">
        <div></div>
        <div className="bg-white flex">
          <div className="grid flex-[1] grid-rows-[auto] grid-cols-[minmax(96%,50%)_minmax(4%,50%)] auto-cols-[1fr]">
            <div className="bg-[#ececfa]"></div>
            <div className="grid grid-cols-[100%] place-content-stretch w-full h-full auto-cols-[1fr]">
              <div></div>
              <div className="bg-[#f8f8f8] w-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
