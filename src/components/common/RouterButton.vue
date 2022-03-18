<template>
  <router-link :to=to v-slot="{ isActive }">
    <Button :active=isActive>
      <slot/>
    </Button>
  </router-link>
</template>

<script>
import Button from "@/components/common/Button";

export default {
  name: "RouterButton",
  components: {
    Button
  },
  props: [
    'to'
  ]
}
</script>