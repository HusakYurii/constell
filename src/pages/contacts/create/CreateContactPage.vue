<template>
  <BaseContactPage
    :is-edit-mode="false"
    :userData="emptyData"
    @save-data="onSaveData"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { toast } from "vue3-toastify";
import { ContactDataResource } from "@local-types/resources/contacts";
import { createContact } from "@clients/contacts";
import { BaseContactPage } from "../base";

const router = useRouter();
const emptyData = ref<ContactDataResource>({
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
    const result = await createContact(data);
    await router.replace(`/contacts/${result.id}`);
    toast.success("Contact created", { autoClose: 1000 });
  } catch (error) {
    toast.error("Action failed");
  }
}
</script>

<style scoped></style>
