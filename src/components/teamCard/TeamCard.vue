<template>
  <div
    class="h-20 w-full md:w-80 p-4 my-1 flex items-center justify-between rounded bg-backgroundLighter md:m-1"
  >
    <div class="flex items-center">
      <div
        class="h-10 w-10 rounded-full"
        :style="{ backgroundColor: data.color }"
      ></div>
      <p class="ml-4 select-none">{{ data.name }}</p>
    </div>
    <EditButton @clicked="onEditClicked" />
  </div>
</template>
<script setup lang="ts">
import { TeamCardProps } from "@local-types/components/teamCard";
import { EditButton } from "@components/buttons";

const props = defineProps<{
  data: TeamCardProps;
}>();

function onEditClicked() {
  console.log(`Handle edit action for the team id: ${props.data.id}`);
}
</script>
<style scoped lang="scss">
p {
  @include font-space-grotesk-sm-500($fontDark);
}
</style>
