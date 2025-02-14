import { useState } from "react";
type FaqsItemsProps = {
  question: string;
  answer: string;
  itemNumber: number;
}

const FaqsItems= ({question , answer, itemNumber}: FaqsItemsProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="flex flex-col items-stretch">
      <div
        onClick={handleClick}
        className="border-t-0 border-b-0 p-[64px_0] flex flex-col self-stretch items-end w-full max-w-full cursor-pointer no-underline will-change-[maxHeight,width] hover:outline-0"
      >
        <div className="flex justify-between items-center w-full no-underline transition-all duration-200 hover:bg-[#ececfa33]">
          <div className="no-underline">
            <div className="text-[#a1a1a1] font-[Inter] text-[3rem] no-underline font-normal">
              {`0${itemNumber}`}
            </div>
          </div>
          <div className="flex flex-col justify-start items-start w-[88%]">
            <div className="flex justify-between items-center w-full">
              <span className="text-black tracking-normal font-[Inter] text-2xl font-semibold leading-[140%] transition-all duration-200 hover:text-[#7a13ce]">
                {question}
              </span>
              <div
                className="text-[#7a13ce] flex justify-center items-center w-20 p-[.8rem] transition-all duration-500 ease-[cubic-bezier(.165,.84,.44,1)] hover:saturate-[200%]"
                style={{
                  transform: isExpanded
                    ? "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(45deg) skew(0deg, 0deg)"
                    : "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="absolute transform-none bg-[#2b2b2b] bg-gradient-to-b from-[#7a13ce] to-[#b631da] w-[.3rem] pt-[3rem] outline-0 border-0"></div>
                <div className="bg-[#2b2b2b] bg-gradient-to-b from-[#7a13ce] to-[#b631da] w-[.3rem] pt-[3rem] rotate-90 outline-0 border-0"></div>
              </div>
            </div>
            <div className="opacity-0 text-[#000] hidden overflow-hidden mt-[-.5rem] text-[1.1rem]">
              WE PREPARE FINANCIAL STATEMENTS ON THE FOLLOWING BASIS
            </div>
          </div>
        </div>
        <div
          className={`w-[1140px] ${
            isExpanded ? "max-h-full" : "max-h-0"
          } flex flex-col items-end overflow-hidden transition-all duration-200 ease-initial`}
        >
          <div className="flex flex-col w-[88%] mt-8 transition-all duration-200 hover:border-l-[1px] hover:border-l-[#7a13ce]">
            <p
              className="border-l-[1px] border-[#a1a1a1] text-[#262626] self-start max-w-[80ch] pl-6 text-base leading-[140%] transition-all duration-300 ease-linear"
              style={{
                opacity: isExpanded ? 1 : 0,
                transform: isExpanded
                  ? "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)"
                  : "translate3d(0px, 20%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
            >
              {answer}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#7a13ce] to-[#09dbce] w-full h-[1px]"></div>
    </div>
  );
};

export default FaqsItems;
