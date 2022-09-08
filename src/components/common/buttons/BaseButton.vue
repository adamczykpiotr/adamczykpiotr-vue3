<template>
  <button class="btn" :class="{'btn--active': active, 'btn--disabled': disabled}">
    <slot>
      Button
    </slot>
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: [
    'active',
    'disabled'
  ],
}
</script>

<style scoped lang="scss">
@import "src/assets/scss/variables";

.btn {
  padding: 0.5rem 1rem;
  border: 1px solid $yellow;
  font-size: 1rem;
  cursor: pointer;
  background-color: transparent;
  transition: background-color 0.3s ease;

  &:hover,
  &--active {
    background-color: $yellow;
  }

  &--disabled {
    cursor: not-allowed;

      &:hover {
        background-color: #eee;
      }
  }
}
</style>