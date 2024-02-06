<template>
  <div class="max-w-[1500px] mx-auto pt-8 pb-16 lg:pl-[70px] lg:pr-[58px] flex flex-col gap-8">
    vehicle info : {{ vehicle }}
    <ListRecommendedVehicles />
  </div>
</template>
<script setup lang="ts">
const route = useRoute();
const { id } = route.params;

const { data: vehicle } = await useFetch<IVehicle>(`/api/cars/${id}`
);
</script>