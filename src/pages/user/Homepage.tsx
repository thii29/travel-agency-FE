import TripCard from "../../components/common/TripCard";
import { Featured, Header } from "../../components/user";

const Homepage = () => {
  return (
    <>
      <Header></Header>
      <Featured></Featured>
      <div className="w-full h-[972px] py-10 px-[140px] flex flex-col gap-10">
        <div className="w-full h-[88px] flex flex-col gap-3.5 font-figtree">
          <h2 className="font-bold text-4xl">Handpicked Trips</h2>
          <p className="text-lg text-gray-100">
            Browse well-planned trips designed for different travel styles and
            interests
          </p>
        </div>

        <div className="w-full flex flex-col gap-30">
          {/* Trip Card */}
          <TripCard></TripCard>

          {/* Pagination */}
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
