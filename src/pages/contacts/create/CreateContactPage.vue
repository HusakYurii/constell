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
import { useLoading } from "vue3-loading-overlay";
import { ContactDataResource } from "@local-types/resources/contacts";
import { createContact } from "@clients/contacts";
import { BaseContactPage } from "../base";
import { useRequestWrapper } from "@shared/composables/useRequestWrapper";

const router = useRouter();
const { wrapCall } = useRequestWrapper("Contact created", "Action failed");
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
  await wrapCall(createContact(data), (item) =>
    router.replace(`/contacts/${item.id}`)
  );
}
</script>

<style scoped></style>
