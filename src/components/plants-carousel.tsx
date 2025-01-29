import { Plant } from "@/types/plant";
import { PlantCard } from "@/components/plant-card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface PlantsCarouselProps {
  plants: Plant[];
  isLoading?: boolean;
}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1440 },
    items: 3.6,
  },
  mobile: {
    breakpoint: { max: 1024, min: 0 },
    items: 1,
  },
};

export function PlantsCarousel({ plants, isLoading }: PlantsCarouselProps) {
  return (
    <Carousel
      responsive={responsive}
      itemClass="px-4"
      containerClass="py-12 px-6"
    >
      {isLoading
        ? Array(4)
            .fill(null)
            .map((_, index) => (
              <div
                key={`placeholder-${index}`}
                className="min-w-sm h-[590px] bg-gray-200 animate-pulse rounded-lg"
              ></div>
            ))
        : plants.map((plant) => <PlantCard key={plant.id} plant={plant} />)}
    </Carousel>
  );
}
