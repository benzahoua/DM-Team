<template>
  <div
    class="w-full h-full max-h-[385px] lg:min-h-[385px] flex flex-col gap-2 p-4 bg-white rounded-[10px]"
    :class="containerDirection ? 'min-w-[240px] md:min-w-[300px] min-h-[285px] md:min-h-[380px]' : 'min-h-[240px]'"
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

      <VehicleWishlistIcon
        :is-favorite="isFavoriteVehicle"
        @update-is-favorite="toggleIsFavorite(vehicleInfo)"
      />
    </div>

    <div
      class="flex justify-between flex-1 gap-2 lg:flex-col"
      :class="{ 'flex-col': containerDirection === 'stacked' }"
    >
      <div class="flex items-center justify-center flex-1">
        <div class="relative flex h-full mx-auto lg:h-auto">
          <NuxtImg
            :src="`${vehicleInfo.img}`"
            class="self-end lg:self-center w-[180px] md:w-[220px] min-w-[100] object-contain"
            :class="{'w-[280px]' : !containerDirection }"
          />
          <div
            class="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white to-transparent"
          />
        </div>
      </div>
      <div
        class="max-h-[75px] flex justify-between lg:flex-row"
        :class="containerDirection ? ' flex-row' : ' flex-col gap-y-3'"
      >
        <VehicleListItemSpecs
          :vehicle-specs="vehicleInfo"
        />
      </div>
    </div>
    <div class="flex items-center justify-between py-2 mt-5 lg:py-3">
      <div>
        <span class="text-base font-bold font-primary text-dark-gunmetal">
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

const isFavoriteVehicle = ref<boolean>(false);

const toggleIsFavorite = (selectedVehicle: IVehicle) => {
  isFavoriteVehicle.value = !isFavoriteVehicle.value;
  const favoritesStore = useFavoritesVehicles();

  isFavoriteVehicle.value
    ? favoritesStore.addFavoriteVehicle(selectedVehicle)
    : favoritesStore.removeFavoriteVehicle(selectedVehicle.id);
};
</script>
