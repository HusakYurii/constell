<template>
  <div>
    <p class="py-2 px-4">People</p>
    <div class="flex flex-col content-evenly flex-wrap md:flex-row"></div>
    <div>
      <AddButton label="New User" @clicked="addNewUser" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { UserDataResource } from "@local-types/resources/users";
import { AddButton } from "@components/buttons";
import { getUsers } from "@clients/users";

const teamData = ref<UserDataResource[]>([]);
const router = useRouter();
async function addNewUser() {
  router.push("/contacts/create");
}

onMounted(() => {
  getUsers().then((data) => {
    teamData.value = data;
  });
});
</script>
<style scoped lang="scss">
p {
  @include font-space-grotesk-xsm-300($fontLight);
}
</style>
