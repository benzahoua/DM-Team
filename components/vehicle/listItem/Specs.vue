<template>
  <div class="flex items-center gap-1">
    <i-Gasoline
      class="text-xl text-dark-gunmetal"
      filled
    />

    <span class="text-xs font-medium font-primary text-blue-pewter md:text-sm">
      {{ vehicleSpecs.gasolineLiter }} L
    </span>
  </div>
  <div class="flex items-center gap-1">
    <i-Transition
      class="text-xl text-dark-gunmetal"
      filled
    />

    <span class="text-xs font-medium font-primary text-blue-pewter md:text-sm">
      {{ vehicleSpecs.kindOfTransition }}
    </span>
  </div>
  <div class="flex items-center gap-1">
    <i-People
      class="text-xl text-dark-gunmetal"
      filled
    />

    <span class="text-xs font-medium font-primary text-blue-pewter md:text-sm">
      {{ vehicleSpecs.people }} People
    </span>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  vehicleSpecs: Pick<IVehicle, "gasolineLiter" | "kindOfTransition" | "people">;
}
defineProps<IProps>();
</script>
