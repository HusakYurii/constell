<template>
  <div>
    <input
      type="submit"
      class="cancel-button cursor-pointer"
      value="Cancel"
      @click="(e: Event) => {
        e.stopPropagation();
        e.preventDefault();
        $emit('clicked', e)
      }"
    />
  </div>
</template>

<script setup lang="ts">
defineEmits<{
  (e: "clicked", data: Event): void;
}>();
</script>

<style scoped lang="scss">
.cancel-button {
  border-width: 2px;
  border-radius: 20px;
  padding: 12px;
  width: 160px;
  border-color: $borderLight;
  background-color: $backgroundLighter;

  @include font-space-grotesk-md-400($fontDark);
}

.cancel-button:focus {
  outline: none;
}
</style>
