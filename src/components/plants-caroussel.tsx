import { Plant } from "@/types/plant";
import { PlantCard } from "@/components/plant-card";

interface PlantsCarousselProps {
  plants: Plant[];
}

export function PlantsCaroussel({ plants }: PlantsCarousselProps) {
  return (
    <div className="flex flex-row items-center gap-2 h-full w-full">
      {plants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} />
      ))}
    </div>
  );
}
