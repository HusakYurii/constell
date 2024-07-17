<template>
  <div>
    <p class="py-2 px-4">PEOPLE</p>
    <div class="flex flex-col">
      <ContactCard
        v-for="contact in contacts"
        :key="contact.id"
        :data="contact"
        @delete="deleteItem"
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
import { ContactDataResource } from "@local-types/resources/contacts";
import { AddButton } from "@components/buttons";
import { ContactCard } from "@components/contactCard";
import { getContacts, deleteContact } from "@clients/contacts";

const contacts = ref<ContactDataResource[]>([]);
const router = useRouter();

async function addNewUser() {
  router.push("/contacts/create");
}

async function deleteItem(id: number) {
  const result = await deleteContact(id);
  contacts.value = contacts.value.filter((val) => val.id !== result.id);
}

onMounted(() => {
  getContacts().then((data) => {
    contacts.value = data;
  });
});
</script>
<style scoped lang="scss">
p {
  @include font-space-grotesk-xsm-300($fontLight);
}
</style>
