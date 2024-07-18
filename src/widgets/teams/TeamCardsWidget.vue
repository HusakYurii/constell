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
import { toast } from "vue3-toastify";
import { TeamDataResource } from "@local-types/resources/teams";
import { TeamCard } from "@components/teamCard";
import { AddButton } from "@components/buttons";
import { getTeams, createTeam } from "@clients/teams";

const teamData = ref<TeamDataResource[]>([]);

async function addNewTeam() {
  try {
    const created = await createTeam();
    teamData.value.push(created);
    toast.success("Team created", { autoClose: 1000 });
  } catch (error) {
    toast.error("Action failed");
  }
}

onMounted(() => {
  getTeams().then((data) => {
    teamData.value = data;
  });
});
</script>
<style scoped lang="scss">
p {
  @include font-space-grotesk-xsm-300($fontLight);
}
</style>
