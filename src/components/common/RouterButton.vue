<template>
  <router-link :to=to v-slot="{ isActive }" @click="onClick">
    <BaseButton :active=isActive>
      <slot>
        Link
      </slot>
    </BaseButton>
  </router-link>
</template>

<script>
import BaseButton from "@/components/common/BaseButton";

export default {
  name: "RouterButton",
  components: {
    BaseButton,
  },
  props: [
    'to',
  ],
  methods: {
    onClick: function () {
      this.$emit('routerButtonClick');
    }
  }
}
</script>