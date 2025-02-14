import dost from "../assets/dost.svg";
import twalaStep2 from "../assets/twala-step2.svg";
import cloudSignatureConsortium from "../assets/cloud-signature-consortium.png";
const Featured = () => {
  return (
    <div className="bg-[#ececfa] p-[40px_24px] scroll-mt-30" id="Feature">
      <div className="max-w-[1140px] flex flex-col gap-6 items-stretch z-22 relative mx-auto before:content-center after:content-around">
        <div className="flex justify-center items-stretch gap-6">
          <div className="flex relative self-auto flex-[1] flex-col gap-6">
            <div className="z-22 flex relative bg-white gap-6 p-6 items-start flex-[1]">
              <img src={dost} loading="lazy" width="60" />
              <p className="font-[Inter] text-[#262626] text-lg flex-[1] self-start leading-[140%]">
                <span className="text-[#7a13ce] font-bold">Twala</span>
                {"  is supported by the "}
                <span className="text-black font-bold">
                  Department of Science and Technology (DOST)
                </span>{" "}
                through the startup grant fund program.
              </p>
            </div>
            <div className="z-11 p-6 bg-gradient-to-r from-[#7a13ce] via-[#b631da] to-[#09dbce] opacity-[.4] blur-[30px] flex-[1] transition-all duration-200 absolute inset-0"></div>
          </div>
          <div className="flex relative self-auto flex-[1] flex-col gap-6">
            <div className="z-22 flex relative bg-white gap-6 p-6 items-start flex-[1]">
              <img src={twalaStep2} loading="lazy" width="60" />
              <p className="font-[Inter] text-[#262626] text-lg flex-[1] self-start leading-[140%]">
                <span className="text-[#7a13ce] font-bold">Twala</span>
                {" is fully complaint with the "}
                <span className="text-black font-bold">
                  Philippines' Electronic Commerce Act (RA 8792)
                </span>{" "}
                {" and the "}
                <span className="text-black font-bold">
                  Supreme Court's Rules on Electronic Evidence.
                </span>{" "}
                Twala also adheres to all major eSignature laws in many
                jurisdictions <em>(ESIGN, UETA, eIDAS, etc.)</em>.
              </p>
            </div>
            <div className="z-11 p-6 bg-gradient-to-r from-[#7a13ce] via-[#b631da] to-[#09dbce] opacity-[.4] blur-[30px] flex-[1] transition-all duration-200 absolute inset-0"></div>
          </div>
        </div>
        <div className="flex items-stretch justify-center gap-6">
          <div className="flex relative flex-[1] self-auto flex-col gap-12">
            <div className="flex relative self-auto flex-[1] flex-col gap-6">
              <div className="z-22 flex relative bg-white gap-6 p-6 items-start flex-[1]">
                <img
                  src={cloudSignatureConsortium}
                  loading="lazy"
                  width="160"
                />
                <p className="font-[Inter] text-[#262626] text-lg flex-[1] self-start leading-[140%]">
                  <span className="text-[#7a13ce] font-bold">Twala</span>
                  {" is a proud member of "}
                  <span className="text-black font-bold">
                    Cloud Signature Consortium (CSC)
                  </span>
                   to drive esignature adoption and innovate secure
                  authentication solutions.
                </p>
              </div>
              <div className="z-11 mt-6 p-6 bg-gradient-to-r from-[#7a13ce] via-[#b631da] to-[#09dbce] opacity-[.4] blur-[30px] flex-[1] transition-all duration-200 absolute inset-0"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
