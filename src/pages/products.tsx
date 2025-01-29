import { useEffect, useState } from "react";
import { Plant } from "@/types/plant";
import { fetchAllPlants } from "@/api/plant";
import { PlantCard } from "@/components/plant-card";

export default function Products() {
  const [plants, setPlants] = useState<Plant[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchAllPlants();

      setPlants(response);
    };

    fetchData();
  }, []);

  return (
    <div className="bg-gray min-h-screen h-full py-12">
      <main className="container-lg h-full">
        <div className="w-full h-full grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4">
          {plants.map((plant) => (
            <PlantCard key={plant.id} plant={plant} />
          ))}
        </div>
      </main>
    </div>
  );
}
