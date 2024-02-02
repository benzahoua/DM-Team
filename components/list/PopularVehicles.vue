<template>
  <div class="flex flex-col gap-5">
    <div class="flex justify-between items-center lg:mx-4">
      <h2 class="font-primary font-semibold text-blue-pewter capitalize">
        popular car
      </h2>
      <button
        class="font-primary font-semibold text-blue-royal capitalize cursor-pointer"
      >
        view all
      </button>
    </div>
    <div class="py-2">
      <div class="flex gap-x-8 overflow-x-auto no-scrollbar">
        <VehicleListItem container-direction="stacked" />
        <VehicleListItem container-direction="stacked" />
        <VehicleListItem container-direction="stacked" />
        <VehicleListItem container-direction="stacked" />
      </div>
    </div>
  </div>
</template>
