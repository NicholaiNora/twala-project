import twala from "../assets/twala-logo.png";

const NavBar = () => {
  return (
    <header className="pt-4 pb-4 pl-6 pr-6 z-[99] w-full bg-[rgba(18,6,35,1)] fixed top-0 backdrop-blur-2xl">
      <div className="max-w-[1140px] mx-auto flex items-center">
        <img src={twala} width="140" className="cursor-pointer" />
        <div className="w-full flex items-center justify-end gap-4">
          <nav>
            <div className="flex items-center justify-center">
              <a
                href="#features"
                className="text-white p-[32px_12px] font-[Inter] text-[16px] font-medium leading-[120%] hover:text-[#09dbce] active:border-t-2 focus:text-[#7a13ce] focus:border-t-2 cursor-pointer"
              >
                Features
              </a>
              <a
                href="#solutions"
                className="text-white p-[32px_12px] font-[Inter] text-[16px] font-medium leading-[120%] hover:text-[#09dbce] active:border-t-2 focus:text-[#7a13ce] focus:border-t-2 cursor-pointer"
              >
                Solutions
              </a>
              <a
                href="#pricing"
                className="text-white p-[32px_12px] font-[Inter] text-[16px] font-medium leading-[120%] hover:text-[#09dbce] active:border-t-2 focus:text-[#7a13ce] focus:border-t-2 cursor-pointer"
              >
                Pricing
              </a>

              <a
                href="#blog"
                className="text-white p-[32px_12px] font-[Inter] text-[16px] font-medium leading-[120%] hover:text-[#09dbce] active:border-t-2 focus:text-[#7a13ce] focus:border-t-2 cursor-pointer"
              >
                Blog
              </a>

              <a
                href="#contact-us"
                className="text-white p-[32px_12px] font-[Inter] text-[16px] font-medium leading-[120%] hover:text-[#09dbce] active:border-t-2 focus:text-[#7a13ce] focus:border-t-2 cursor-pointer"
              >
                Contact Us
              </a>
            </div>
          </nav>
          <div className="flex justify-center items-center self-stretch">
            <button className="text-white p-3 border-2 border-[#fff3] font-[Inter] text-[16px] font-medium leading-[140%] hover:border-white cursor-pointer">
              Verify Document
            </button>
          </div>
          <div className="flex align-center justify-center self-auto">
            <button className="text-[#09dbce] font-[Inter] p-[32px_12px] text-[16px] font-medium hover:saturate-200 cursor-pointer ">
              Register
            </button>
            <button className="text-white border-2 border-[#7a13ce] bg-[#7a13ce] p-[12px_16px] my-auto font-[Inter] text-[16px] font-medium leading-[140%] self-auto cursor-pointer transition-all duration-200 hover:border-[#b631da] hover:bg-[#b631da] hover:shadow-[0_20px_40px] hover:shadow-[#7a13ce33] hover:translate-y-[-4px]">
              Log In
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
