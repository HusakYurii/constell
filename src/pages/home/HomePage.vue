<template>
  <BasePageLayout>
    <template #content>
      <TeamCardsWidget />
    </template>
  </BasePageLayout>
</template>

<script setup lang="ts">
import { BasePageLayout } from "@components/pages";
import { TeamCardsWidget } from "@widgets/teamCards";
</script>

<style scoped></style>
