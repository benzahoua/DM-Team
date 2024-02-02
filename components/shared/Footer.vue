<template>
  <footer>
    <div class="w-full flex justify-center bg-white box-border">
      <div class="w-[95vw] lg:w-[90vw] max-w-full">
        <div
          class="flex flex-col lg:flex-row gap-8 justify-between px-3 py-5 lg:px-6 lg:py-15"
        >
          <div class="flex flex-col flex-1">
            <div>
              <i-Logo class="text-5xl text-blue-royal" />
            </div>
            <p
              class="lg:max-w-[290px] font-primary text-black-chinese text-opacity-60 text-sm md:text-base font-medium"
            >
              Our vision is to provide convenience and help increase your sales business.
            </p>
          </div>

          <div
            class="flex flex-wrap max-md:w-full max-md:gap-y-12 max-md:gap-x-16 gap-x-12 sm:max-lg:justify-between"
          >
            <div class="w-[150px] flex flex-col gap-4">
              <p
                class="font-primary text-dark-gunmetal text-xl font-semibold capitalize"
              >
                about
              </p>
              <div class="flex flex-col gap-y-3">
                <NuxtLink
                  v-for="item in aboutMenu"
                  :key="item.name"
                  class="font-primary font-medium text-black-chinese text-opacity-60"
                  :to="item.routeName"
                >
                  {{ item.name }}
                </NuxtLink>
              </div>
            </div>
            <div class="flex flex-col gap-4 md:order-3 w-[150px]">
              <p
                class="font-primary text-dark-gunmetal text-xl font-semibold capitalize"
              >
                socials
              </p>
              <div class="flex flex-col gap-y-3">
                <NuxtLink
                  v-for="item in socialsLinks"
                  :key="item.name"
                  class="font-primary font-medium text-black-chinese text-opacity-60"
                  :to="item.link"
                >
                  {{ item.name }}
                </NuxtLink>
              </div>
            </div>
            <div class="w-[150px] flex flex-col gap-4 md:order-2">
              <p
                class="font-primary text-dark-gunmetal text-xl font-semibold capitalize"
              >
                community
              </p>
              <div class="flex flex-col gap-y-3">
                <NuxtLink
                  v-for="item in communityMenu"
                  :key="item.name"
                  class="font-primary font-medium text-black-chinese text-opacity-60"
                  :to="item.routeName"
                >
                  {{ item.name }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <div class="hidden md:flex bg-gray-300 h-px w-full" />
        <div
          class="flex flex-col gap-y-8 md:flex-row px-3 lg:px-6 my-5 md:my-8"
        >
          <p
            class="order-2 md:order-1 flex-1 text-dark-gunmetal text-xs md:text-base font-primary font-semibold"
          >
            {{ "©" + new Date().getFullYear() }} DM. All rights reserved
          </p>
          <div
            class="order-1 md:order-2 md:gap-[60px] flex justify-between box-border"
          >
            <NuxtLink
              v-for="(page, index) in pages"
              :key="index + page.name"
              class="text-dark-gunmetal text-xs md:text-base font-primary font-semibold"
              :to="page.routeName"
            >
              {{ page.name }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const pages = [
  { name: "Privacy & Policy", routeName: "/" },
  { name: "Terms & Condition", routeName: "/" },
];

const aboutMenu = [
  { name: "How it works", routeName: "/" },
  { name: "Featured", routeName: "/" },
  { name: "Partnership", routeName: "/" },
  { name: "Business Relation", routeName: "/" },
];

const communityMenu = [
  { name: "Events", routeName: "/" },
  { name: "Blog", routeName: "/" },
  { name: "Podcast", routeName: "/" },
  { name: "Invite a friend", routeName: "/" },
];

const socialsLinks = [
  { name: "Discord", link: "/" },
  { name: "Instagram", link: "/" },
  { name: "Twitter", link: "/" },
  { name: "Facebook", link: "/" },
];
</script>
