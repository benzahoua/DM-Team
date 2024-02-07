<template>
  <div class="flex flex-col gap-5">
    <div class="flex items-center justify-between lg:mx-4">
      <h2 class="font-semibold capitalize font-primary text-blue-pewter">
        recommendation car
      </h2>
    </div>
    <div class="flex flex-col gap-y-[50px] items-center justify-center">
      <div
        class="grid justify-center w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <VehicleListItem
          v-for="vehicle in vehicles"
          :key="vehicle.id"
          :vehicle-info="vehicle"
        />
      </div>
      <button
        v-if="isHome && lastPage !== pageIndex"
        type="button"
        class="w-fit h-[45px] px-5 text-white font-primary font-semibold rounded-[4px] bg-blue-royal capitalize"
        @click="nextPage"
      >
        <span> show more cars </span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const isHome = !route.params.id;

const vehicles = ref<IVehicle[]>([]);
const pageIndex = ref(1);
const lastPage = ref<number | null>(null);

const fetchVehicles = async () => {
  const { data, meta } = await $fetch<{ data: IVehicle[]; meta: TMeta }>(
    '/api/cars',
    {
      params: {
        page: pageIndex.value,
      },
    }
  );
  vehicles.value.push(...data);
  lastPage.value = meta.last_page;
};

await fetchVehicles();

const nextPage = async () => {
  pageIndex.value++;
  await fetchVehicles();
};
</script>
