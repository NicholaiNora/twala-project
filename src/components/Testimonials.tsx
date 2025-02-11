import seohackers from "../assets/SEO_hackers.jpg";
import oliviatech from "../assets/olivia_technology_group.jpg";
import trainingsbeyond from "../assets/trainings_beyond.jpg";
import peculiar from "../assets/peculiar_eyewear.jpg";
import pageEarOutside from "../assets/testimonials_pageear_outside.svg";
import pageEarInside from "../assets/testimonials_pageear_inside.svg";

const Testimonials = () => {
  return (
    <section className="bg-white object-left relative overflow-hidden p-[120px_24px]">
      <div className="z-44 gradient-90deg w-[10%] absolute inset-[0%_0%_0%_auto]"></div>
      <div className="z-22 max-w-[1140px] mx-auto relative">
        <div className="z-22 gap-y-[60px] flex flex-col relative">
          <div className="w-[40%] max-w-[40%] flex flex-col gap-y-4 p-[120px_48px_48px] pb-0 pl-0 flex-initial self-start items-start">
            <p className="text-white tracking-[4px] uppercase font-[Inter] text-xl leading-[140%]">
              Testimonials
            </p>
            <h3 className="text-white font-[Inter] text-[64px] font-semibold leading-[120%]">
              What our customers say
            </h3>
          </div>
          <div className="w-[95rem] max-w-full pb-6 relative overflow-auto">
            <div className="z-33 gap-6 bg-clip-border flex justify-start w-full relative overflow-visible">
              <div className="w-[558px] min-w-[558px] p-12 gap-y-6 background-testimonial flex flex-col flex-nowrap transition-all duration-200 hover:saturate-[200%] hover:shadow-[0_1px_4px_#7a13ce33]">
                <div className="gap-y-6 flex flex-col flex-[1] p-0">
                  <div className="flex-[1]">
                    <p className="text-[#333] mb-0 font-[Inter] text-xl leading-[140%]">
                      Overall I’m very happy and satisfied and I don’t see our
                      team moving to any other signing platform in the far
                      future. It is a necessary part of how we do things now and
                      it’s simple enough to use.
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-[#7a13ce] to-[#09dbce] w-full h-[1px]"></div>
                  <div className="flex gap-y-4">
                    <div className="gap-y-1 flex flex-col flex-[1] self-start">
                      <p className="text-black font-[Inter] text-xl font-bold leading-[120%]">
                        Sean Si
                      </p>
                      <p className="text-[#262626] font-[Inter] text-sm font-light leading-[140%]">
                        CEO & Founder SEO-Hackers
                      </p>
                    </div>
                    <div className="bg-[#a1a1a1] rounded-[100px] self-start">
                      <img
                        src={seohackers}
                        loading="lazy"
                        className="bg-[#a1a1a1] object-cover rounded-[100px] w-12 h-12 overflow-hidden"
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[558px] min-w-[558px] p-12 gap-y-6 background-testimonial flex flex-col flex-nowrap transition-all duration-200 hover:saturate-[200%] hover:shadow-[0_1px_4px_#7a13ce33]">
                <div className="gap-y-6 flex flex-col flex-[1] p-0">
                  <div className="flex-[1]">
                    <p className="text-[#333] mb-0 font-[Inter] text-xl leading-[140%]">
                      Twala makes it easier for me to setup the documents to be
                      signed by my boss. Ever since Twala allows recipients to
                      sign even without setting up a Twala account, I never get
                      shy to request them to sign a document in Twala platform.
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-[#7a13ce] to-[#09dbce] w-full h-[1px]"></div>
                  <div className="flex gap-y-4">
                    <div className="gap-y-1 flex flex-col flex-[1] self-start">
                      <p className="text-black font-[Inter] text-xl font-bold leading-[120%]">
                        Olivia Technology Group, Inc
                      </p>
                      <p className="text-[#262626] font-[Inter] text-sm font-light leading-[140%]">
                        Customer Success Lead
                      </p>
                    </div>
                    <div className="bg-[#a1a1a1] rounded-[100px] self-start">
                      <img
                        src={oliviatech}
                        loading="lazy"
                        className="bg-[#a1a1a1] object-cover rounded-[100px] w-12 h-12 overflow-hidden"
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[558px] min-w-[558px] p-12 gap-y-6 background-testimonial flex flex-col flex-nowrap transition-all duration-200 hover:saturate-[200%] hover:shadow-[0_1px_4px_#7a13ce33]">
                <div className="gap-y-6 flex flex-col flex-[1] p-0">
                  <div className="flex-[1]">
                    <p className="text-[#333] mb-0 font-[Inter] text-xl leading-[140%]">
                      Twala has given our training programs a competitive edge.
                      Our participants are more confident about the credentials
                      that they get from our training programs knowing that
                      their future employees can easily verify it anytime.
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-[#7a13ce] to-[#09dbce] w-full h-[1px]"></div>
                  <div className="flex gap-y-4">
                    <div className="gap-y-1 flex flex-col flex-[1] self-start">
                      <p className="text-black font-[Inter] text-xl font-bold leading-[120%]">
                        Macy Asupan
                      </p>
                      <p className="text-[#262626] font-[Inter] text-sm font-light leading-[140%]">
                        President & COO of Trainings and Beyond
                      </p>
                    </div>
                    <div className="bg-[#a1a1a1] rounded-[100px] self-start">
                      <img
                        src={trainingsbeyond}
                        loading="lazy"
                        className="bg-[#a1a1a1] object-cover rounded-[100px] w-12 h-12 overflow-hidden"
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[558px] min-w-[558px] p-12 gap-y-6 background-testimonial flex flex-col flex-nowrap transition-all duration-200 hover:saturate-[200%] hover:shadow-[0_1px_4px_#7a13ce33]">
                <div className="gap-y-6 flex flex-col flex-[1] p-0">
                  <div className="flex-[1]">
                    <p className="text-[#333] mb-0 font-[Inter] text-xl leading-[140%]">
                      Twala has been extremely helpful in the processing of all
                      our contracts as well as our day-to-day business
                      operations. It has made our high-stakes deals very
                      seamless. Finally, it has given our business documents a
                      more professional appearance.
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-[#7a13ce] to-[#09dbce] w-full h-[1px]"></div>
                  <div className="flex gap-y-4">
                    <div className="gap-y-1 flex flex-col flex-[1] self-start">
                      <p className="text-black font-[Inter] text-xl font-bold leading-[120%]">
                        Isaac Saliendra
                      </p>
                      <p className="text-[#262626] font-[Inter] text-sm font-light leading-[140%]">
                        CEO Peculiar Eyewear
                      </p>
                    </div>
                    <div className="bg-[#a1a1a1] rounded-[100px] self-start">
                      <img
                        src={peculiar}
                        loading="lazy"
                        className="bg-[#a1a1a1] object-cover rounded-[100px] w-12 h-12 overflow-hidden"
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="z-11 gap-6 bg-[#f8f8f8] grid grid-rows-[auto] grid-cols-[1fr_1fr] auto-cols-[1fr] absolute inset-[0%]">
        <div className="bg-[#b631da] mt-[12%] mb-[27%] relative inset-[auto_0%_0%_auto]">
          <img src={pageEarOutside} className="max-w-full z-44 absolute inset-[0%_0%_auto_auto]" loading="lazy"></img>
          <img src={pageEarInside} className="max-w-full z-88 absolute inset-[0%_0%_auto_auto]" loading="lazy"></img>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
