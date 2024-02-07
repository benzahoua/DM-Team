<template>
  <header
    class="w-full lg:h-[124px] bg-gray-50 lg:bg-white lg:border lg:border-b lg:border-blue-pewter/40"
  >
    <div
      class="w-[95vw] lg:w-[90vw] lg:px-6 px-3 h-full mx-auto flex items-center flex-wrap max-lg:justify-between max-lg:pt-10 pb-[10px]"
    >
      <NuxtLink to="/">
        <i-Logo class="mr-5 text-5xl text-blue-royal" />
      </NuxtLink>

      <div class="order-3 lg:order-2 flex w-full lg:flex-1 px-3">
        <SharedSearch />
      </div>

      <div
        class="grid order-2 w-10 h-10 border rounded-full cursor-pointer place-items-center lg:order-3 border-blue-pewter/40"
      >
        <i-Heart class="text-xl text-blue-pewter" />
      </div>
    </div>
  </header>
</template>
