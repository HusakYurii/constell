<template>
  <BasePageLayout
    :title="isEditMode ? 'Edit user' : 'Create user'"
    :hide-menu-bar-for-mobile="true"
  >
    <template #pre-content>
      <div class="h-20 w-full hidden md:block">
        <!-- I hve nothing here but the mock shows the space here. It seems there should be some pre content-->
      </div>
    </template>
    <template #content>
      <div class="flex flex-col md:flex-row">
        <div
          class="relative self-center w-20 h-20 my-8 md:my-0 md:mx-8 md:self-start"
        >
          <Avatar class="w-20 h-20 mx-auto" />
          <div
            class="absolute w-8 h-8 right-0 bottom-0 bg-backgroundLighter rounded-full border-borderDark border-[1px]"
          >
            <EditButton class="scale-100 translate-x-1/2 translate-y-1/2" />
          </div>
        </div>
        <div class="w-full">
          <FormKit
            type="form"
            :actions="false"
            messages-class="form-messages-custom"
            @submit="handleSubmit"
          >
            <div class="flex flex-col w-full md:flex-row">
              <FormInput
                type="text"
                name="fullName"
                label="Full name *"
                placeholder="John Doe"
                validation="required"
                class="w-full md:w-1/2"
                v-model="userData.fullName"
              />
              <FormInput
                type="text"
                name="initials"
                label="Initials *"
                placeholder="Y.O"
                validation="required"
                class="w-full md:w-1/2"
                v-model="userData.initials"
              />
            </div>
            <FormInput
              type="text"
              name="displayName"
              label="Display name"
              placeholder="Johnny"
              class="w-full"
              v-model="userData.displayName"
            />
            <FormInput
              type="text"
              name="role"
              label="Role"
              placeholder="Singer"
              class="w-full"
              v-model="userData.role"
            />
            <div class="flex flex-col w-full md:flex-row">
              <FormInput
                type="email"
                name="email"
                label="Email *"
                placeholder="email@here.com"
                validation="required|email"
                class="w-full md:w-1/2"
                v-model="userData.email"
              />
              <PhoneInput
                class="w-full md:w-1/2"
                v-model:phone-country-prefix="userData.phoneCountryPrefix"
                v-model:phone-number="userData.phoneNumber"
              />
            </div>
            <FormInput
              type="text"
              name="addressLineOne"
              label="Street"
              class="w-full"
              v-model="userData.address.addressLineOne"
            />
            <FormInput
              type="text"
              name="addressLineTwo"
              class="w-full"
              v-model="userData.address.addressLineTwo"
            />
            <div class="flex flex-col w-full md:flex-row">
              <FormInput
                type="text"
                name="city"
                label="City"
                placeholder=""
                class="w-full md:w-1/2"
                v-model="userData.address.city"
              />
              <FormInput
                type="text"
                name="postalCode"
                label="Postal code"
                placeholder=""
                class="w-full md:w-1/2"
                v-model="userData.address.postalCode"
              />
            </div>
            <FormInput
              type="text"
              name="country"
              label="Country"
              placeholder=""
              class="w-full"
              v-model="userData.address.country"
            />
            <div
              class="flex flex-wrap w-full h-24 align-baseline content-center justify-center bg-backgroundLighter md:justify-end md:bg-backgroundLight"
            >
              <CancelButton class="mx-2" @clicked="routeUserBack" />
              <SaveButton class="mx-2" @clicked="saveChanges" />
            </div>
          </FormKit>
        </div>
      </div>
    </template>
  </BasePageLayout>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { ContactDataResource } from "@local-types/resources/contacts";
import { BasePageLayout } from "@components/pages";
import {
  FormInput,
  PhoneInput,
  SaveButton,
  CancelButton,
} from "@components/form";
import { Avatar } from "@components/avatar";
import { EditButton } from "@components/buttons";

const props = defineProps<{
  isEditMode: boolean;
  userData: ContactDataResource;
}>();

const emits = defineEmits<{
  (e: "saveData", data: ContactDataResource): void;
}>();
const router = useRouter();
const userData = ref<ContactDataResource>(props.userData);

watch(
  () => props.userData,
  (resource) => {
    userData.value = resource;
  },
  { immediate: true }
);

function handleSubmit() {
  emits("saveData", userData.value);
}

function saveChanges() {
  emits("saveData", userData.value);
}
function routeUserBack() {
  router.back();
}
</script>

<style lang="scss">
.form-messages-custom {
  visibility: hidden;
}
</style>
