<template>
  <div
    class="flex cursor-pointer align-baseline w-fit"
    @click="$emit('clicked')"
  >
    <img class="w-5 h-5" :src="DeleteIcon" alt="Delete" />
  </div>
</template>

<script setup lang="ts">
import DeleteIcon from "@assets/img/delete.png";
defineEmits<{
  (e: "clicked"): void;
}>();
</script>

<style lang="scss" scoped></style>
