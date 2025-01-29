import { HttpStatusCode } from "axios";
import { api } from "@/lib/api";
import { PlantType } from "@/types/plantType";

export async function fetchAllPlantTypes(): Promise<PlantType[]> {
  const res = await api.get<PlantType[]>("/plant-types");

  const { data, status } = res;

  if (status !== HttpStatusCode.Ok) {
    throw new Error(`Error fetching plant types: Status:${status}`);
  }

  return data;
}
