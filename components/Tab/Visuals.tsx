const Visuals = async () => {
  return (
    <div className="tab visuals hidden mt-8 py-12 lg:first:pt-24 px-12 flex-col gap-y-12 mb-12 sm:px-[15vw] grid-cols-3 grid-rows-4 lg:gap-y-5 lg:gap-x-5 xl:gap-y-10 xl:gap-x-10">
      {/* {visuals.map((visual) => (
        <div
          key={visual.id}
          className="w-full h-[45vw] bg-cover bg-center rounded-lg "
          style={{ backgroundImage: `url('${visual.image}')` }}
        ></div>
      ))} */}
      <div
        className="w-full h-[45vw] bg-cover bg-center rounded-lg col-start-1 col-end-3 row-start-1 row-end-3 lg:h-[25vw]"
        style={{ backgroundImage: `url('/podz-card.png` }}
      ></div>
      <div
        className="w-full h-[45vw] bg-cover bg-center rounded-lg col-start-3 col-end-4 row-start-1 row-end-3 lg:h-[25vw]"
        style={{ backgroundImage: `url('/podz-mobile.png` }}
      ></div>
      <div
        className="w-full h-[45vw] bg-cover bg-center rounded-lg col-start-1 col-end-2 row-start-3 row-end-5 lg:h-[25vw]"
        style={{ backgroundImage: `url('/podz-mobile2.png` }}
      ></div>
      <div
        className="w-full h-[45vw] bg-cover bg-center rounded-lg col-start-2 col-end-4 row-start-3 row-end-5 lg:h-[25vw]"
        style={{ backgroundImage: `url('/podz-laptop2.png` }}
      ></div>
    </div>
  );
};
export default Visuals;
