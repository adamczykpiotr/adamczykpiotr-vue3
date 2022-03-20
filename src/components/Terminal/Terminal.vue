<template>
  <div class="terminal" :class="[state, disableTransition]" ref="terminal" @click="focusInput">

    <div class="terminal__bar">
      <div class="terminal__bar__icons">
        <span class="terminal__bar__icon terminal__bar__icon--closed" @click="toggleState('closed')"></span>
        <span class="terminal__bar__icon terminal__bar__icon--maximised" @click="toggleState('maximised')"></span>
        <span class="terminal__bar__icon terminal__bar__icon--tray" @click="toggleState('tray')"></span>
      </div>
      <span class="terminal__bar__title" @click="toggleState('')">{{ $t('terminal.window') }}</span>
    </div>

    <div class="terminal__content">

      <TerminalRenderer :input="terminalInput" @terminalUserChange="onTerminalUserChange"
                        @terminalRenderFinished="onTerminalRenderFinish"/>

      <div class="terminal__command" :class="{'terminal__command--disabled': isRendering}">
        <span class="terminal__user">{{ terminalUser }}</span>
        <label>
          <input autocomplete="off" autocapitalize="off" spellcheck="false" type="text" ref="input"
                 v-on:keyup.enter="processCommand()"
                 v-on:keyup.up="restoreHistory(1)"
                 v-on:keyup.down="restoreHistory(-1)"/>
        </label>
      </div>
    </div>

  </div>
</template>

<script>
import TerminalRenderer from "@/components/Terminal/TerminalRenderer";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Terminal",
  components: {TerminalRenderer},
  data() {
    return {
      isRendering: false,

      rawInput: '',
      terminalInput: {
        input: '',
        time: 0,
      },

      history: [],
      historyIndex: 0,

      username: this.$t('terminal.guest'),

      state: '',
      disableTransition: 'no-transition',
    }
  },
  computed: {
    terminalUser: function () {
      const symbol = (this.username === 'root') ? '#' : '$';
      return `${this.username}@${this.$t('terminal.host')}:/${symbol}`;
    },
  },
  methods: {
    focusInput() {
      this.$refs.input?.focus();
    },

    onTerminalUserChange(username) {
      this.username = username;
    },

    onTerminalRenderFinish() {
      this.isRendering = false;
    },

    processCommand() {
      if (this.isRendering) return;

      const command = this.$refs.input.value;

      //push history
      if (this.history[this.history.length - 1] !== command) this.history.push(command);
      this.history = this.history.slice(0, 50); //keep only last 50 commands
      this.historyIndex = this.history.length;

      //clear input
      this.$refs.input.value = "";

      this.emitCommand(command);
    },

    restoreHistory(shift) {
      this.historyIndex = Math.min(
          Math.max(this.historyIndex - shift, 0),
          this.history.length - 1
      );
      if (this.history[this.historyIndex] === undefined) return;
      this.$refs.input.value = this.history[this.historyIndex];
    },

    toggleState(state) {
      const className = `terminal--${state}`;
      this.state = (this.state === className ? '' : className);

      if (state !== 'closed') {
        localStorage.setItem('terminalState', this.state);
      }
    },

    emitCommand(input) {
      this.isRendering = true;

      this.terminalInput = {
        input: input,
        time: new Date().valueOf(),
      }
    }
  },
  mounted() {
    this.state = localStorage.getItem('terminalState');
    //  localStorage.setItem('terminalLastVisit', new Date().toUTCString()); TODO: Move this to work in the whole app

    //Load welcome screen
    setTimeout(() => {
      this.disableTransition = '';
      this.emitCommand('welcome');
      this.focusInput();
    }, 100);

  }
};
</script>

<style lang="scss">
@import "src/assets/scss/variables";

.terminal {
  background: $blackIsh;
  width: 100%;
  min-width: 250px;
  height: 100%;
  padding: 0.5em 1em;
  transition: 0.3s ease;
  font-weight: 500;
  min-height: 300px;

  @media(min-width: $lg) {
    height: 50%;
  }

  &.no-transition {
    transition: unset !important;
  }

  &--maximised {
    height: 50%; //actually minimized on mobile;

    @media(min-width: $lg) {
      height: calc(95% - 2em);
    }
  }

  //Taskbar tray
  &--tray {
    height: 2.5em;
    overflow: hidden;
    width: 35%;
    margin-top: 75%;
    cursor: default;
    min-height: 0;

    @media(min-width: $lg) {
      margin-top: 125%;
    }

    .terminal__bar__title {
      cursor: pointer;

      &:hover {
        color: #c3c5c7;
      }
    }

    &__bar {
      padding: 0;
      border: unset;

      &__icons,
      &__content {
        transition: none;
        display: none !important;
      }
    }
  }

  //Completely closed
  &--closed {
    height: 0;
    min-height: 0;
    width: 0;
    min-width: 0;
    margin-left: 50%;
    padding: 0;
    overflow: hidden;
  }

  &__bar {
    display: flex;
    flex-direction: row;
    padding-bottom: 0.5em;
    border-bottom: 1px solid $yellow;

    &__title {
      color: $lightGray;
      transition: 0.3s ease;
    }

    &__icons {
      margin: auto 1em auto 0;
      display: flex;
      flex-direction: row;
    }

    &__icon {
      display: block;
      height: 0.75em;
      width: 0.75em;
      border-radius: 50%;
      margin-right: 0.5em;
      transition: 0.3s ease;
      cursor: pointer;

      &:hover {
        filter: opacity(0.8);
        transition: 0.5s ease-out;
      }

      &--closed {
        background: #f45d58;
      }

      &--maximised {
        background: #edbb45;
      }

      &--tray {
        background: #38c35c;
      }
    }
  }

  &__content {
    padding-top: 0.5em;
    transition: 0.3s ease;
    height: calc(100% - 2em);
    overflow-y: scroll;
    overflow-x: hidden;

    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: $blackIsh;
    }

    &::-webkit-scrollbar {
      width: 12px;
      background-color: $gray;
    }

    &::-webkit-scrollbar-thumb {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: $yellow;
    }
  }

  &__command {
    width: 100%;
    margin: 1em 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    transition: opacity 0.3s ease;

    &--disabled {
      opacity: 0.7;
      pointer-events: none !important;
    }

    label {
      flex: 1;
      display: flex;
      margin: 0;
      min-width: 50px;
    }

    input {
      background: $blackIsh;
      width: 100%;
      border: none;
      color: $yellow;

      &:focus,
      &:active,
      &:hover {
        outline: none;
      }
    }
  }

  &__user {
    color: $yellow !important;
    margin-right: 0.5rem;
  }
}
</style>