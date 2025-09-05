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
        <div className="flex gap-[30px]">
          <div className="w-[870px] flex flex-col">
            {/* Featured card */}
            <div className="w-full h-[297px] p-[30px] bg-card-1 bg-cover bg-center bg-no-repeat rounded-[14px] flex flex-col gap-2.5 justify-between">
              <div className="w-[65px] h-7 px-[19px] py-0.5 rounded-20 bg-white
                              font-bold text-lg text-red-100 leading-6 shadow-50">
                3.5
              </div>
              <div className="w-full flex flex-col gap-3.5 text-white">
                <h1 className="font-bold text-[30px]">Barcelona Tour</h1>
                <div className="flex gap-2.5 w-fit">
                  <img src="./images/david.webp" alt="" width="28.57px" className="rounded-full"/>
                  <p className="text-lg">196 Activities</p>
                </div>
              </div>
            </div>

            <div></div>
          </div>

          <div></div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
