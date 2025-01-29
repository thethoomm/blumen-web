import { HttpStatusCode } from "axios";
import { api } from "@/lib/api";
import { Plant } from "@/types/plant";

type Response = {
  message: string;
  error?: { path: string; message: string }[];
};

export async function fetchAllPlants(): Promise<Plant[]> {
  const res = await api.get<Plant[]>("/plants");

  const { data, status } = res;

  if (status !== HttpStatusCode.Ok) {
    throw new Error(`Error fetching plants: Status:${status}`);
  }

  return data;
}

export async function fetchPlantById(id: number): Promise<Plant> {
  const res = await api.get<Plant>(`/plants/${id}`);

  const { data, status } = res;

  if (status !== HttpStatusCode.Ok) {
    throw new Error(`Error fetching plant: Status:${status}`);
  }

  return data;
}

export async function createPlant(plant: Plant) {
  const { status, data } = await api.post<Response>("/plants", {
    title: plant.title,
    subtitle: plant.subtitle,
    tags: plant.tags.split(",".trim()),
    price: plant.price,
    isSale: plant.isSale,
    discountPercent: plant.discountPercent,
    characteristics: plant.characteristics.trim(),
    description: plant.description.trim(),
    imageUrl: plant.imageUrl.trim(),
    plantTypeId: plant.plantTypeId,
  });

  if (status !== HttpStatusCode.Created) {
    throw new Error(`Error creating plant: Status: ${status}`);
  }

  return data;
}
