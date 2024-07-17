<template>
  <BasePageLayout>
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
