<template>
  <div>
    <p class="py-2 px-4">TEAMS</p>
    <div class="flex flex-col content-evenly flex-wrap md:flex-row">
      <TeamCard v-for="team in teamData" :key="team.id" :data="team" />
    </div>
    <div>
      <AddButton label="New Team" @clicked="addNewTeam" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { TeamDataResource } from "@local-types/resources/teams";
import { TeamCard } from "@components/teamCard";
import { AddButton } from "@components/buttons";
import { getTeams, createTeam } from "@clients/teams";
import { useRequestWrapper } from "@shared/composables/useRequestWrapper";

const teamData = ref<TeamDataResource[]>([]);
const { wrapCall, wrapGetCall } = useRequestWrapper(
  "Team created",
  "Action failed"
);
async function addNewTeam() {
  const response = await wrapCall(createTeam());
  if (response) {
    teamData.value.push(response);
  }
}

onMounted(async () => {
  const response = await wrapGetCall(getTeams());
  if (response) {
    teamData.value = response;
  }
});
</script>
<style scoped lang="scss">
p {
  @include font-space-grotesk-xsm-300($fontLight);
}
</style>
