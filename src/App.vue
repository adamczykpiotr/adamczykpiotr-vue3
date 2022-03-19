<template>
  <NavBar/>

  <main>
    <RouterTransitionView/>
  </main>

</template>

<script>
import NavBar from "@/components/Navbar";
import RouterTransitionView from "@/components/common/misc/RouterTransitionView";

export default {
  name: 'App',
  components: {
    RouterTransitionView,
    NavBar
  }
};
</script>

<style lang="scss">
@import "assets/scss/variables";
@import "assets/scss/common";
@import "assets/scss/fonts";

body {
  margin: 0;
}

* {
  box-sizing: border-box;
}

#app {
  font-family: Inconsolata, monospace;
  font-size: 16px;
  letter-spacing: 1px;
  color: $dark;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3, h4, h5, h6, p, span, a, ul, li, button {
  font-family: Inconsolata, monospace;
}

a {
  color: $dark;
}

</style>
