<template>
  <div class="flex flex-row w-full max-md:justify-center md:gap-8">
    <div class="relative flex-col w-full p-6 md:flex-1 md:flex rounded-xl">
      <div class="max-w-[272px] flex flex-col z-20">
        <h2
          class="z-20 text-3xl font-semibold text-white capitalize font-primary"
        >
          The Best Platform for Car Rental
        </h2>
        <p class="z-20 mt-4 mb-5 text-sm text-white font-primary">
          Ease of doing a car rental safely and reliably. Of course at a low
          price.
        </p>
        <button
          class="z-20 py-3 text-white rounded cursor-pointer w-28 bg-blue-royal font-primary"
        >
          Rental Car
        </button>
      </div>
      <div class="w-full h-[115px] flex flex-row justify-center">
        <NuxtImg
          src="/images/hero-section1.png"
          class="z-10 object-contain"
        />
      </div>
      <NuxtImg
        src="/images/hero-section1-bg.png"
        class="absolute inset-0 w-full h-full"
      />
    </div>
    <div class="relative flex-col flex-1 hidden p-6 md:flex rounded-xl">
      <div class="max-w-[300px] flex flex-col z-20">
        <h2 class="text-3xl font-semibold text-white font-primary">
          Easy way to rent a car at a low price
        </h2>
        <p class="mt-4 mb-5 text-sm text-white font-primary">
          Providing cheap car rental services and safe and comfortable
          facilities.
        </p>
        <button
          class="z-20 py-3 text-white rounded cursor-pointer w-28 bg-blue-jeans font-primary"
        >
          Rental Car
        </button>
      </div>
      <div class="w-full h-[115px] flex flex-row justify-center">
        <NuxtImg
          src="/images/hero-section2.png"
          class="z-10 object-contain"
        />
      </div>
      <NuxtImg
        src="/images/hero-section2-bg.png"
        class="absolute inset-0 w-full h-full"
      />
    </div>
  </div>
</template>
