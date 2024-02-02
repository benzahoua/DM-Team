<template>
  <div v-if="!pending" class="flex flex-col gap-5">
    <div class="flex items-center justify-between lg:mx-4">
      <h2 class="font-semibold capitalize font-primary text-blue-pewter">
        popular car
      </h2>
      <button
        class="font-semibold capitalize cursor-pointer font-primary text-blue-royal"
      >
        view all
      </button>
    </div>
    <div class="py-2">
      <div class="flex overflow-x-auto gap-x-8 no-scrollbar">
        <VehicleListItem
          v-for="vehicle in vehicles"
          :key="vehicle.id"
          :vehicle-info="vehicle"
          container-direction="stacked"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

const { data: vehicles } = await useFetch<{ data: IVehicle }>(
  "/api/popular"
);
</script>
