<template>
  <NavBar/>

  <main>
    <RouterTransitionView/>
  </main>

  <Footer/>

</template>

<script>
import NavBar from "@/components/Navbar";
import RouterTransitionView from "@/components/common/misc/RouterTransitionView";
import Footer from "@/components/Footer";

export default {
  name: 'App',
  components: {
    Footer,
    RouterTransitionView,
    NavBar
  }
};
</script>

<style lang="scss">
@import "src/assets/scss/variables";
@import "src/assets/scss/common";
@import "src/assets/scss/fonts";

body {
  margin: 0;
}

* {
  box-sizing: border-box;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  font-family: Inconsolata, monospace;
  font-size: 16px;
  letter-spacing: 1px;
  color: $dark;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

main {
  flex-grow: 1;
}


h1, h2, h3, h4, h5, h6, p, span, a, ul, li, button {
  font-family: Inconsolata, monospace;
}

a {
  color: $dark;
}

</style>
