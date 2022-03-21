<template>
  <div class="container">

    <section class="about">
      <div>
        <h1>
          {{ $t('me.name') }}
          <span>{{ $t('me.surname') }}</span>
        </h1>
        <h2>{{ $t('me.position') }}</h2>
      </div>
    </section>

    <section class="terminal__wrapper">
      <Terminal/>
    </section>

  </div>
</template>

<script>
import Terminal from "../components/Terminal/Terminal";

export default {
  name: "HomeView",
  components: {
    Terminal
  }
};
</script>

<style lang="scss" scoped>
@import "src/assets/scss/variables";

.container {
  display: flex;
  flex-direction: column;
  height: inherit;

  @media(min-width: $lg) {
    flex-direction: row;
  }
}

.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 0;

  h1 {
    font-size: 4rem;

    span {
      font-weight: 700;
    }

    @media(min-width: $lg) {
      font-size: 6rem;
    }

    @media(min-width: $xl) {
      font-size: 7rem;
    }

    @media(min-width: $ultraWide) {
      font-size: 9rem;
    }
  }

  h2 {
    font-size: 1.25rem;

    @media(min-width: $md) {
      font-size: 1.5rem;
    }
  }

  h1, h2 {
    line-height: 1.2;
  }
}

.terminal__wrapper {
  background-color: $yellow;
  margin: 0.5rem -0.5rem;
  padding: 0.5rem;
  flex-grow: 1;
  max-height: 500px;

  @media(min-width: $sm) {
    padding: 1rem;
    margin: 1rem 0;
  }

  @media(min-width: $lg) {
    flex-grow: unset;
    margin: 0;
    padding: 1rem 0 0 2rem;
    max-height: unset;

    &::after {
      content: "";
      position: absolute;
      display: block;
      height: 100%;
      width: 50vw;
      z-index: 1;
      top: 0;
      background-color: $yellow;
      margin-left: calc(100% - 2rem);
    }
  }
}

.about,
.terminal__wrapper {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media(min-width: $lg) {
    width: 50%;
    height: 100%;
  }
}
</style>