<template>
  <div class="flex flex-row w-full max-md:justify-center md:gap-8">
    <div class="relative w-full flex-col md:flex-1 md:flex p-6 rounded-xl">
      <div class="max-w-[272px] flex flex-col z-20">
        <h2
          class="font-primary text-white text-3xl font-semibold capitalize z-20"
        >
          The Best Platform for Car Rental
        </h2>
        <p class="font-primary text-white text-sm mt-4 mb-5 z-20">
          Ease of doing a car rental safely and reliably. Of course at a low
          price.
        </p>
        <button
          class="w-28 py-3 bg-blue-royal text-white font-primary rounded z-20 cursor-pointer"
        >
          Rental Car
        </button>
      </div>
      <div class="w-full h-[115px] flex flex-row justify-center">
        <NuxtImg src="/images/hero-section1.png" class="object-contain z-10" />
      </div>
      <NuxtImg
        src="/images/hero-section1-bg.png"
        class="absolute inset-0 w-full h-full"
      />
    </div>
    <div class="relative hidden md:flex flex-1 flex-col p-6 rounded-xl">
      <div class="max-w-[300px] flex flex-col z-20">
        <h2 class="text-white font-primary text-3xl font-semibold">
          Easy way to rent a car at a low price
        </h2>
        <p class="text-white font-primary text-sm mt-4 mb-5">
          Providing cheap car rental services and safe and comfortable
          facilities.
        </p>
        <button
          class="w-28 py-3 bg-blue-jeans text-white font-primary rounded cursor-pointer z-20"
        >
          Rental Car
        </button>
      </div>
      <div class="w-full h-[115px] flex flex-row justify-center">
        <NuxtImg src="/images/hero-section2.png" class="object-contain z-10" />
      </div>
      <NuxtImg
        src="/images/hero-section2-bg.png"
        class="absolute inset-0 w-full h-full"
      />
    </div>
  </div>
</template>
