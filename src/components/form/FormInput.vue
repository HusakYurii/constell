<template>
  <div class="px-1 mb-5">
    <FormKit
      v-bind="attrs"
      input-class="custom-input"
      label-class="custom-label"
      message-class="custom-message"
    />
  </div>
</template>

<script setup lang="ts">
import { useAttrs } from "vue";

const attrs = useAttrs();
</script>

<style lang="scss">
.custom-input {
  border-color: $borderLight;
  border-width: 2px;
  border-radius: 4px;
  padding: 12px;
  width: 100%;
  background-color: $backgroundLight;

  @include font-space-grotesk-md-400($fontDark);
}

.custom-input:focus {
  outline: none;
}

.custom-label {
  @include font-space-grotesk-md-400($fontLight);
}

.custom-message {
  display: none;
}

[data-invalid] .formkit-input {
  border-color: red;
}
</style>
