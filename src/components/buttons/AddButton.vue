<template>
  <div
    class="flex cursor-pointer align-baseline w-fit p-4"
    @click="$emit('clicked')"
  >
    <img class="w-4 h-4 mt-[0.1rem] mr-1" :src="AddIcon" alt="+" />
    <p class="underline">{{ label }}</p>
  </div>
</template>

<script setup lang="ts">
import AddIcon from "@assets/img/add.png";

defineProps<{ label: string }>();

defineEmits<{
  (e: "clicked"): void;
}>();
</script>

<style lang="scss" scoped>
p {
  @include font-space-grotesk-sm-500($fontDark);
}
</style>
