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

      <div
        class="order-3 lg:order-2 flex w-full lg:flex-1 bg-white py-3 px-6 lg:px-5 max-lg:mt-4 lg:ml-16 lg:mr-8 rounded-[10px] lg:rounded-full border border-blue-pewter/40"
      >
        <i-Search
          class="fill-none mr-2 lg:mr-5 text-xl cursor-pointer"
          filled
        />
        <input
          type="search"
          class="flex-1 outline-none text-hint-400 text-sm font-medium font-primary"
          placeholder="Search something here"
        >
      </div>

      <div
        class="w-10 h-10 grid place-items-center order-2 lg:order-3 rounded-full border border-blue-pewter/40 cursor-pointer"
      >
        <i-Heart class="text-xl text-blue-pewter" />
      </div>
    </div>
  </header>
</template>
