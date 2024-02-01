<template>
  <div class="min-h-screen flex flex-col">
    <SharedHeader />
    <div class="flex-1 w-full max-lg:px-6 bg-cultured">
      <slot />
    </div>
    <SharedFooter />
  </div>
</template>
