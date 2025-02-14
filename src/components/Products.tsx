import pageEar1Outside from "../assets/pageEar-1-outside.svg";
import pageEar1Inside from "../assets/pageEar-1-inside.svg";
import pageEar2Outside from "../assets/pageEar-2-outside.svg";
import pageEar3Outside from "../assets/PageEar-3-outside.svg";
import twalaSign1 from "../assets/twalasign1.png";
import twalaSign2 from "../assets/twalasign2.png";
import twalaId from "../assets/twalaId-logo.svg";

const Products = () => {
  return (
    <section className="relative p-[120px_24px]">
      <div className="z-22 max-w-[1140px] mx-auto relative">
        <div className="flex flex-col relative gap-12">
          <div className="flex gap-x-12">
            <div className="flex flex-[1] h-[680px] relative">
              <img
                src={pageEar1Outside}
                className="max-w-full inline-block absolute z-44 inset-[0%_0%_auto_auto]"
                loading="lazy"
              />
              <img
                src={pageEar1Inside}
                className="max-w-full inline-block z-88 absolute inset-[0%_0%_auto_auto]"
                loading="lazy"
              />
              <div className="z-33 bg-[#b631da] relative gap-10 flex flex-col flex-[1] p-12">
                <div className="bg-white w-[24%] h-[1px]"></div>
                <div className="gap-y-4 flex flex-col flex-[1] justify-items-start max-h-full">
                  <h3 className="text-white font-[Inter] text-[44px] font-light leading-[120%]">
                    Better <span className="font-bold">Signing Experience</span>
                  </h3>
                  <p className="opacity-[.8] font-[Inter] text-base text-white leading-[140%]">
                    {" "}
                    Ditch the paper contracts and documents, and give your
                    customers a seamless and secure esigning experience
                  </p>
                </div>
              </div>
              <div className="z-33 transform hover:scale-104 perspective-origin-[100%_100%] origin-[100%_100%] w-[90%] transition-all duration-200 absolute inset-[auto_0%_0%_auto]">
                <img
                  src={twalaSign1}
                  loading="lazy"
                  sizes="(max-width: 767px) 84vw, (max-width: 991px) 42vw, 41vw"
                  // srcSet="../../src/assets/63352c39330b443454819ba7_img_twalasign1-p-500.png 500w, ../../src/assets/63352c39330b443454819ba7_img_twalasign1-p-800.png 800w, ../../src/assets/63352c39330b443454819ba7_img_twalasign1-p-912.png 912w "
                />
              </div>
            </div>
            <div className="flex flex-[1] h-[680px] relative">
              <img
                src={pageEar2Outside}
                className="max-w-full inline-block absolute z-44 inset-[0%_0%_auto_auto]"
                loading="lazy"
              />
              <img
                src={pageEar1Inside}
                className="max-w-full inline-block z-88 absolute inset-[0%_0%_auto_auto]"
                loading="lazy"
              />
              <div className="z-33 bg-[#7a13ce] relative gap-10 flex flex-col flex-[1] p-12">
                <div className="bg-white w-[24%] h-[1px]"></div>
                <div className="gap-y-4 flex flex-col flex-[1] justify-items-start max-h-full">
                  <h3 className="text-white font-[Inter] text-[44px] font-light leading-[120%]">
                    More Than{" "}
                    <span className="font-bold">Digital Signature</span>
                  </h3>
                  <p className="opacity-[.8] font-[Inter] text-base text-white leading-[140%]">
                    {" "}
                    A full intelligent document management solution with secure
                    forms, signing workflows, cloud storage, document
                    verification, audit trails, AI-powered capabilities, and
                    soon, electronic notary services
                  </p>
                </div>
              </div>
              <div className="z-33 transform hover:scale-104 perspective-origin-[100%_100%] origin-[100%_100%] w-[90%] transition-all duration-200 absolute inset-[auto_0%_0%_auto]">
                <img
                  src={twalaSign2}
                  loading="lazy"
                  sizes="(max-width: 767px) 84vw, (max-width: 991px) 42vw, 41vw"
                  // srcSet="../../src/assets/63355bfb50fff4008d2b6d2b_img_twalasign2-p-500.png 500w, ../../src/assets/63355bfb50fff4008d2b6d2b_img_twalasign2-p-800.png 800w, ../../src/assets/63355bfb50fff4008d2b6d2b_img_twalasign2-p-912.png 912w "
                />
              </div>
            </div>
          </div>
          <div className="flex gap-x-12">
            <div className="flex flex-[1] h-[420px] relative">
              <img
                src={pageEar3Outside}
                loading="lazy"
                className="z-44 absolute inset-[0%_0%_auto_auto]"
              />
              <img
                src={pageEar1Inside}
                className="max-w-full inline-block z-88 absolute inset-[0%_0%_auto_auto]"
                loading="lazy"
              />
              <div className="z-33 bg-[#09dbce] p-12 pb-8 relative gap-y-10 flex flex-col flex-[1]">
                <a
                  href=""
                  target="_blank"
                  className="self-start max-w-full underline"
                >
                  <img src={twalaId} loading="lazy" className="h-8" />
                </a>
                <div className="bg-[#120623] w-[24%] h-[1px]"></div>
                <div className="gap-4 flex flex-col flex-[1] justify-start max-h-full">
                  <h3 className="text-[#120623] font-[Inter] text-[44px] font-light leading-[120%]">
                    The next evolution of{" "}
                    <span className="font-bold">digital trust</span>
                  </h3>
                  <p className="text-[#120623] opacity-[.8] font-[Inter] text-base leading-[140%]">
                    Privacy-focused, consent-driven and seamless digital
                    experience for sharing and using identity information across
                    web 2.0 and web 3.0 ecosystems
                  </p>
                </div>
                <a href="https://www.twala.id/" target="_blank" className="w-max text-white cursor-pointer border-0 rounded-0 p-[16px_24px] font-[Inter] text-lg font-medium leading-[120%] bg-[#120623] hover:bg-[#7a13ce] transition-all duration-200 hover:translate-y-[-4px] hover:shadow-[0_20px_40px_#7a13ce33] hover:outline-0">Learn more about Twala ID</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
