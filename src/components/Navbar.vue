<template>
  <nav class="navbar">
    <div class="container">

      <router-link class="navbar__brand" to="/">
        Adamczyk Piotr
      </router-link>

      <HamburgerButton @hamburgerToggle="onHamburgerToggle" @click="a"/>

      <div class="navbar__collapse" ref="collapse">
        <div class="navbar__collapse__inner" ref="collapseInner">

          <div class="navbar__links">
            <RouterButton to="/" @click="hideMenu">
              Home
            </RouterButton>
            <RouterButton to="/cv" @click="hideMenu">
              CV
            </RouterButton>
          </div>

          <!-- TODO: Language switch -->
          <div class="navbar__lang">
            <BaseButton :active=true>EN</BaseButton>
            <BaseButton>PL</BaseButton>
          </div>

        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import RouterButton from "@/components/common/RouterButton";
import HamburgerButton from "@/components/common/HamburgerButton";
import BaseButton from "@/components/common/BaseButton";

export default {
  name: 'NavBar',
  components: {BaseButton, HamburgerButton, RouterButton},
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    onHamburgerToggle: function (e) {
      this.isOpen = e.isOpen;
      this.a();
    },
    hideMenu: function () {
      this.isOpen = false;
    },
    a: function () {
      const targetHeight = (this.isOpen)
          ? `${this.$refs.collapseInner.clientHeight}px`
          : 0;

      console.log(this.isOpen, targetHeight);
      this.$refs.collapse.style.maxHeight = targetHeight;
    }
  },
};
</script>

<style lang="scss" scoped>
@import "src/assets/scss/variables";

.navbar {
  padding: 0.75rem 1rem;
  border-bottom: 1px solid $yellow;

  @media(min-width: $lg) {
    padding: 1.25rem 0;
  }

  .container {
    display: flex;
    flex-wrap: wrap;
  }

  &__brand {
    display: flex;
    font-size: 1.25rem;
    font-weight: 400;
    text-decoration: none;
    padding: 0.3125rem 0;
    margin-right: 1rem;
    flex-grow: 1;

    @media(min-width: $md) {
      flex-grow: unset;
    }

    @media(min-width: $lg) {
      font-size: 1.5rem;
      margin-right: 2rem;
    }
  }

  &__collapse {
    max-height: 0;
    width: 100%;
    overflow: hidden;
    transition: max-height 0.3s ease;

    @media(min-width: $md) {
      display: flex;
      flex-grow: 1;

      width: auto;
      max-height: unset !important;
    }

    &--collapsed {
      transform: scaleY(1);
    }

    &__inner {
      display: flex;
      flex-grow: 1;
      padding-top: 1rem;

      @media(min-width: $md) {
        padding-top: 0;
      }
    }
  }

  &__links {
    display: flex;
    flex-grow: 1;

    a {
      margin-right: 1rem;

      &:last-of-type {
        margin-right: 0;
      }
    }
  }

  &__lang {
    button {
      margin-right: 1rem;

      &:last-of-type {
        margin-right: 0;
      }
    }
  }

  .hamburger {
    @media(min-width: $md) {
      display: none;
    }
  }

}
</style>