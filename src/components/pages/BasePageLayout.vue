<template>
  <div class="w-full h-screen flex bg-backgroundLight">
    <div class="w-14 h-full border-borderLight border-r-2">
      <div>Menu</div>
    </div>
    <div class="w-full">
      <div class="h-[60px] flex items-center justify-between bg-backgroundDark">
        <BackButton />
        <p class="header-logo">Venue People</p>
        <div></div>
      </div>
      <div class="px-8">
        <div class="h-20 w-full">
          <!-- Since I have nothing here in the mock, I assume here is some pre-content -->
          <slot name="pre-content"></slot>
        </div>
        <div>
          <slot name="content"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BackButton } from "@components/buttons";
</script>

<style lang="scss" scoped>
.header-logo {
  @include font-cormorant-infant-lg-500($fontWhite);
}
</style>
