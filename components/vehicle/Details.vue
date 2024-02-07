<template>
  <div class="flex flex-col gap-5 lg:flex-row">
    <div class="flex flex-col justify-center max-w-30">
      <VehicleImageGallery v-if="vehicle" :vehicle="vehicle" />
    </div>
    <div
      class="flex flex-col justify-between flex-1 p-6 bg-white text-blue-pewter drop-shadow lg:rounded rounded-xl max-lg:mt-8"
    >
      <div>
        <div class="flex flex-row justify-between">
          <div class="flex items-center gap-3">
            <h1 class="text-xl font-bold lg:text-3xl text-dark-gunmetal">
              {{ vehicle?.name }}
            </h1>
            <VehicleWishlistIcon :is-favorite="true" />
          </div>
        </div>
        <p class="my-8 font-primary lg:text-xl text-md text-blue-pewter lg:leading-10">
          {{ vehicle?.description }}
        </p>
        <div class="flex flex-wrap gap-x-11 gap-y-6 lg:text-xl text-md font-primary">
          <div
            v-for="(item, index) in [
              { title: 'Type car', value: vehicle?.type },
              { title: 'Capacity', value: `${vehicle?.people} Person` },
              { title: 'Gasoline', value: vehicle?.gasolineLiter },
              { title: 'Steering ', value: vehicle?.kindOfTransition },
            ]"
            :key="index"
            class="flex gap-x-4"
          >
            <div class="capitalize font-primary text-blue-pewter">
              {{ item.title }}
            </div>
            <div class="font-semibold text-blue-marble">
              {{ item.value }}
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-row items-center justify-between w-full mt-8 justify-self-end lg:mt-16">
        <p class="font-bold font-primary lg:text-2xl text-dark-gunmetal ">
          ${{ vehicle?.pricePerDay?.toFixed(2) }}/
          <span class="text-sm text-blue-pewter">day</span>
        </p>
        <button class="bg-blue-royal text-white text-sm rounded-[10px] cursor-pointer px-4 py-3 font-semibold capitalize">
          rent now
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
interface IProps {
  vehicle?: IVehicleDetails;
}
defineProps<IProps>();
</script>
