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
            :config="{ validationVisibility: 'submit' }"
            :actions="false"
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
              />
              <FormInput
                type="text"
                name="initials"
                label="Initials *"
                placeholder="Y.O"
                validation="required"
                class="w-full md:w-1/2"
              />
            </div>
            <FormInput
              type="text"
              name="displayName"
              label="Display name"
              placeholder="Johnny"
              class="w-full"
            />
            <FormInput
              type="text"
              name="role"
              label="Role"
              placeholder="Singer"
              class="w-full"
            />
            <div class="flex flex-col w-full md:flex-row">
              <FormInput
                type="email"
                name="email"
                label="Email *"
                placeholder="email@here.com"
                validation="required|email"
                class="w-full md:w-1/2"
              />
              <PhoneInput class="w-full md:w-1/2" />
            </div>
            <FormInput
              type="text"
              name="street"
              label="Street"
              placeholder=""
              class="w-full"
            />
            <div class="flex flex-col w-full md:flex-row">
              <FormInput
                type="text"
                name="city"
                label="City"
                placeholder=""
                class="w-full md:w-1/2"
              />
              <FormInput
                type="text"
                name="postalCode"
                label="Postal code"
                placeholder=""
                class="w-full md:w-1/2"
              />
            </div>
            <FormInput
              type="text"
              name="country"
              label="Country"
              placeholder=""
              class="w-full"
            />
          </FormKit>
        </div>
      </div>
    </template>
  </BasePageLayout>
</template>

<script setup lang="ts">
import { BasePageLayout } from "@components/pages";
import { FormInput, PhoneInput } from "@components/form";
import { Avatar } from "@components/avatar";
import { EditButton } from "@components/buttons";

defineProps<{
  isEditMode: boolean;
}>();

function handleSubmit(...args: any[]) {
  console.log(args);
}
</script>

<style lang="scss"></style>
