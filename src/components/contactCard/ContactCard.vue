<template>
  <div
    class="h-20 w-full p-4 m-1 flex items-center justify-between rounded bg-teamCardBackgroundLight"
  >
    <div class="flex items-center w-full">
      <Avatar class="w-10 h-10" />
      <div class="flex flex-col w-full ml-3 mr-4 items-center md:flex-row">
        <div class="flex flex-row w-full items-center md:w-1/2">
          <div class="name-container flex flex-col md:w-1/2">
            <p>{{ data.displayName }}</p>
            <p class="hidden md:block">{{ data.fullName }}</p>
          </div>
          <p class="w-1/2 ml-2 md:ml-0">{{ data.role }}</p>
        </div>
        <div class="flex flex-row w-full items-center md:w-1/2">
          <p class="md:w-1/2">{{ data.email }}</p>
          <p class="block mx-1 md:hidden">|</p>
          <p class="w-1/2">
            {{ `${data.phoneCountryPrefix} ${data.phoneNumber}` }}
          </p>
        </div>
      </div>
      <div></div>
    </div>
    <DeleteButton @clicked="$emit('delete', data.id)" />
  </div>
</template>
<script setup lang="ts">
import { ContactCardProps } from "@local-types/components/contactCard";
import { DeleteButton } from "@components/buttons";
import { Avatar } from "@components/avatar";

defineProps<{
  data: ContactCardProps;
}>();

defineEmits<{
  (e: "delete", id: number): void;
}>();
</script>
<style scoped lang="scss">
p {
  @include font-space-grotesk-sm-500($fontLight);
  text-align: left;
}

.name-container {
  :first-child {
    @include font-space-grotesk-sm-500($fontDark);
  }
  :last-child {
    @include font-space-grotesk-sm-500($fontLight);
  }
}
</style>
