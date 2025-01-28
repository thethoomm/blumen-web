import { HttpStatusCode } from "axios";
import { api } from "@/lib/api";
import { Plant } from "@/types/plant";

export async function fetchAllPlants(): Promise<Plant[]> {
  const res = await api.get<Plant[]>("/plants");

  const { data, status } = res;

  if (status !== HttpStatusCode.Ok) {
    throw new Error(`Error fetching plants: Status:${status}`);
  }

  return data;
}
