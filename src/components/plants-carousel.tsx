import { Plant } from "@/types/plant";
import { PlantCard } from "@/components/plant-card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface PlantsCarouselProps {
  plants: Plant[];
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

export function PlantsCarousel({ plants }: PlantsCarouselProps) {
  return (
    <Carousel
      responsive={responsive}
      
      itemClass="px-4"
      containerClass="py-12 px-6"
    >
      {plants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} />
      ))}
    </Carousel>
  );
}
