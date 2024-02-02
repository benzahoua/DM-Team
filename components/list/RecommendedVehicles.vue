<template>
  <div class="flex flex-col gap-5">
    <div class="flex justify-between items-center lg:mx-4">
      <h2 class="font-primary font-semibold text-blue-pewter capitalize">
        recommendation car
      </h2>
    </div>
    <div class="flex flex-col gap-y-[50px] items-center justify-center">
      <div
        class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center"
      >
        <VehicleListItem />
        <VehicleListItem />
        <VehicleListItem />
        <VehicleListItem />
        <VehicleListItem />
      </div>
      <button
        type="button"
        class="w-fit h-[45px] px-5 text-white font-primary font-semibold rounded-[4px] bg-blue-royal capitalize"
      >
        <span> show more cars </span>
      </button>
    </div>
  </div>
</template>
