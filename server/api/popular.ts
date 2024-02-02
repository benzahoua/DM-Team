import { IVehicle } from "~/types/api/vehicle";

export default defineEventHandler(async () => {
  const { apiPopularVehiclesUrl } = useRuntimeConfig();

  const vehicles = await $fetch<IVehicle[]>(`${apiPopularVehiclesUrl}`);

  return vehicles;
});
