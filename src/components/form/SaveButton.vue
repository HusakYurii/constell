<template>
  <div>
    <FormKit
      type="submit"
      input-class="custom-save-button-input"
      @click="(e: Event) => {
        e.stopPropagation();
        e.preventDefault();
        $emit('clicked', e)
      }"
    >
      Save changes
    </FormKit>
  </div>
</template>

<script setup lang="ts">
defineEmits<{
  (e: "clicked", data: Event): void;
}>();
</script>

<style lang="scss">
.custom-save-button-input {
  border-width: 2px;
  border-radius: 20px;
  padding: 12px;
  width: 160px;
  background-color: $backgroundDark;

  @include font-space-grotesk-md-400($fontWhite);
}

.custom-save-button-input:focus {
  outline: none;
}
</style>
