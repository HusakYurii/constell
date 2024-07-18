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
      :placeholder="currentPlaceholder"
      :validation="currentValidation"
      v-model="phoneNumber"
      class="px-0 mt-6 w-3/4"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { FormInput } from "./";

const placeholders: Record<string, string> = {
  "+31": "2436111117",
  "+380": "914811140",
};
const validation: Record<string, string> = {
  "+31": "required|matches:/^[0-9]{9}$/",
  "+380": "required|matches:/^[0-9]{9}$/",
};

const countryCode = ref("+31");
const phoneNumber = ref("");

const countryCodes = ref(["+31", "+380"]);

const currentPlaceholder = ref(placeholders[countryCode.value]);
const currentValidation = ref(validation[countryCode.value]);

watch(countryCode, (code) => {
  currentPlaceholder.value = placeholders[code];
  currentValidation.value = validation[code];
  console.log(countryCode.value, phoneNumber.value);
});
</script>

<style scoped></style>
