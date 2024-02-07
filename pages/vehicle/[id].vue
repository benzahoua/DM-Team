<template>
  <div class="max-w-[1500px] mx-auto flex flex-col gap-8 pt-8 pb-16 lg:pl-[70px] lg:pr-[58px] ">
    <VehicleDetails :vehicle="vehicle" />
    <ListRecommendedVehicles />
  </div>
</template>
<script setup lang="ts">
const route = useRoute();
const { id } = route.params;

const vehicle = await $fetch<IVehicleDetails>(`/api/cars/${id}`
);
</script>
