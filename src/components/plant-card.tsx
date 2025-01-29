import { useNavigate } from "react-router";
import { Plant } from "@/types/plant";
import { formatCurrency } from "@/utils/formatCurrency";

interface PlantCardProps {
  plant: Plant;
}

export function PlantCard({ plant }: PlantCardProps) {
  const navigate = useNavigate();

  function handleNavigate() {
    return navigate(`/products/${plant.id}`);
  }

  return (
    <div
      onClick={handleNavigate}
      className="cursor-pointer min-w-sm h-[590px] flex flex-col shadow-md transition-all duration-200 ring-2 ring-transparent hover:-translate-4 hover:ring-2 hover:ring-primary-avacado"
    >
      <img
        src={plant.imageUrl}
        alt={`${plant.title} image`}
        className="w-full h-full object-cover"
      />
      <div className="bg-white flex flex-col gap-6 p-6">
        <div className="flex flex-col gap-1.5">
          <p className="font-lato text-2xl font-bold text-primary-lunar line-clamp-1">
            {plant.title}
          </p>
          <div className="flex items-center gap-4">
            <span className="text-primary-lunar font-raleway">
              {formatCurrency(plant.price)}
            </span>
            {plant.price !== plant.price && (
              <span className="text-secondary line-through font-raleway">
                {formatCurrency(plant.price)}
              </span>
            )}
          </div>
        </div>

        <ul className="flex flex-row items-center gap-4">
          {plant.tags.split(",").map((tag, index) => (
            <span
              key={index}
              className="w-fit bg-gray px-3 py-1.5 border-2 border-primary-avacado text-primary-avacado rounded-3xl"
            >
              {tag}
            </span>
          ))}
        </ul>
      </div>
    </div>
  );
}
