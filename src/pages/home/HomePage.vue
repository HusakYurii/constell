<template>
  <BasePageLayout>
    <template #content>
      <TeamCardsWidget />
    </template>
  </BasePageLayout>
</template>

<script setup lang="ts">
import { BasePageLayout } from "@components/pages";
import { TeamCardsWidget } from "@widgets/teams";
</script>

<style scoped></style>
