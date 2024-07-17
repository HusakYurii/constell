<template>
  <div
    class="h-20 w-full md:w-80 p-4 m-1 flex items-center justify-between rounded bg-teamCardBackgroundLight"
  >
    <div class="flex items-center">
      <div
        class="h-10 w-10 rounded-full"
        :style="{ backgroundColor: data.color }"
      ></div>
      <p class="ml-4 select-none">{{ data.name }}</p>
    </div>
    <EditButton />
  </div>
</template>
<script setup lang="ts">
import { TeamCardProps } from "@local-types/components/teamCard";
import { EditButton } from "@components/buttons";

defineProps<{
  data: TeamCardProps;
}>();
</script>
<style scoped lang="scss">
p {
  @include font-space-grotesk-sm-500($fontDark);
}
</style>
