import FaqsItems from "./FaqsItems";
import { faqs } from "../assets/faqs";
import pageEarInside from "../assets/faqs_pageear_inside.svg";
import pageEarOutside from "../assets/faqs_pageear_outside.svg";
const Faqs = () => {
  return (
    <section className="relative bg-white p-[120px_24px]">
      <div className="z-22 max-w-[1140px] mx-auto relative">
        <div className="gap-y-[60px] flex flex-col">
          <div className="w-[75%] gap-y-4 flex flex-col p-0">
            <span className="tracking-[4px] uppercase font-[Inter] text-xl leading-[140%]">
              FAQ
            </span>
            <h2 className="text-black font-[Inter] text-6xl font-semibold leading-[120%]">
              Want to know more?
            </h2>
          </div>
          <div>
            {faqs.map((faq, index) => (
              <FaqsItems
                key={index} // Added key prop for list items
                question={faq.question}
                answer={faq.answer}
                itemNumber={index + 1}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="z-44 absolute inset-[0%_0%_auto_auto]">
        <img src={pageEarOutside} loading="lazy"></img>
      </div>
      <div className="z-88 absolute inset-[0%_0%_auto_auto]">
        <img src={pageEarInside} loading="lazy"></img>
      </div>
    </section>
  );
};

export default Faqs;
