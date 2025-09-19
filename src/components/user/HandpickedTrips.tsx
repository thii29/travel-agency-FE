import TripCard from "../common/TripCard";

const HandpickedTrips = () => {
  return (
    <>
      <div className="w-full h-[972px] py-10 px-[140px] flex flex-col gap-10">
        <div className="w-full h-[88px] flex flex-col gap-3.5 font-figtree">
          <h2 className="font-bold text-4xl">Handpicked Trips</h2>
          <p className="text-lg text-gray-100">
            Browse well-planned trips designed for different travel styles and
            interests
          </p>
        </div>

        <div className="w-full grid grid-row-2 grid-cols-4 gap-30">
          {/* Trip Card */}
          <TripCard></TripCard>
          <TripCard></TripCard>
          <TripCard></TripCard>
          <TripCard></TripCard>
          <TripCard></TripCard>
          <TripCard></TripCard>
          <TripCard></TripCard>
          <TripCard></TripCard>
        </div>
        {/* Pagination */}
        <div className="h-[72px] py-4 border-t border-gray-200 text-sm font-medium">
          <div className="join flex justify-between">
            <button
              className="join-item btn bg-white border border-gray-200 rounded-lg px-3.5 py-2 shadow-100 hover:bg-primary-100
            "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                />
              </svg>
              Previous
            </button>
            <div className="flex gap-0.5">
              <button className="join-item w-10 btn bg-white border-0 p-3 rounded-lg">
                1
              </button>
              <button className="join-item w-10 btn bg-white border-0 p-3 rounded-lg">
                2
              </button>
              <button className="join-item w-10 btn bg-white border-0 p-3 rounded-lg">
                3
              </button>
              <button className="join-item w-10 btn bg-white border-0 p-3 rounded-lg">
                4
              </button>
            </div>
            <button className="join-item btn bg-white border border-gray-200 rounded-lg px-3.5 py-2 shadow-100 hover:bg-primary-100">
              Next
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HandpickedTrips;
