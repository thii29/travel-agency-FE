import Header from "../../components/user";

const Homepage = () => {
  return (
    <>
      <Header></Header>
      <div className="w-auto h-[925px] mt-10 py-10 px-[140px] flex flex-col gap-10 bg-light-200">
        {/* Title & sub title */}
        <div className="w-full h-[88px] flex flex-col gap-3.5 font-figtree">
          <h2 className="font-bold text-4xl">Featured Travel Destinations</h2>
          <p className="text-lg text-gray-100">
            Check out some of the best places you can visit around the world.
          </p>
        </div>

        {/* Grid imgs */}
        <div className="w-full h-[717px] flex gap-30 ">
          {/* Col 1 */}
          <div className="h-full grow flex flex-col gap-30">
            {/* Row 1 */}
            <div className="h-[297px] bg-card-1 bg-cover bg-no-repeat rounded-14 p-30 flex flex-col justify-between">
              <div className="bg-white w-[65px] h-7 rounded-20 px-[19px] py-0.5 shadow-50  text-red-100 font-bold text-lg leading-6">
                3.5
              </div>
              <div className="text-white flex flex-col gap-3.5">
                <h3 className="font-bold text-3xl">Barcelona Tour</h3>
                <div className="w-full flex gap-2.5">
                  <div className="avatar">
                    <div className="w-7 rounded-full">
                      <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                    </div>
                  </div>
                  <span className="text-lg">196 Activities</span>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="w-auto h-[390px] flex gap-30">
              <div className="grow bg-card-2 bg-cover bg-no-repeat rounded-14 py-5 px-30 flex flex-col justify-between">
                <div className="bg-white w-[65px] h-7 rounded-20 px-[19px] py-0.5 shadow-50  text-red-100 font-bold text-lg leading-6">
                  3.5
                </div>
                <div className="text-white flex flex-col gap-3.5">
                  <h3 className="font-bold text-3xl">London, United State</h3>
                  <div className="w-full flex items-center gap-2.5">
                    <div className="avatar">
                      <div className="w-5 h-5 rounded-full">
                        <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                      </div>
                    </div>
                    <span className="text-lg">196 Activities</span>
                  </div>
                </div>
              </div>

              <div className="grow bg-card-3 bg-cover bg-no-repeat rounded-14 py-5 px-30 flex flex-col justify-between">
                <div className="bg-white w-[65px] h-7 rounded-20 px-[19px] py-0.5 shadow-50  text-red-100 font-bold text-lg leading-6">
                  3.5
                </div>
                <div className="text-white flex flex-col gap-3.5">
                  <h3 className="font-bold text-3xl">London, United State</h3>
                  <div className="w-full flex items-center gap-2.5">
                    <div className="avatar">
                      <div className="w-5 h-5 rounded-full">
                        <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                      </div>
                    </div>
                    <span className="text-lg">196 Activities</span>
                  </div>
                </div>
              </div>
            </div>
          </div> 

          {/* Col 2 */}
          <div className="w-[270px] h-full flex flex-col justify-between">
            {/* Row 1 */}
            <div className="w-full h-[226px] rounded-20 py-3.5 px-5 bg-card-4 bg-cover bg-no-repeat flex flex-col justify-between items-start gap-2.5">
              <div className="bg-white w-[65px] h-7 rounded-20 px-[19px] py-0.5 shadow-50  text-red-100 font-bold text-sm leading-6 flex justify-center">
                3.5
              </div>
              <div className="text-white flex flex-col gap-2">
                <h3 className="font-semibold text-lg">Australia Tour</h3>
                <div className="w-full flex gap-2.5">
                  <div className="avatar">
                    <div className="w-4 rounded-full">
                      <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                    </div>
                  </div>
                  <span className="text-xs">196 Activities</span>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="w-full h-[226px] rounded-20 py-3.5 px-5 bg-card-5 bg-cover bg-no-repeat flex flex-col justify-between items-start gap-2.5">
              <div className="bg-white w-[65px] h-7 rounded-20 px-[19px] py-0.5 shadow-50  text-red-100 font-bold text-sm leading-6 flex justify-center">
                3.5
              </div>
              <div className="text-white flex flex-col gap-2">
                <h3 className="font-semibold text-lg">Japan Tour</h3>
                <div className="w-full flex gap-2.5">
                  <div className="avatar">
                    <div className="w-4 rounded-full">
                      <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                    </div>
                  </div>
                  <span className="text-xs">196 Activities</span>
                </div>
              </div>
            </div>

            {/* Row 3 */}
            <div className="w-full h-[226px] rounded-20 py-3.5 px-5 bg-card-6 bg-cover bg-no-repeat flex flex-col justify-between items-start gap-2.5">
              <div className="bg-white w-[65px] h-7 rounded-20 px-[19px] py-0.5 shadow-50  text-red-100 font-bold text-sm leading-6 flex justify-center">
                3.5
              </div>
              <div className="text-white flex flex-col gap-2">
                <h3 className="font-semibold text-lg">Australia Tour</h3>
                <div className="w-full flex gap-2.5">
                  <div className="avatar">
                    <div className="w-4 rounded-full">
                      <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                    </div>
                  </div>
                  <span className="text-xs">196 Activities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
