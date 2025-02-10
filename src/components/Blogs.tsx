import twalaSupreme from "../assets/Twala_Supreme_Court_enotarization-p-800.png";
import dataDriven from "../assets/Why_Data-Driven_Sales.png";
import pageEarOutside from "../assets/blogs_pageear_outside.svg";
import pageEarInside from "../assets/blogs_pageear_inside.svg";

const Blogs = () => {
  return (
    <section className="bg-[#f8f8f8] relative p-[120px_40px]">
      <div className="z-22 max-w-[1140px] mx-auto relative">
        <div className="z-22 gap-y-[60px] flex flex-col relative">
          <div className="w-[60%] p-[120px_48px_48px] gap-y-4 flex flex-col">
            <p className="text-[#fff] tracking-[4px] uppercase font-[Inter] text-xl leading-[140%]">
              Blogs
            </p>
            <h2 className="text-[#fff] font-[Inter] text-[64px] font-semibold leading-[120%]">
              Things we write <br />& publish
            </h2>
          </div>
          <div className="grid grid-cols-[60%_1fr] grid-rows-[auto] gap-4 auto-cols-[auto]">
            <div className="gap-y-12 bg-white flex h-[600px] p-0">
              <div className="w-[294px] min-w-[294px] border-r-[1px] border-r-[#ececfa] flex flex-col self-stretch flex-initial">
                <img
                  src={twalaSupreme}
                  className="opacity-[1] object-cover w-full max-h-full inline-block"
                  loading="lazy"
                  width="164"
                  height="auto"
                  sizes="(max-width: 479px) 93vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, 293px"
                  srcSet="../../src/assets/Twala_Supreme_Court_enotarization-p-500.png 500w, ../../src/assets/Twala_Supreme_Court_enotarization-p-800.png 800w, ../../src/assets/Twala_Supreme_Court_enotarization-p-1080.png 1080w, ../../src/assets/Twala_Supreme_Court_enotarization-p-1600.png 1600w, ../../src/assets/Twala_Supreme_Court_enotarization-p-2000.png 2000w, ../../src/assets/Twala_Supreme_Court_enotarization-p-2240.png 2240w"
                />
                <img
                  src={twalaSupreme}
                  loading="lazy"
                  className="flex-[1] opacity-[1] object-cover w-full max-h-full inline-block"
                  width="164"
                  height="auto"
                  sizes="(max-width: 479px) 93vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, 293px"
                  srcSet="../../src/assets/Twala_Supreme_Court_enotarization-p-500.png 500w, ../../src/assets/Twala_Supreme_Court_enotarization-p-800.png 800w, ../../src/assets/Twala_Supreme_Court_enotarization-p-1080.png 1080w, ../../src/assets/Twala_Supreme_Court_enotarization-p-1600.png 1600w, ../../src/assets/Twala_Supreme_Court_enotarization-p-2000.png 2000w, ../../src/assets/Twala_Supreme_Court_enotarization-p-2240.png 2240w"
                />
              </div>
              <div className="gap-y-4 flex flex-col flex-[1] self-auto p-[48px_32px_24px]">
                <div className="gap-y-6 flex flex-col flex-[1] justify-start">
                  <div className="w-full h-[8px] bg-gradient-to-r from-[#7a13ce] to-[#09dbce]"></div>
                  <h3 className="text-black font-[Inter] text-[32px] font-semibold leading-[120%]">
                    Twala and Philippine Supreme Court Collaborate to Establish
                    Legal Framework for Electronic Notarization
                  </h3>
                  <p className="text-[#262626] flex-[1] font-[Inter] text-base font-normal leading-[140%]">
                    Twala, a blockchain-powered digital identity, and digital
                    signature platform, recently collaborated with the
                    Philippine Supreme Court to provide inputs in their ongoing
                    work to draft rules to allow electronic notarization in the
                    country.
                  </p>
                </div>
                <div className="w-full h-[1px] bg-gradient-to-r from-[#7a13ce] to-[#09dbce]"></div>
                <a
                  href="https://www.twala.io/blogs/twala-and-philippine-supreme-court-collaborate-to-establish-legal-framework-for-electronic-notarization"
                  className="text-white cursor-pointer bg-[#7a13ce] self-start p-[16px_24px] font-[Inter] text-lg font-medium leading-[120%] transition-all duration-200 hover:bg-[#b631da] hover:translate-y-[-4px] hover:shadow-[0_20px_40px_#7a13ce33]"
                >
                  Read more
                </a>
              </div>
            </div>
            <div className="z-22 bg-white flex flex-col h-[600px] p-[0_48px_0_0] transition-all duration-200 relative">
              <div className="w-full h-[400px] overflow-hidden">
                <div className="border-r-[1px] border-r-[#ececfa] border-b-[1px] border-b-[#ececfa] object-cover w-full h-full overflow-hidden">
                  <img
                    src={dataDriven}
                    loading="lazy"
                    className="object-cover w-full h-full"
                    width="140"
                  ></img>
                </div>
              </div>
              <div className="gap-y-6 flex flex-col flex-initial justify-start p-[24px_32px]">
                <h3 className="text-black font-[Inter] text-[28px] font-semibold leading-[120%]">
                  Why Data-Driven Sales Decisions Are a Game Changer for Your
                  Team
                </h3>
                <p className="flex-[1] leading-5">
                  Instinct alone isn’t enough to stay ahead in today’s
                  fast-paced and competitive market. Sales teams need data to
                  guide their strategies, understand customer behavior, and make
                  decisions that lead to consistent results. A data-driven
                  approach not only helps refine sales processes but also
                  ensures that efforts are focused where they matter most.
                </p>
                <div className="w-full h-[1px] bg-gradient-to-r from-[#7a13ce] to-[#09dbce]"></div>
                <a
                  href="https://www.twala.io/blogs/why-data-driven-sales-decisions-are-a-game-changer-for-your-team"
                  className="text-white cursor-pointer bg-[#7a13ce] self-start p-[16px_24px] font-[Inter] text-lg font-medium leading-[120%] transition-all duration-200 hover:bg-[#b631da] hover:translate-y-[-4px] hover:shadow-[0_20px_40px_#7a13ce33]"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="z-11 grid auto-cols-[1fr] grid-rows-[auto] grid-cols-[70%_1fr] absolute inset-[0%] gap-4">
          <div className="bg-[#0000] mb-[10%] relative">
            <img className="z-44 absolute inset-[0%_0%_auto_auto] max-w-full" src={pageEarOutside} loading="lazy" />
            <img className="z-88 absolute inset-[0%_0%_auto_auto] max-w-full" src={pageEarInside} loading="lazy" />
            <div className="z-22 bg-[#a1a1a1] absolute inset-[0%]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
