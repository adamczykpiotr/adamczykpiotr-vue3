<template>

  <section ref="output">
  </section>

</template>

<script>
import {translate} from "@/i18n";

export default {
  name: "TerminalRenderer",
  data() {
    return {
      username: this.$t('terminal.guest'),
    }
  },
  props: [
    'input'
  ],
  watch: {
    input: function (terminalInput) {
      this.handle(terminalInput.input);
    },
  },
  computed: {
    lastVisit: function () {
      const lastVisitDate = new Date(localStorage.getItem('terminalLastVisit'));
      return lastVisitDate.valueOf() > 0
          ? this.$t('terminal.lastLogin', {date: lastVisitDate.toUTCString()})
          : '';
    },
    loginAs: function () {
      return this.$t('terminal.loginAs', {user: this.$t('terminal.guest')});
    },
  },
  methods: {


    /**
     * Handles 'su' command
     * Changes terminal user to 'root'
     *
     * @returns {string}
     * @private
     */
    _commandSu() {
      if (this.username === 'root') {
        return this.$t('terminal.su.already');
      }

      this.username = 'root';
      this.$emit('terminalUserChange', this.username);

      return this.$t('terminal.su.now');
    },

    /**
     * Handles 'uname' command
     *
     * @returns {string}
     * @private
     */
    _commandUname(args) {
      if (args.includes('-a')) {
        return navigator.userAgent;
      }

      const mappings = {
        'Win': 'Windows',
        'Mac': 'MacOS',
        'Linux': 'Linux',
        'Android': 'Android',
        'like Mac': 'iOS',
      };

      for (let key in mappings) {
        if (navigator.appVersion.includes(key)) return mappings[key];
      }

      return translate('terminal.unknownBrowser');
    },

    /**
     * Handles 'whoami' command
     *
     * @returns {string}
     * @private
     */
    _commandWhoami() {
      return this.username;
    },

    /**
     * Handles 'help' command
     *
     * @returns {string}
     * @private
     */
    _commandHelp() {
      return translate('terminal.help');
    },

    /**
     * Handles 'clear' command
     *
     * @returns {string}
     * @private
     */
    _commandClear() {
      return '';
    },

    /**
     * Handles 'welcome' command
     *
     * @returns {string}
     * @private
     */
    _commandWelcome() {
      return `${this.loginAs}</br>${this.lastVisit}</br></br>${translate('terminal.initialMessage').replace('%enter%', '<kbd>Enter</kbd>')}`;
    },

    /**
     * Displays warning about invalid command
     *
     * @returns {string}
     */
    invalidCommand() {
      return `${translate('terminal.invalidCommand')}</br></br>${translate('terminal.initialMessage').replace('%enter%', '<kbd>Enter</kbd>')}`;
    },

    /**
     * Handles command calls
     *
     * @param input
     */
    handle: function (input) {

      const separator = input.indexOf(' ');
      const app = (separator === -1) ? input : input.substr(0, separator);
      const args = (separator === -1) ? '' : input.substr(separator + 1);

      const functionName = `_command${app.charAt(0).toUpperCase() + app.slice(1).toLowerCase()}`;
      const output = (typeof this[functionName] === 'function')
          ? this[functionName](args)
          : this.invalidCommand();

      this.render(typeof output === 'string'
          ? output
          : ''
      );
    },


    /**
     * Renders command output
     *
     * @param content
     */
    async render(content) {
      if (typeof content !== 'string') content = '';
      const target = this.$refs.output;

      let isTag = false;
      let subtext = '';

      for (let i = 0; i <= content.length; i++) {
        // if (this.stopTyping) break;

        subtext = content.slice(0, i);
        target.innerHTML = subtext;

        const char = subtext.slice(-1);
        if (char === '<') isTag = true;
        else if (char === '>') isTag = false;

        //delay next char
        if (!isTag) await new Promise(resolve => setTimeout(resolve, 16.66));
      }

      this.$emit('terminalRenderFinished');
    },
  },
};
</script>

<style lang="scss" scoped>
@import "src/assets/scss/variables";


section {
  color: $lightGray;

  a:hover,
  a:focus {
    background: #181818;
    color: #fff;
  }
}

h2 {
  font-size: 1em;
  font-weight: 400;
}

p {
  margin-bottom: 2em;
}

.cursor {
  color: #999;
  line-height: 1;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin: 1em 0 0;
}

a {
  color: #c2c4c6;
}


kbd {
  border: 1px solid $yellow;
  text-transform: uppercase;
  padding: 0.1em 0.75em;
  border-radius: 0;
  background: transparent;
}


</style>