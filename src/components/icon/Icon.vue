<template>
  <div class="flex cursor-pointer align-baseline" @click="$emit('clicked')">
    <img class="w-full h-full" :src="src" alt="" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  src: string;
}>();
defineEmits<{
  (e: "clicked"): void;
}>();
</script>

<style lang="scss" scoped></style>
