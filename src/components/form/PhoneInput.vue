<template>
  <div class="flex items-center px-1">
    <FormInput
      type="select"
      name="countryCode"
      label="Phone number *"
      :options="countryCodes"
      v-model="countryCode"
      class="px-0 w-1/4 whitespace-nowrap"
    />
    <FormInput
      type="tel"
      name="phoneNumber"
      placeholder="XXXXXXXXXXXXXX"
      validation="required|number"
      v-model="phoneNumber"
      class="px-0 mt-6 w-3/4"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { ContactDataResource } from "@local-types/resources/contacts";
import { FormInput } from "./";

type ModelValues = Pick<
  ContactDataResource,
  "phoneCountryPrefix" | "phoneNumber"
>;

const props = defineProps<ModelValues>();
const emits = defineEmits<{
  (e: "update:phoneCountryPrefix", data: string): void;
  (e: "update:phoneNumber", data: string): void;
}>();

const countryCode = computed({
  get() {
    return props.phoneCountryPrefix;
  },
  set(newValue: string) {
    emits("update:phoneCountryPrefix", newValue);
  },
});
const phoneNumber = computed({
  get() {
    return props.phoneNumber;
  },
  set(newValue: string) {
    emits("update:phoneNumber", newValue);
  },
});

const countryCodes = ref(["+31", "+380"]);
</script>

<style scoped></style>
