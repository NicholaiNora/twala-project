import { useEffect, useRef, useState } from "react";
import twala from "../assets/twala-logo.png";

const NavBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [opacity, setOpacity] = useState(0); // Start with 10px blur
  const navRef = useRef<HTMLDivElement | null>(null); // Reference for the solutions dropdown

  const handleClick = () => {
    setIsExpanded((prevState) => !prevState);
  };

  const handleClickOutside = (e: MouseEvent) => {
    // Check if the click was outside the navRef
    console.log(navRef.current);
    console.log(e.target);
    if (navRef.current && !navRef.current.contains(e.target as Node)) {
      setIsExpanded(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Get the scroll position and total scrollable height
      const scrollPosition = window.scrollY;
      const maxScroll = 200;

      // Calculate opacity based on the scroll position
      const newOpacity = scrollPosition / maxScroll;

      // Update the opacity (clamp it between 0 and 1)
      setOpacity(Math.min(newOpacity, 1));
    };

    const handleOutsideClick = (e: MouseEvent) => {
      handleClickOutside(e);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("click", handleOutsideClick);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <header
      className={`pt-4 pb-4 pl-6 pr-6 z-[99] w-full fixed top-0 transition-all duration-200`}
      style={{
        backdropFilter: "blur(40px)",
        willChange: "background",
        backgroundColor: `rgba(18, 6, 35, ${opacity})`,
      }}
    >
      <div className="max-w-[1140px] mx-auto flex items-center">
        <a href="https://nicholainora.github.io/twala-project/">
          <img src={twala} width="140" className="cursor-pointer" />
        </a>
        <div className="w-full flex items-center justify-end gap-4">
          <nav>
            <div className="flex items-center justify-center">
              <a
                href="https://www.twala.io/features"
                className="text-white p-[32px_12px] font-[Inter] text-[16px] font-medium leading-[120%] hover:text-[#09dbce] active:border-t-2 focus:text-[#7a13ce] focus:border-t-2 cursor-pointer"
              >
                Features
              </a>
              <div
                ref={navRef}
                className="max-w-[1140px] z-44 text-left mx-auto relative"
                onClick={handleClick}
              >
                <div className="p-[34px_28px_34px_14px] leading-[120%] select-none cursor-pointer align-top text-[#222] text-left whitespace-nowrap mx-auto no-underline relative flex items-center hover:[&_span]:text-[#09dbce]">
                  <div className=" mr-2 absolute right-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 330 330"
                      fill="#09dbce"
                      stroke="#09dbce"
                    >
                      <path d="M325.607 79.393c-5.857-5.857-15.355-5.858-21.213.001l-139.39 139.393L25.607 79.393c-5.857-5.857-15.355-5.858-21.213.001-5.858 5.858-5.858 15.355 0 21.213l150.004 150a14.999 14.999 0 0 0 21.212-.001l149.996-150c5.859-5.857 5.859-15.355.001-21.213z" />
                    </svg>
                  </div>
                  <div className="leading-[120%] cursor-pointer">
                    <span className="text-white text-base font-medium">
                      Solutions
                    </span>
                  </div>
                </div>
                <nav
                  className={`z-44 bg-white pt-2 pb-2 absolute flex flex-col ${
                    isExpanded ? "block" : "hidden"
                  }`}
                >
                  <a
                    href="https://www.twala.io/human-resources"
                    className="bg-white text-[#120623] border-l-2 border-l-[#0000] p-[12px_24px_12px_16px] text-base font-medium align-top whitespace-nowrap no-underline relative transition-all duration-200 hover:border-l-[#7a13ce] hover:text-[#7a13ce]"
                  >
                    Human Resources
                  </a>
                  <a
                    href="https://www.twala.io/financial-and-accounting"
                    className="bg-white text-[#120623] border-l-2 border-l-[#0000] p-[12px_24px_12px_16px] text-base font-medium align-top whitespace-nowrap no-underline relative transition-all duration-200 hover:border-l-[#7a13ce] hover:text-[#7a13ce]"
                  >
                    Financial & Accounting
                  </a>
                  <a
                    href="https://www.twala.io/local-government"
                    className="bg-white text-[#120623] border-l-2 border-l-[#0000] p-[12px_24px_12px_16px] text-base font-medium align-top whitespace-nowrap no-underline relative transition-all duration-200 hover:border-l-[#7a13ce] hover:text-[#7a13ce]"
                  >
                    Local Government
                  </a>
                  <a
                    href="https://www.twala.io/legal"
                    className="bg-white text-[#120623] border-l-2 border-l-[#0000] p-[12px_24px_12px_16px] text-base font-medium align-top whitespace-nowrap no-underline relative transition-all duration-200 hover:border-l-[#7a13ce] hover:text-[#7a13ce]"
                  >
                    Legal
                  </a>
                  <a
                    href="https://www.twala.io/education"
                    className="bg-white text-[#120623] border-l-2 border-l-[#0000] p-[12px_24px_12px_16px] text-base font-medium align-top whitespace-nowrap no-underline relative transition-all duration-200 hover:border-l-[#7a13ce] hover:text-[#7a13ce]"
                  >
                    Education
                  </a>
                  <a
                    href="https://www.twala.io/real-estate"
                    className="bg-white text-[#120623] border-l-2 border-l-[#0000] p-[12px_24px_12px_16px] text-base font-medium align-top whitespace-nowrap no-underline relative transition-all duration-200 hover:border-l-[#7a13ce] hover:text-[#7a13ce]"
                  >
                    Real Estate
                  </a>
                  <a
                    href="https://www.twala.io/sales-procurement"
                    className="bg-white text-[#120623] border-l-2 border-l-[#0000] p-[12px_24px_12px_16px] text-base font-medium align-top whitespace-nowrap no-underline relative transition-all duration-200 hover:border-l-[#7a13ce] hover:text-[#7a13ce]"
                  >
                    Sales & Procurement
                  </a>
                </nav>
              </div>
              {/* <a
                href="#solutions"
                className="text-white p-[32px_12px] font-[Inter] text-[16px] font-medium leading-[120%] hover:text-[#09dbce] active:border-t-2 focus:text-[#7a13ce] focus:border-t-2 cursor-pointer"
              >
                Solutions
              </a> */}
              <a
                href="https://www.twala.io/pricing"
                className="text-white p-[32px_12px] font-[Inter] text-[16px] font-medium leading-[120%] hover:text-[#09dbce] active:border-t-2 focus:text-[#7a13ce] focus:border-t-2 cursor-pointer"
              >
                Pricing
              </a>

              <a
                href="https://www.twala.io/blogs"
                className="text-white p-[32px_12px] font-[Inter] text-[16px] font-medium leading-[120%] hover:text-[#09dbce] active:border-t-2 focus:text-[#7a13ce] focus:border-t-2 cursor-pointer"
              >
                Blog
              </a>

              <a
                href="https://www.twala.io/contact-us"
                className="text-white p-[32px_12px] font-[Inter] text-[16px] font-medium leading-[120%] hover:text-[#09dbce] active:border-t-2 focus:text-[#7a13ce] focus:border-t-2 cursor-pointer"
              >
                Contact Us
              </a>
            </div>
          </nav>
          <div className="flex justify-center items-center self-stretch">
            <a
              href="https://sign.twala.io/verify/public"
              target="_blank"
              className="text-white p-3 border-2 border-[#fff3] font-[Inter] text-[16px] font-medium leading-[140%] hover:border-white cursor-pointer"
            >
              Verify Document
            </a>
          </div>
          <div className="flex align-center justify-center self-auto">
            <a
              href="https://sign.twala.io/register?redirect=%2Fdashboard"
              target="_blank"
              className="text-[#09dbce] font-[Inter] p-[32px_12px] text-[16px] font-medium hover:saturate-200 cursor-pointer "
            >
              Register
            </a>
            <a
              href="https://sign.twala.io/login?redirect=%2Fdashboard"
              target="_blank"
              className="text-white border-2 border-[#7a13ce] bg-[#7a13ce] p-[12px_16px] my-auto font-[Inter] text-[16px] font-medium leading-[140%] self-auto cursor-pointer transition-all duration-200 hover:border-[#b631da] hover:bg-[#b631da] hover:shadow-[0_20px_40px] hover:shadow-[#7a13ce33] hover:translate-y-[-4px]"
            >
              Log In
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
