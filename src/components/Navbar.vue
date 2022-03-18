<template>
  <nav class="navbar">
    <div class="container">

      <router-link class="navbar__brand" to="/">
        Adamczyk Piotr
      </router-link>

      <div class="navbar__links">

        <RouterButton to="/">
          Home
        </RouterButton>

        <RouterButton to="/cv">
          CV
        </RouterButton>

      </div>

      <div class="navbar__lang">
        <Button :active=true>EN</Button>
        <Button>PL</Button>
      </div>

      <!--
      <button type="button" aria-label="Toggle navigation" class="navbar-toggler collapsed">
        <span class="icon-bar d-block top-bar"></span>
        <span class="icon-bar d-block middle-bar"></span>
        <span class="icon-bar d-block bottom-bar"></span>
      </button>
      -->

    </div>
  </nav>
</template>

<script>
import Button from "@/components/common/Button";
import RouterButton from "@/components/common/RouterButton";

export default {
  name: 'NavBar',
  components: {RouterButton, Button},
  methods: {
    c: function (e) {
      console.log(e);
      console.log('a');
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
  }

  &__brand {
    font-size: 1.25rem;
    font-weight: 400;
    text-decoration: none;
    padding: 0.3125rem 0;

    margin-right: 1rem;


    @media(min-width: $lg) {
      margin-right: 2rem;
    }

    @media(min-width: $xl) {
      font-size: 1.5rem;
    }
  }

  &__links {
    a {
      margin-right: 1rem;

      &:last-of-type {
        margin-right: 0;
      }
    }
  }
}


.navbar-toggler {
  border: none;
  background: transparent !important;
  margin-right: -0.75rem;

  &:focus {
    outline: none;
  }


  //Hamburger menu animation: http://kylegoslan.co.uk/bootstrap-4-hamburger-menu-animation/
  .icon-bar {
    width: 22px;
    height: 2px;
    background-color: $yellow;
    transition: 0.3s ease;
    margin-top: 4px;

    &.top-bar {
      transform: rotate(45deg);
      transform-origin: 10% 10%;
    }

    &.middle-bar {
      opacity: 0;
    }

    &.bottom-bar {
      transform: rotate(-45deg);
      transform-origin: 10% 90%;
    }
  }

  &.collapsed {
    .icon-bar {
      &.top-bar {
        transform: rotate(0);
      }

      &.middle-bar {
        opacity: 1;
      }

      &.bottom-bar {
        transform: rotate(0);
      }
    }
  }
}

.navbar-brand {

}

ul li {
  margin-right: 1rem !important;

  a {
    padding: 0.25rem 0.825rem !important;
    border: 1px solid transparent;
    border-bottom-color: $yellow;
    color: $dark !important;
    transition: 0.3s ease;


    &:last-child {
      margin-right: 0;
    }

    &:hover {
      border-color: $yellow;
      text-decoration: none;
    }

    &.router-link-exact-active {
      border-color: $yellow;
      background-color: $yellow;
    }
  }
}

.nav-item {
  margin-right: 0.5rem;

  &:last-child {
    margin-right: 0;
  }
}

.right {
  justify-content: space-evenly;
  margin-top: 0.5rem;

  @media(min-width: $md) {
    flex-grow: 1;
    justify-content: flex-end;
    margin: 0;
  }

  li {

    padding: 0 0.5rem;
    margin: 0;

    @media(min-width: $md) {
      padding: 0 0.25rem;
      margin-right: 0.5rem;

      &:last-child {
        margin-right: 0;
      }
    }

    &.active a {
      border-color: $yellow;
      background-color: $yellow;
    }

    a {
      transition: 0.3s ease;
    }
  }
}
</style>