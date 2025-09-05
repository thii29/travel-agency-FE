const Header = () => {
  return (
    <div className="bg-hero bg-cover bg-origin-content w-auto h-[680px]">
      <div className="bg-linear100 bg-cover w-full h-full flex flex-col">
        {/* Header bar */}
        <div className="w-full h-[100px] flex justify-between items-center py-[30px] px-[140px]">
          {/* Logo page */}
          <div className=" flex justify-center items-center gap-1.5">
            <img src="./icons/logo.svg" alt="logo" width="30px" height="30px" />
            <span className="font-inter font-bold  text-dark-100">
              Tourvisto
            </span>
          </div>

          {/* User action */}
          <div className="w-[217px] h-10 flex items-center gap-6">
            <span className="text-base leading-6 font-normal text-white">
              Admin Panel
            </span>
            <img
              src="./images/james.webp"
              alt="avatar"
              width="40px"
              className="rounded-full"
            />
            <button className="w-10 h-10 rounded-full bg-white/40 p-2  flex justify-between items-center gap-2.5">
              <img src="./icons/logout.svg" alt="" width="24px" />
            </button>
          </div>
        </div>

        {/* Slang & Started button */}
        <div className="ml-[140px] mt-[140px] w-[514px] flex flex-col gap-6">
          <div className="w-full flex flex-col gap-3.5 font-figtree">
            <h1 className="font-bold text-7xl">Plan Your Trip with Ease</h1>
            <p className="text-lg">
              Customize your travel itinerary in minutes—pick your destination,
              set your preferences, and explore with confidence.
            </p>
          </div>
          <button className="w-[209px] h-14 rounded-lg py-4 px-14 bg-primary-100 font-figtree font-semibold text-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
