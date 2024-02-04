<template>
  <div
    class="max-w-[1500px] mx-auto flex flex-col gap-8 pt-8 pb-16 lg:pl-[70px] lg:pr-[58px]"
  >
    <Hero />
    <ListPopularVehicles />
    <ListRecommendedVehicles :show-more-vehicles="true" />
  </div>
</template>
