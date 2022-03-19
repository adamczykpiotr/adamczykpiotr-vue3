<template>
  <footer>
    <div class="container">
      <p>{{ $t('footer.copyright', {'year': ((year > 2020) ? `2020 - ${year}` : year), 'author': $t('me.fullName')}) }}</p>
    </div>
  </footer>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Footer",
  data() {
    return {
      year: new Date().getFullYear(),
    }
  },
};
</script>

<style lang="scss" scoped>
@import "src/assets/scss/_variables.scss";

footer {
  background-color: $yellow;
  font-weight: 500;
}

p {
  margin: 0.5rem 0;
}
</style>