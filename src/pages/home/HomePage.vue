<template>
  <BasePageLayout title="Venue People" :hide-menu-bar-for-mobile="false">
    <template #pre-content>
      <div class="h-20 w-full">
        <!-- I hve nothing here but the mock shows the space here. It seems there should be some pre content-->
      </div>
    </template>
    <template #content>
      <TeamCardsWidget />
      <ContactCardsWidget />
    </template>
  </BasePageLayout>
</template>

<script setup lang="ts">
import { BasePageLayout } from "@components/pages";
import { TeamCardsWidget } from "@widgets/teams";
import { ContactCardsWidget } from "@widgets/contacts";
</script>

<style scoped></style>
