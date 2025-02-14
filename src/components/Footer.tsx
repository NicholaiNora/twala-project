import logo from "../assets/footer_twala_logo.svg";
import email from "../assets/ic_email.svg";
import pin from "../assets/ic_pin.svg";
import facebook from "../assets/ic_facebook.svg";
import twitter from "../assets/ic_twitter.svg";
import linkedin from "../assets/ic_linkedin.svg";
import youtube from "../assets/ic_youtube.svg";
import badge from "../assets/NPC Badge.png";

const Footer = () => {
  return (
    <footer className="background-footer p-[120px_24px_60px]">
      <div className="z-22 max-w-[1140px] mx-auto relative">
        <div className="gap-y-[120px] flex flex-col">
          <div className="gap-x-6 flex">
            <div className="gap-x-6 flex-[1] flex">
              <div className="w-[80px]">
                <img src={logo} className="w-[80px] h-[80px]"></img>
              </div>
              <div className="self-center flex-[1]">
                <div className="bg-gradient-to-r from-[#7a13ce] to-[#09dbce] w-full h-[1px]"></div>
              </div>
            </div>
            <div className="self-center flex-[1]">
              <p className="text-white font-[Inter] text-base leading-[140%]">
                Digitally transform your workflows with next-gen esignature
              </p>
            </div>
          </div>
          <div className="gap-x-6 flex">
            <div className="gap-y-6 flex flex-col flex-[1]">
              <div className="gap-x-4 items-center flex">
                <img
                  src={email}
                  loading="lazy"
                  className="w-8 h-8 transition-all duration-200 hover:scale-[1.2]"
                />
                <a
                  href="mailto:info@twala.io"
                  className="text-[#ececfa] font-[Inter] text-base leading-[140%] no-underline transition-all duration-200 hover:text-[#09dbce]"
                >
                  info@twala.io
                </a>
              </div>
              <div className="mb-8 gap-x-4 flex">
                <img
                  src={pin}
                  loading="lazy"
                  className="w-8 h-8 transition-all duration-200 hover:scale-[1.2]"
                />
                <p className="text-white font-[Inter] text-base leading-[140%]">
                  12th floor The Trade and Financial Tower <br />
                  32nd St. Cor. 7th Avenue <br />
                  Bonifacio Global City, Taguig, <br />
                  Philippines 1634
                </p>
              </div>
              <div className="gap-x-4 mb-6 flex">
                <a
                  href="https://www.facebook.com/twalaio"
                  target="_blank"
                  rel="noreferrer noopener nofollow"
                  className="no-underline bg-[#0000] max-w-full"
                >
                  <img
                    src={facebook}
                    loading="lazy"
                    className="w-10 h-8 transition-all duration-200 hover:scale-[1.2]"
                  />
                </a>
                <a
                  href="https://www.facebook.com/twalaio"
                  target="_blank"
                  rel="noreferrer noopener nofollow"
                  className="no-underline bg-[#0000] max-w-full"
                >
                  <img
                    src={twitter}
                    loading="lazy"
                    className="w-10 h-8 transition-all duration-200 hover:scale-[1.2]"
                  />
                </a>
                <a
                  href="https://www.facebook.com/twalaio"
                  target="_blank"
                  rel="noreferrer noopener nofollow"
                  className="no-underline bg-[#0000] max-w-full"
                >
                  <img
                    src={linkedin}
                    loading="lazy"
                    className="w-10 h-8 transition-all duration-200 hover:scale-[1.2]"
                  />
                </a>
                <a
                  href="https://www.facebook.com/twalaio"
                  target="_blank"
                  rel="noreferrer noopener nofollow"
                  className="no-underline bg-[#0000] max-w-full"
                >
                  <img
                    src={youtube}
                    loading="lazy"
                    className="w-10 h-8 transition-all duration-200 hover:scale-[1.2]"
                  />
                </a>
              </div>
              <div>
                <a
                  href="https://www.twala.io/privacy-policy#npc-registration"
                  className="no-underline bg-[#0000]"
                >
                  <img
                    src={badge}
                    width="299"
                    height="auto"
                    loading="lazy"
                  ></img>
                </a>
              </div>
            </div>
            <div className="flex flex-[1]">
              <div className="flex-[1]">
                <p className="text-[#a1a1a1] tracking-[2px] uppercase mb-6 font-[Inter] text-xs">
                  Links
                </p>
                <ul className="text-[#333] font-[Inter] pl-0 list-none mt-0 mb-2.5 text-sm leading-5">
                  <li className="mb-3 font-[Inter] list-item list-none">
                    <a
                      href="https://sign.twala.io"
                      target="_blank"
                      className="text-white font-[Inter] text-base leading-[140%] no-underline transition-all duration-200 hover:text-[#09dbce] hover:outline-0 hover:rotate-0"
                    >
                      Sign up
                    </a>
                  </li>
                  <li className="mb-3 font-[Inter] list-item list-none">
                    <a
                      href="https://www.twala.io/solutions"
                      className="text-white font-[Inter] text-base leading-[140%] no-underline transition-all duration-200 hover:text-[#09dbce] hover:outline-0 hover:rotate-0"
                    >
                      Solutions
                    </a>
                  </li>
                  <li className="mb-3 font-[Inter] list-item list-none">
                    <a
                      href="https://www.twala.io/pricing"
                      className="text-white font-[Inter] text-base leading-[140%] no-underline transition-all duration-200 hover:text-[#09dbce] hover:outline-0 hover:rotate-0"
                    >
                      Pricing
                    </a>
                  </li>
                  <li className="mb-3 font-[Inter] list-item list-none">
                    <a
                      href="https://www.twala.io/features"
                      className="text-white font-[Inter] text-base leading-[140%] no-underline transition-all duration-200 hover:text-[#09dbce] hover:outline-0 hover:rotate-0"
                    >
                      Features
                    </a>
                  </li>
                  <li className="mb-3 font-[Inter] list-item list-none">
                    <a
                      href="https://www.twala.io/contact-us"
                      target="_blank"
                      className="text-white font-[Inter] text-base leading-[140%] no-underline transition-all duration-200 hover:text-[#09dbce] hover:outline-0 hover:rotate-0"
                    >
                      Contact
                    </a>
                  </li>
                  <li className="mb-3 font-[Inter] list-item list-none">
                    <a
                      href="https://sign.twala.io/verify/public"
                      target="_blank"
                      className="text-white font-[Inter] text-base leading-[140%] no-underline transition-all duration-200 hover:text-[#09dbce] hover:outline-0 hover:rotate-0"
                    >
                      Verify Document
                    </a>
                  </li>
                  <li className="mb-3 font-[Inter] list-item list-none">
                    <a
                      href="http://www.twalasign.io/legal-white-paper"
                      target="_blank"
                      className="text-white font-[Inter] text-base leading-[140%] no-underline transition-all duration-200 hover:text-[#09dbce] hover:outline-0 hover:rotate-0"
                    >
                      Legal White Paper
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex-[1]">
                <p className="text-[#a1a1a1] tracking-[2px] uppercase mb-6 font-[Inter] text-xs">
                  Help
                </p>
                <ul className="text-[#333] font-[Inter] pl-0 list-none mt-0 mb-2.5 text-sm leading-5">
                  <li className="mb-3 font-[Inter] list-item list-none">
                    <a
                      href="https://www.twala.io/faqs"
                      className="text-white font-[Inter] text-base leading-[140%] no-underline transition-all duration-200 hover:text-[#09dbce] hover:outline-0 hover:rotate-0"
                    >
                      FAQS
                    </a>
                  </li>
                  <li className="mb-3 font-[Inter] list-item list-none">
                    <a
                      href="https://intercom.help/twala/en"
                      target="_blank"
                      rel="noreferrer noopener nofollow"
                      className="text-white font-[Inter] text-base leading-[140%] no-underline transition-all duration-200 hover:text-[#09dbce] hover:outline-0 hover:rotate-0"
                    >
                      Help Center
                    </a>
                  </li>
                  <li className="mb-3 font-[Inter] list-item list-none">
                    <a
                      href="https://www.twala.io/trust-center"
                      className="text-white font-[Inter] text-base leading-[140%] no-underline transition-all duration-200 hover:text-[#09dbce] hover:outline-0 hover:rotate-0"
                    >
                      Trust Center
                    </a>
                  </li>
                  <li className="mb-3 font-[Inter] list-item list-none">
                    <a
                      href="https://www.twala.io/blogs"
                      className="text-white font-[Inter] text-base leading-[140%] no-underline transition-all duration-200 hover:text-[#09dbce] hover:outline-0 hover:rotate-0"
                    >
                      Blog
                    </a>
                  </li>
                  <li className="mb-3 font-[Inter] list-item list-none">
                    <a
                      href="https://www.twala.io/hashproof-tech"
                      className="text-white font-[Inter] text-base leading-[140%] no-underline transition-all duration-200 hover:text-[#09dbce] hover:outline-0 hover:rotate-0"
                    >
                      Hashproof Technology
                    </a>
                  </li>
                  <li className="mb-3 font-[Inter] list-item list-none">
                    <a
                      href="https://developers.twala.io/docs"
                      target="_blank"
                      rel="noreferrer noopener nofollow"
                      className="text-white font-[Inter] text-base leading-[140%] no-underline transition-all duration-200 hover:text-[#09dbce] hover:outline-0 hover:rotate-0"
                    >
                      Developer
                    </a>
                  </li>
                  <li className="mb-3 font-[Inter] list-item list-none">
                    <a
                      href="https://status.twala.io"
                      target="_blank"
                      rel="noreferrer noopener nofollow"
                      className="text-white font-[Inter] text-base leading-[140%] no-underline transition-all duration-200 hover:text-[#09dbce] hover:outline-0 hover:rotate-0"
                    >
                      Uptime Status
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex-[1]">
                <p className="text-[#a1a1a1] tracking-[2px] uppercase mb-6 font-[Inter] text-xs">
                  Solutions
                </p>
                <ul className="text-[#333] font-[Inter] pl-0 list-none mt-0 mb-2.5 text-sm leading-5">
                  <li className="mb-3 font-[Inter] list-item list-none">
                    <a
                      href="https://www.twala.io/human-resources"
                      className="text-white font-[Inter] text-base leading-[140%] no-underline transition-all duration-200 hover:text-[#09dbce] hover:outline-0 hover:rotate-0"
                    >
                      Human Resources
                    </a>
                  </li>
                  <li className="mb-3 font-[Inter] list-item list-none">
                    <a
                      href="https://www.twala.io/financial-and-accounting"
                      className="text-white font-[Inter] text-base leading-[140%] no-underline transition-all duration-200 hover:text-[#09dbce] hover:outline-0 hover:rotate-0"
                    >
                      Finance and Accounting
                    </a>
                  </li>
                  <li className="mb-3 font-[Inter] list-item list-none">
                    <a
                      href="https://www.twala.io/legal"
                      className="text-white font-[Inter] text-base leading-[140%] no-underline transition-all duration-200 hover:text-[#09dbce] hover:outline-0 hover:rotate-0"
                    >
                      Legal
                    </a>
                  </li>
                  <li className="mb-3 font-[Inter] list-item list-none">
                    <a
                      href="https://www.twala.io/sales-procurement"
                      className="text-white font-[Inter] text-base leading-[140%] no-underline transition-all duration-200 hover:text-[#09dbce] hover:outline-0 hover:rotate-0"
                    >
                      Sales and Procurement
                    </a>
                  </li>
                  <li className="mb-3 font-[Inter] list-item list-none">
                    <a
                      href="https://www.twala.io/education"
                      className="text-white font-[Inter] text-base leading-[140%] no-underline transition-all duration-200 hover:text-[#09dbce] hover:outline-0 hover:rotate-0"
                    >
                      Education
                    </a>
                  </li>
                  <li className="mb-3 font-[Inter] list-item list-none">
                    <a
                      href="https://www.twala.io/real-estate"
                      className="text-white font-[Inter] text-base leading-[140%] no-underline transition-all duration-200 hover:text-[#09dbce] hover:outline-0 hover:rotate-0"
                    >
                      Real Estate
                    </a>
                  </li>
                  <li className="mb-3 font-[Inter] list-item list-none">
                    <a
                      href="https://www.twala.io/local-government"
                      className="text-white font-[Inter] text-base leading-[140%] no-underline transition-all duration-200 hover:text-[#09dbce] hover:outline-0 hover:rotate-0"
                    >
                      Local Governments
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="gap-x-6 flex">
            <div className="flex-[1]">
              <span className="text-[#a1a1a1] font-[Inter] text-base leading-[140%]">© 2020 - 2022 Copyright</span>
            </div>
            <div className="gap-x-6 text-right flex-[1] justify-end flex">
              <a href="https://www.twala.io/terms-of-use" className="text-[#ececfa] bg-[#0000] text-right font-[Inter] text-base leading-[140%] no-underline transition-all duration-200 hover:text-[#09dbce]">Terms of Use</a>
              <a href="https://www.twala.io/cookie-policy" className="text-[#ececfa] bg-[#0000] text-right font-[Inter] text-base leading-[140%] no-underline transition-all duration-200 hover:text-[#09dbce]">Cookie Policy</a>
              <a href="https://www.twala.io/privacy-policy" className="text-[#ececfa] bg-[#0000] text-right font-[Inter] text-base leading-[140%] no-underline transition-all duration-200 hover:text-[#09dbce]">Privacy Policy</a>
            </div>
          </div>
          <div className="flex-initial bg-gradient-to-r from-[#7a13ce] to-[#09dbce] w-full h-[1px]"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
