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
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: $dark;
}

main {
  display: flex;
  flex-grow: 1;
  overflow-x: hidden;
}


h1, h2, h3, h4, h5, h6, p, span, a, ul, li, button, input {
  font-family: Inconsolata, monospace;
}

h1, h2, h3, h4, h5, h6 {
  margin-top: 0;
  margin-bottom: .5rem;
  font-weight: 500;
}

.h1 {
  font-size: 2.5rem
}

h2 {
  font-size: 2rem
}

h3 {
  font-size: 1.75rem
}

h4 {
  font-size: 1.5rem
}

h5 {
  font-size: 1.25rem
}

h6 {
  font-size: 1rem
}

a {
  color: $dark;
}

p {
  margin-top: 0;
  margin-bottom: 1rem;
}

input {
  font-size: 1rem;
}

kbd {
  display: inline-flex;
  border: 1px solid $yellow;
  text-transform: uppercase;
  padding: 0.1em 0.75em;
  border-radius: 0;
  background: transparent;
  line-height: 1;
}

::selection {
  background: $yellow;
  color: $dark;
}
</style>
