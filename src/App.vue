<template>

  <NavBar/>

  <div class="container">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/cv">CV</router-link>
    </nav>
  </div>

  <router-view/>

</template>

<script>
import NavBar from "@/components/Navbar";

export default {
  name: 'App',
  components: {
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
