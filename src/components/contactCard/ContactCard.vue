<template>
  <div
    class="h-20 w-full p-4 flex items-center justify-between border-borderLight border-2 border-b-0 bg-backgroundLighter"
    :class="{
      'border-b-2': isLastChild,
      'rounded-t-xlg': isFirstChild,
      'rounded-b-xlg': isLastChild,
    }"
  >
    <div
      class="flex items-center w-full cursor-pointer"
      @click="$emit('clicked', data.id)"
    >
      <Avatar class="w-10 h-10" />
      <div class="flex flex-col w-full pl-3 pr-4 items-center md:flex-row">
        <div class="flex flex-row w-full items-center md:w-1/2">
          <div class="name-container flex flex-col md:w-1/2">
            <p>{{ data.displayName }}</p>
            <p class="hidden md:block">{{ data.fullName }}</p>
          </div>
          <p class="w-1/2 ml-2 md:ml-0">{{ data.role }}</p>
        </div>
        <div class="flex flex-row w-full items-center md:w-1/2">
          <p class="md:w-1/2 cursor-copy" @click="copyText">
            {{ data.email }}
          </p>
          <p class="block mx-1 md:hidden">|</p>
          <p class="w-1/2 cursor-copy" @click="copyText">
            {{ `${data.phoneCountryPrefix} ${data.phoneNumber}` }}
          </p>
        </div>
      </div>
      <div class="flex flex-row">
        <Avatar
          v-for="id in data.teamIds"
          :key="id"
          :color="teamsColors[id]"
          class="w-5 h-5"
        />
      </div>
    </div>
    <DeleteButton @clicked="$emit('delete', data.id)" />
  </div>
</template>
<script setup lang="ts">
import { ContactCardProps } from "@local-types/components/contactCard";
import { DeleteButton } from "@components/buttons";
import { Avatar } from "@components/avatar";
import { copyToClipboard } from "@shared/utils/clipbpard";

defineProps<{
  data: ContactCardProps;
  teamsColors: Record<number, string>;
  isFirstChild: boolean;
  isLastChild: boolean;
}>();

defineEmits<{
  (e: "delete", id: number): void;
  (e: "clicked", id: number): void;
}>();

async function copyText(event: Event) {
  event.stopPropagation();
  copyToClipboard((event.target as HTMLElement).innerText);
}
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
