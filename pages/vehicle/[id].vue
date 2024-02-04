<template>
  <div class="max-w-[1500px] mx-auto pt-8 pb-16 lg:pl-[70px] lg:pr-[58px] flex flex-col gap-8">
    {{ vehicleInfo }}
    
    <ListRecommendedVehicles />
  </div>
</template>
<script setup lang="ts">
//TODO: handel 404 page

const route = useRoute();
const { id } = route.params;


const { data: vehicle } = useFetch<{ data: IVehicle }>(
  `https://dm-assignment-commonshare.koyeb.app/api/cars/${id}`
);
const vehicleInfo = ref(vehicle);
</script>