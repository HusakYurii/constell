<template>
  <div
    class="w-full h-screen flex flex-col bg-backgroundLight md:flex-row-reverse"
  >
    <div class="w-full overflow-y-scroll">
      <div class="h-[60px] flex items-center justify-between bg-backgroundDark">
        <BackButton />
        <p class="header-logo">{{ title }}</p>
        <p class="placeholder">empty</p>
      </div>
      <div class="px-1 py-2 md:px-4 lg:px-8 w-full content-height">
        <div class="w-full">
          <slot name="pre-content"></slot>
        </div>
        <div>
          <slot name="content"></slot>
        </div>
      </div>
    </div>
    <div
      class="w-full h-14 border-borderDark border-t-2 md:border-borderLight md:border-r-2 md:w-14 md:h-full"
      :class="`flex flex-col content-center items-center justify-between ${
        hideMenuBarForMobile ? 'hidden md:flex' : ''
      }`"
    >
      <div class="hidden md:block mt-10 mb-24">
        <Icon class="w-8 h-12" :src="Logo" />
      </div>
      <div
        class="relative w-full h-full flex flex-row content-center items-center justify-around md:justify-start md:flex-col"
      >
        <Icon
          v-for="src in centerIcons"
          class="w-8 h-8 md:w-5 md:h-5 md:mb-10"
          :class="{ 'position-center-for-mobile': src === Stars }"
          :src="src"
          :key="src"
        />
      </div>
      <div
        class="hidden mb-4 flex-col content-center items-center justify-evenly md:flex"
      >
        <Icon
          v-for="src in bottomIcons"
          class="w-8 h-8 md:w-5 md:h-5 mb-10"
          :src="src"
          :key="src"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Stars from "@assets/img/stars.png";
import Logo from "@assets/img/logo.png";
import Calendar from "@assets/img/calendar.png";
import CurrencyPound from "@assets/img/currency_pound.png";
import Account from "@assets/img/account.png";
import Search from "@assets/img/search.png";
import Info from "@assets/img/info.png";
import Pentagon from "@assets/img/pentagon.png";
import { BackButton } from "@components/buttons";
import { Icon } from "@components/icon";

const centerIcons = [Calendar, Stars, Account, CurrencyPound, Pentagon];
const bottomIcons = [Info, Search];

defineProps<{
  title: string;
  hideMenuBarForMobile: boolean;
}>();
</script>

<style lang="scss" scoped>
.header-logo {
  @include font-cormorant-infant-lg-500($fontWhite);
}
.placeholder {
  @include font-cormorant-infant-lg-500($backgroundDark);
}
.content-height {
  height: calc(100vh - 60px - 3.5rem);
}

@media (max-width: 768px) {
  .position-center-for-mobile {
    position: absolute;
    background-color: $backgroundLight;
    transform: translateY(-15px);
    scale: 2;
    border: 1px solid $backgroundDark;
    border-radius: 50%;
  }
}
</style>
