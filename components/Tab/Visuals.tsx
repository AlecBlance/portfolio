import { Visual } from "@/utils/types";
import { server } from "@/utils/config";

const Visuals = async () => {
  const response = await fetch(`${server}/api/visuals`);
  const visuals: Visual[] = await response.json();

  return (
    <div className="tab visuals hidden mt-8 py-2 px-12 flex-col gap-y-12 mb-12 sm:px-[15vw]">
      {visuals.map((visual) => (
        <div
          key={visual.id}
          className="w-full h-[45vw] bg-cover bg-center rounded-lg"
          style={{ backgroundImage: `url('${visual.image}')` }}
        ></div>
      ))}
    </div>
  );
};
export default Visuals;
