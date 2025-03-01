import { useEffect, useState } from "react";
import { fetchAllPlants } from "@/api/plant";
import { PlantsCarousel } from "@/components/plants-carousel";
import { Plant } from "@/types/plant";

export function Store() {
  const [plants, setPlants] = useState<Plant[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const response = await fetchAllPlants();

      setPlants(response);
      setIsLoading(false)
    };

    fetchData();
  }, []);

  const inSalePlants = plants.filter((plant) => plant.isSale);

  return (
    <section className="w-full h-full bg-gray flex flex-col">
      <div className="container-lg flex flex-col gap-24 pt-32">
        <header>
          <h1 className="font-eb-garamond text-6xl font-bold text-center capitalize text-primary-lunar">
            this weeks Most Popular{" "}
            <span className="text-primary-avacado">and best selling</span>
          </h1>
        </header>
        <main>
          <PlantsCarousel plants={plants} isLoading={isLoading}/>
        </main>
      </div>

      <div className="container-lg flex flex-col gap-24 py-32">
        <header>
          <h1 className="font-eb-garamond text-6xl font-bold text-center capitalize text-primary-lunar">
            <span className="text-primary-avacado">plants in</span> sale
          </h1>
        </header>
        <main>
          <PlantsCarousel plants={inSalePlants} isLoading={isLoading}/>
        </main>
      </div>
    </section>
  );
}
