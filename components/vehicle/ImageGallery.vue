<template>
  <div>
    <NuxtImg
      class="h-auto w-full min-h-[60px] min-w-[190px] sm:min-h-[120px] sm:max-w-[380px] m-auto rounded-lg "
      :src="vehicle.img"
      alt=""
    />
    <div class="flex justify-center gap-5 mt-3 lg:justify-start">
      <div class="relative h-[65px] w-[230px] sm:h-[125px] sm:w-[150px]">
        <div class="w-full h-[125px] flex flex-row justify-center mb-5">
          <NuxtImg
            :src="vehicle.img"
            class="z-10 h-[80px] w-[80px] sm:h-[125px] sm:w-[120px] object-contain"
          />
        </div>
        <NuxtImg
          src="/images/hero-section2-bg.png"
          class="absolute inset-0 w-full h-full rounded-lg"
        />
      </div>
      <div
        v-for="vehicleImage in vehicle?.images"
        :key="vehicleImage.url"
      >
        <NuxtImg
          class="h-[65px] w-[230px] sm:h-[125px] sm:w-[150px] rounded-lg object-cover cursor-pointer"
          :src="vehicleImage.url"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
interface IProps {
  vehicle: IVehicleDetails;
}
defineProps<IProps>();
</script>
