import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { fetchPlantById } from "@/api/plant";
import { Plant } from "@/types/plant";
import { Button } from "@/components/button";
import { formatCurrency } from "@/utils/formatCurrency";
import { Badge } from "@/components/badge";

export default function PlantDetails() {
  const { plantId } = useParams();
  const navigate = useNavigate();

  if (!plantId) {
    navigate("/not-found");
    return;
  }

  const id = parseInt(plantId);

  const [plant, setPlant] = useState<Plant | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchPlantById(id);
        if (!response) {
          navigate("/not-found");
        } else {
          setPlant(response);
        }
      } catch (error) {
        navigate("/not-found");
      }
    };

    fetchData();
  }, []);

  if (!plant) {
    return;
  }

  return (
    <div className="w-full min-h-screen h-full flex items-center justify-center py-24 md:py-0">
      <main className="container-lg h-full flex items-center justify-center">
        <div className="w-full h-full flex flex-col lg:flex-row gap-20">
          <img
            src={plant.imageUrl}
            alt={`${plant.title} plant`}
            className="w-3xl h-[46rem] object-cover"
          />

          <div className="h-[46rem] flex flex-col gap-6">
            <header>
              <h2 className="font-eb-garamond font-bold text-6xl text-primary-lunar">
                {plant.title}
              </h2>
              <h3 className="font-lato font-bold text-2xl text-secondary">
                {plant.subtitle}
              </h3>
            </header>

            <div className="flex flex-row flex-wrap items-center gap-3">
              {plant.tags.split(",").map((tag, index) => (
                <Badge key={index}>{tag}</Badge>
              ))}
            </div>

            <span className="font-bold text-2xl text-black font-lato">
              {formatCurrency(plant.price)}
            </span>

            <Button>Check out!</Button>

            <div className="flex flex-col gap-6">
              <h4 className="font-lato font-bold text-2xl text-black">
                Features
              </h4>
              <ul className="flex flex-col flex-wrap pl-4 list-disc list-inside">
                {plant.characteristics
                  .split(",")
                  .map((characteristc, index) => (
                    <li
                      key={index}
                      className="font-raleway first-letter:capitalize"
                    >
                      {characteristc.trim()}
                    </li>
                  ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="font-lato font-bold text-2xl text-black">
                Description
              </h4>
              <p className="font-raleway line-clamp-6">{plant.description}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
