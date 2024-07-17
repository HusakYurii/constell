<template>
  <div class="rounded-full" :style="{ backgroundColor: color || '#6aa0f7' }">
    <img v-if="imageURL" :src="imageURL" alt="" />
  </div>
</template>
<script setup lang="ts">
defineProps<{
  color?: string;
  imageURL?: string;
}>();
</script>
<style scoped lang="scss"></style>
