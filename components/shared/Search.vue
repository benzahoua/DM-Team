<template>
  <div class="relative w-full">
    <div
      class="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3"
    >
      <i-Search class="mr-2 text-xl cursor-pointer fill-none lg:mr-5" filled />
    </div>
    <input
      id="searchInput"
      v-model="searchInput"
      type="search"
      class="w-full p-3 text-sm border rounded-full ps-10 focus:outline-none"
      placeholder="Search something here"
    />

    <div
      v-if="unfilteredSearchResults.length > 0 && shouldDisplayResults"
      id="searchResults"
      class="absolute z-50 w-full bg-white rounded-lg shadow-xl"
      @click.away="hideSearchResults"
    >
      <template v-for="res in filteredSearchResults" :key="res.id">
        <NuxtLink :to="`/vehicle/${res.id}`">
          <div
            class="flex items-center px-5 py-1 mb-2 font-semibold cursor-pointer"
          >
            <NuxtImg
              :src="res.img"
              class="object-contain p-1  w-14 h-14"
            />
            <span class="ml-2">
              <template
                v-for="(part, index) in applyHighlightToSearchResult(res.name)"
                :key="index"
              >
                <span
                  class="font-primary lg:text-sm text-blue-pewter"
                  :class="
                    part.highlighted
                      ? 'bg-blue-jeans text-white '
                      : ''
                  "
                >{{ part.text }}</span>
              </template>
            </span>
          </div>
        </NuxtLink>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
const searchInput = ref<string>('');
const unfilteredSearchResults = ref<IVehicle[]>([]);
const shouldDisplayResults = ref(false);

const filteredSearchResults = computed(() => {
  if (!searchInput.value) return [];
  return unfilteredSearchResults.value;
});

const executeSearch = useDebounce(async () => {
  const apiUrl = `/api/cars?q=${searchInput.value}`;
  const { data: result } = await useFetch<{ data: IVehicle[] }>(apiUrl);
  unfilteredSearchResults.value = result?.value?.data || [];
  shouldDisplayResults.value = filteredSearchResults.value.length > 0;
}, 500);

watchEffect(() => {
  if (!searchInput.value) return;
  executeSearch();
});

const applyHighlightToSearchResult = (resultName: string) => {
  const parts = resultName.split(new RegExp(`(${searchInput.value})`, 'gi'));
  return parts.map((part) => ({
    text: part,
    highlighted: part.toLowerCase() === searchInput.value.toLowerCase(),
  }));
};
const hideSearchResults = () => {
  shouldDisplayResults.value = false;
};
</script>
