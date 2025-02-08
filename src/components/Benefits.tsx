import benefit1 from "../assets/benefit1.svg";
import benefit2 from "../assets/benefit2.svg";
import benefit3 from "../assets/benefit3.svg";
import benefit4 from "../assets/benefit4.svg";

const Benefits = () => {
  return (
    <section className="p-[120px_24px]">
      <div className="z-22 max-w-[1140px] mx-auto relative">
        <div className="gap-y-[60px] flex flex-col">
          <div className="flex gap-x-6">
            <div className="flex-[1]">
              <h3 className="tracking-[4px] uppercase font-[Inter] text-xl leading-[140%">
                Why Twala Sign
              </h3>
            </div>
            <div className="flex-[1]">
              <p className="pb-8 font-[Inter] text-[32px] font-normal leading-[124%]">
                Next-generation esignature platform powered by blockchain smart
                contracts.
              </p>
            </div>
          </div>
          <div className="gap-x-6 gap-y-4 grid grid-rows-[auto] grid-cols-[1fr_1fr_1fr_1fr] auto-cols-[1fr]">
            <div className="z-22 border-[#ececfa] border-[1px] border-solid pb-12 relative gap-y-10 flex flex-col p-6 transition-all duration-200 hover:z-33 hover:border-white hover:shadow-[0_40px_80px_#7a13ce66]">
              <img src={benefit1} width="64" loading="lazy"></img>
              <div className="w-full h-[1px] bg-gradient-to-r from-[#7a13ce] to-[#09dbce]"></div>
              <div className="gap-y-4 flex flex-col">
                <h3 className="text-[#7a13ce] font-[Inter] text-2xl leading-[124%]">
                  Value for time and
                  <br />
                  <span className="font-bold">money</span>
                </h3>
                <p className="text-black font-[Inter] text-base leading-[140%]">
                  Sign contracts in hours, not days or weeks - your business
                  saves time and money.
                </p>
              </div>
            </div>
            <div className="z-22 border-[#ececfa] border-[1px] border-solid pb-12 relative gap-y-10 flex flex-col p-6 transition-all duration-200 hover:z-33 hover:border-white hover:shadow-[0_40px_80px_#7a13ce66]">
              <img src={benefit2} width="64" loading="lazy"></img>
              <div className="w-full h-[1px] bg-gradient-to-r from-[#7a13ce] to-[#09dbce]"></div>
              <div className="gap-y-4 flex flex-col">
                <h3 className="text-[#b631da] font-[Inter] text-2xl leading-[124%]">
                  Better user
                  <br />
                  <span className="font-bold">experience</span>
                </h3>
                <p className="text-black font-[Inter] text-base leading-[140%]">
                  Simple and easy document signing whether at home or in the
                  office.
                </p>
              </div>
            </div>
            <div className="z-22 border-[#ececfa] border-[1px] border-solid pb-12 relative gap-y-10 flex flex-col p-6 transition-all duration-200 hover:z-33 hover:border-white hover:shadow-[0_40px_80px_#7a13ce66]">
              <img src={benefit3} width="64" loading="lazy"></img>
              <div className="w-full h-[1px] bg-gradient-to-r from-[#7a13ce] to-[#09dbce]"></div>
              <div className="gap-y-4 flex flex-col">
                <h3 className="text-[#7a13ce] font-[Inter] text-2xl leading-[124%]">
                  Legal and <span className="font-bold">court admissible</span>
                </h3>
                <p className="text-black font-[Inter] text-base leading-[140%]">
                  Compliant with the Philippines’ E-Commerce Act and other
                  esignature laws globally.
                </p>
              </div>
            </div>
            <div className="z-22 border-[#ececfa] border-[1px] border-solid pb-12 relative gap-y-10 flex flex-col p-6 transition-all duration-200 hover:z-33 hover:border-white hover:shadow-[0_40px_80px_#7a13ce66]">
              <img src={benefit4} width="64" loading="lazy"></img>
              <div className="w-full h-[1px] bg-gradient-to-r from-[#7a13ce] to-[#09dbce]"></div>
              <div className="gap-y-4 flex flex-col">
                <h3 className="text-[#b631da] font-[Inter] text-2xl leading-[124%]">
                  Secure and
                  <br />
                  <span className="font-bold">reliable</span>
                </h3>
                <p className="text-black font-[Inter] text-base leading-[140%]">
                  Identity verification + blockchain technology for ultimate
                  security and privacy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
