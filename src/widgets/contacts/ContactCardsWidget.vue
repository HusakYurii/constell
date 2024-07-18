<template>
  <div>
    <p class="py-2 px-4">PEOPLE</p>
    <div class="flex flex-col">
      <ContactCard
        v-for="(contact, i) in contacts"
        :key="contact.id"
        :data="contact"
        :teams-colors="teamsColors"
        :is-first-child="i === 0"
        :is-last-child="i === contacts.length - 1"
        @delete="deleteItem"
        @clicked="editItem"
      />
    </div>
    <div>
      <AddButton label="New User" @clicked="addNewUser" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { toast } from "vue3-toastify";
import { ContactDataResource } from "@local-types/resources/contacts";
import { AddButton } from "@components/buttons";
import { ContactCard } from "@components/contactCard";
import { getContacts, deleteContact } from "@clients/contacts";
import { getTeams } from "@clients/teams";
import { useRequestWrapper } from "@shared/composables/useRequestWrapper";

const contacts = ref<ContactDataResource[]>([]);
const teamsColors = ref<Record<number, string>>({});
const router = useRouter();
const { wrapCall } = useRequestWrapper("Contact deleted", "Action failed");

async function addNewUser() {
  router.push("/contacts/create");
}

async function editItem(id: number) {
  router.push(`/contacts/${id}`);
}

async function deleteItem(id: number) {
  const result = await wrapCall(deleteContact(id));
  if (result) {
    contacts.value = contacts.value.filter((val) => val.id !== result.id);
  }
}

onMounted(async () => {
  const [contactsData, teamsData] = await Promise.all([
    getContacts(),
    getTeams(),
  ]);
  contacts.value = contactsData;
  teamsData.forEach(({ id, color }) => {
    teamsColors.value[id] = color;
  });
});
</script>
<style scoped lang="scss">
p {
  @include font-space-grotesk-xsm-300($fontLight);
}
</style>
