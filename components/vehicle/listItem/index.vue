<template>
  <div
    class="w-full h-full max-w-[350px] min-w-[270px] max-h-[385px] lg:min-h-[385px] flex flex-col gap-2 p-4 lg:max-2xl:p-6 bg-white rounded-[10px]"
    :class="containerDirection ? 'min-h-[285px]' : 'min-h-[240px]'"
  >
    <div class="w-full flex justify-between">
      <h3
        class="text-left font-primary text-dark-gunmetal font-bold text-base lg:text-lg"
      >
        Koenigsegg
      </h3>
    </div>
    <h4
      class="text-left font-primary text-xs lg:text-sm font-medium text-blue-pewter capitalize"
    >
      sport
    </h4>
    <div
      class="flex flex-1 justify-between lg:flex-col gap-2"
      :class="{ 'flex-col': containerDirection === 'stacked' }"
    >
      <div class="flex-1 flex items-center justify-center">
        <div class="relative h-full lg:h-auto flex mx-auto">
          <NuxtImg
            src="/images/hero-section2.png"
            class="self-end lg:self-center w-[180px] md:w-[220px] object-contain"
          />
          <div
            class="absolute bottom-0 h-1/3 inset-x-0 bg-gradient-to-t from-white to-transparent"
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
    <div class="flex justify-between items-center py-2 lg:py-3 mt-5">
      <p
        class="font-primary font-bold text-base lg:text-lg xl:text-xl text-seconday-500"
      >
        $99.00/
        <span class="ml-1 xl:text-sm text-xs text-blue-pewter">day</span>
      </p>
      <NuxtLink
        class="px-3 py-2 rounded-md bg-blue-royal text-white text-sm max-sm:text-xs font-semibold capitalize cursor-pointer"
      >
        rent now
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  containerDirection?: "stacked";
}
defineProps<IProps>();
</script>
