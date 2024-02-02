<template>
  <div
    v-if="vehicleInfo"
    class="w-full h-full max-w-[350px] min-w-[270px] max-h-[385px] lg:min-h-[385px] flex flex-col gap-2 p-4 lg:max-2xl:p-6 bg-white rounded-[10px]"
    :class="containerDirection ? 'min-h-[285px]' : 'min-h-[240px]'"
  >
    <div class="flex justify-between w-full">
      <div class="flex flex-col">
        <h3
          class="text-base font-bold text-left font-primary text-dark-gunmetal lg:text-lg"
        >
          {{ vehicleInfo.name }}
        </h3>
        <h4
          class="text-xs font-medium text-left capitalize font-primary lg:text-sm text-blue-pewter"
        >
          {{ vehicleInfo.type }}
        </h4>
      </div>

      <i-Heart class="text-xl cursor-pointer" filled />
    </div>

    <div
      class="flex justify-between flex-1 gap-2 lg:flex-col"
      :class="{ 'flex-col': containerDirection === 'stacked' }"
    >
      <div class="flex items-center justify-center flex-1">
        <div class="relative flex h-full mx-auto lg:h-auto">
          <NuxtImg
            :src="`${vehicleInfo.img}`"
            class="self-end lg:self-center w-[180px] md:w-[220px] object-contain"
          />
          <div
            class="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white to-transparent"
          />
        </div>
      </div>
      <div
        class="max-h-[75px] flex justify-between lg:flex-row"
        :class="containerDirection ? ' flex-row' : ' flex-col '"
      >
        <VehicleListItemSpecs />
      </div>
    </div>
    <div class="flex items-center justify-between py-2 mt-5 lg:py-3">
      <div>
        <span class="text-base font-bold font-primary text-seconday-500">
          ${{ vehicleInfo.pricePerDay?.toFixed(2) }}/
        </span>
        <span class="ml-1 text-xs xl:text-sm text-blue-pewter">day</span>
      </div>
      <NuxtLink
        :to="`/vehicle/${vehicleInfo.id}`"
        class="px-3 py-2 text-sm font-semibold text-white capitalize rounded-md cursor-pointer bg-blue-royal max-sm:text-xs"
      >
        rent now
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  vehicleInfo: IVehicle;
  containerDirection?: "stacked";
}
defineProps<IProps>();
</script>
