<template>
  <div @click="toggleIsFavorite">
    <i-FilledHeart
      v-if="isFavorite"
      class="text-xl cursor-pointer"
      filled
    />
    <i-Heart
      v-else
      class="text-xl cursor-pointer"
      filled
    />
  </div>
</template>
<script setup lang="ts">
let { isFavorite } = defineProps({
  isFavorite: {
    type: Boolean,
    default: false,
    requered: true,
  }
});

const emit = defineEmits(["updateIsFavorite"])

const toggleIsFavorite = () => {
  isFavorite = !isFavorite
  emit("updateIsFavorite", isFavorite)
}
</script>
