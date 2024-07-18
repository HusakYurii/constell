<template>
  <BaseContactPage :is-edit-mode="true" :userData @save-data="onSaveData" />
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import { toast } from "vue3-toastify";
import { getContactById, updateContact } from "@clients/contacts";
import { ContactDataResource } from "@local-types/resources/contacts";
import { BaseContactPage } from "../base";

const route = useRoute();

const userData = ref<ContactDataResource>({
  id: -1,
  fullName: "",
  displayName: "",
  initials: "",
  email: "",
  phoneNumber: "",
  phoneCountryPrefix: "",
  teamIds: [],
  image: null,
  address: {
    id: -1,
    addressLineOne: "",
    addressLineTwo: "",
    city: "",
    country: "",
    postalCode: "",
    state: "",
  },
  isEmployee: true,
  role: "",
  userPermissions: [],
});

async function onSaveData(data: ContactDataResource) {
  try {
    const result = await updateContact(data.id, data);
    userData.value = result;
    toast.success("Contact updated", { autoClose: 1000 });
  } catch (error) {
    toast.error("Action failed");
  }
}

onBeforeMount(async () => {
  if (!Array.isArray(route.params.id)) {
    const data = await getContactById(parseInt(route.params.id, 10));
    userData.value = data;
  }
});
</script>

<style scoped></style>
