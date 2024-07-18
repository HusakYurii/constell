<template>
  <BaseContactPage :is-edit-mode="true" :userData @save-data="onSaveData" />
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import { getContactById, updateContact } from "@clients/contacts";
import { ContactDataResource } from "@local-types/resources/contacts";
import { BaseContactPage } from "../base";
import { useRequestWrapper } from "@shared/composables/useRequestWrapper";

const route = useRoute();
const { wrapCall, wrapGetCall } = useRequestWrapper(
  "Contact updated",
  "Action failed"
);
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
  const result = await wrapCall(updateContact(data.id, data));
  if (result) {
    userData.value = result;
  }
}

onBeforeMount(async () => {
  if (!Array.isArray(route.params.id)) {
    const result = await wrapGetCall(
      getContactById(parseInt(route.params.id, 10))
    );

    if (result) {
      userData.value = result;
    }
  }
});
</script>

<style scoped></style>
