import { IVehicleDetails } from "~/types/api/vehicle";

export default defineEventHandler(async (event) => {
  const { apiSingleVehicleUrl } = useRuntimeConfig();

  const id = event.context.params?.id;

  const vehicle = await $fetch<IVehicleDetails>(`${apiSingleVehicleUrl}${id}`);

  return vehicle;
});
