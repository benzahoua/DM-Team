export default defineEventHandler(async (event) => {
  const { apiVehiclesUrl } = useRuntimeConfig();
  const { page, q } = getQuery(event);

  let apiUrl = `${apiVehiclesUrl}?`;

  if (page !== undefined) {
    apiUrl += `page=${page}`;
  } else if (q !== undefined) {
    apiUrl += `q=${q}`;
  }

  const vehicles = await $fetch(apiUrl);
  return vehicles;
});
