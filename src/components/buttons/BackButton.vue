<template>
  <div
    class="flex cursor-pointer align-baseline w-fit p-4"
    @click="() => router.back()"
  >
    <img class="w-3 h-3 mt-[0.2rem]" :src="BackIcon" alt="<" />
    <p class="underline">Back</p>
  </div>
</template>

<script setup lang="ts">
import BackIcon from "@assets/img/arrow_back.png";
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<style lang="scss" scoped>
p {
  @include font-space-grotesk-sm-500($fontWhite);
}
</style>
