<template>
  <BasePageLayout>
    <template #pre-content>
      <div class="h-20 w-full">
        <!-- Since I have nothing here in the mock, I assume here is some pre-content because of the space left-->
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
