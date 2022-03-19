<template>

  <router-view v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>

</template>

<script>
export default {
  name: "RouterTransitionView"
}
</script>

<style lang="scss" scoped>
/*
  From:
  https://www.youtube.com/watch?v=X4I6zUEM40A
  https://github.com/iamshaunjp/vue-animations/blob/lesson-12/src/App.vue
*/
.route-enter-from,
.route-leave-to {
  opacity: 0;
}

.route-enter-active {
  transition: all 0.1s ease-out;
}

.route-leave-active {
  transition: all 0.1s ease-in;
}
</style>