<template>
  <nav class="navbar">
    <div class="container">

      <router-link class="navbar__brand" to="/">
        {{ $t('me.fullName') }}
      </router-link>

      <button class="hamburger" :class="{'hamburger--open' : !isOpen}" @click=hamburgerToggle>
        <span class="hamburger__bar hamburger__bar--top"></span>
        <span class="hamburger__bar hamburger__bar--middle"></span>
        <span class="hamburger__bar hamburger__bar--bottom"></span>
      </button>

      <div class="navbar__collapse" ref="collapse">
        <div class="navbar__collapse__inner" ref="collapseInner">

          <div class="navbar__links">
            <RouterButton to="/" @click="hideMenu">
              {{ $t('nav.home') }}
            </RouterButton>
            <!--<RouterButton to="/cv" @click="hideMenu">
              {{ $t('nav.cv') }}
            </RouterButton>-->
          </div>

          <!-- TODO: Language switch -->
          <div class="navbar__lang">
            <BaseButton :active=true>EN</BaseButton>
            <BaseButton :disabled=true>PL</BaseButton>
          </div>

        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import RouterButton from "@/components/common/buttons/RouterButton";
import BaseButton from "@/components/common/buttons/BaseButton";

export default {
  name: 'NavBar',
  components: {BaseButton, RouterButton},
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    hamburgerToggle: function () {
      this.toggleMenu(!this.isOpen);
    },
    hideMenu: function () {
      this.toggleMenu(false);
    },
    toggleMenu: function (shouldBeOpen) {
      this.isOpen = shouldBeOpen;
      this.$refs.collapse.style.maxHeight = (this.isOpen)
          ? `${this.$refs.collapseInner.clientHeight}px`
          : 0;
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
      align-self: center;

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
    border: none;
    background: transparent;
    cursor: pointer;
    padding: 0;

    @media(min-width: $md) {
      display: none;
    }

    &:focus {
      outline: none;
    }

    //Hamburger menu animation: http://kylegoslan.co.uk/bootstrap-4-hamburger-menu-animation/
    &__bar {
      width: 22px;
      height: 2px;
      display: block;
      background-color: $yellow;
      transition: 0.3s ease;
      margin-top: 4px;

      &--top {
        transform: rotate(45deg);
        transform-origin: 10% 10%;
      }

      &--middle {
        opacity: 0;
      }

      &--bottom {
        transform: rotate(-45deg);
        transform-origin: 10% 90%;
      }
    }

    &--open {
      .hamburger__bar {
        &--top {
          transform: rotate(0);
        }

        &--middle {
          opacity: 1;
        }

        &--bottom {
          transform: rotate(0);
        }
      }
    }
  }
}
</style>