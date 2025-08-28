const Homepage = () => {
  return (
    <>
      <div className="bg-hero bg-cover bg-origin-content w-auto h-[680px]">
        <div className="bg-linear100 bg-cover w-full h-full flex flex-col">
          {/* Header bar */}
          <div className="w-full h-[100px] flex justify-between items-center py-[30px] px-[140px]">
            {/* Logo page */}
            <div className=" flex justify-center items-center gap-1.5">
              <img
                src="./icons/logo.svg"
                alt="logo"
                width="30px"
                height="30px"
              />
              <span className="font-inter font-bold  text-dark-100">
                Tourvisto
              </span>
            </div>

            {/* User action */}
            <div className="w-[217px] h-10 flex items-center gap-6">
                <span className="text-base leading-6 font-normal text-white">Admin Panel</span>
                <img src="./images/james.webp" alt="avatar" width="40px" className="rounded-full"/>
            </div>
          </div>

          {/* Slang & Started button */}
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
