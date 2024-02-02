import { IVehicle } from "~/types/api/vehicle";

export default defineEventHandler(async (event) => {
  const { apiVehiclesUrl } = useRuntimeConfig();
  const { page } = getQuery(event);

  const vehicles = await $fetch<{ data: IVehicle[] }>(`${apiVehiclesUrl}`, {
    params: {
      page: page || 1,
    },
  });

  return vehicles;
});
