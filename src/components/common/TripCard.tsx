import LocationTag from "./LocationTag";

const TripCard = () => {
  return (
    <>
      <div className="w-full h-[316px] flex justify-between">
        <div className="w-[270px] h-full rounded-20 flex flex-col bg-white shadow-300 relative">
          <img
            src="./images/sample.jpeg"
            alt="sample"
            width="full"
            className="rounded-t-20"
          />
          <div className="bg-white rounded-20 w-[54px] h-[22px] py-1 px-2.5 absolute mt-4 ml-[186px] font-semibold text-sm leading-3.5">
            $300
          </div>
          <div className="flex flex-col justify-between mx-[18px] mt-4">
            <h2 className="text-lg font-semibold leading-5">
              Thronridge Cir. Shiloh
            </h2>
            <div className="w-full flex gap-1.5 mt-3">
              <img src="./icons/location-mark.svg" alt="" />
              <span className="text-sm leading-5 text-gray-100">
                St George’s Ln Singapore
              </span>
            </div>
            <div className="w-full mt-5 flex gap-5">
              <LocationTag name="Mountains"/>
              <LocationTag name="City"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TripCard;
