<template>
  <div
    class="flex cursor-pointer align-baseline w-fit"
    @click="$emit('clicked')"
  >
    <img class="w-4 h-4" :src="EditIcon" alt="Edit" />
  </div>
</template>

<script setup lang="ts">
import EditIcon from "@assets/img/edit.png";
defineEmits<{
  (e: "clicked"): void;
}>();
</script>

<style lang="scss" scoped></style>
