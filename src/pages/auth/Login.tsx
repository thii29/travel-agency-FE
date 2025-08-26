const Login = () => {
  return (
    <div className="bg-auth bg-cover bg-no-repeat w-full h-screen">
      <div className="bg-navy-50/50 w-full h-screen relative">
        <div
          className="w-[495px] h-[330px] bg-white border-light-100 rounded-20 
                        py-10 px-[25px] shadow-2xs flex flex-col justify-center items-center gap-9 
                        absolute top-2/4 left-2/4 -translate-x-[50%] -translate-y-[50%] 
                        font-figtree text-[28px]"
        >
          <div className="w-full h-[30px] flex justify-center items-center gap-1.5">
            <img src="./icons/logo.svg" alt="logo" width="30px" height="30px" />
            <span className="font-inter font-bold  text-dark-100">
              Tourvisto
            </span>
          </div>
          <div className="w-full flex flex-col gap-3 items-center text-center">
            <div className="font-semibold">Start Your Travel Journey</div>
            <div className="font-normal text-[18px] text-gray-100">
              Sign in to explore custom itineraries, trending destinations, and
              much more
            </div>
          </div>
          <button className="w-full h-[52px] bg-primary-100 rounded-lg border-2 border-primary-100 px-4 py-3.5 shadow-xs
                            text-white font-figtree font-semibold text-lg/[18px] hover:bg-primary-500">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
