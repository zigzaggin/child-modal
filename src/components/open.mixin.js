export default {
  data() {
    return {
      amIOpen: false
    };
  },
  methods: {
    close() {
      this.$history.popState();
    },
    open() {
      if (!this.amIOpen) {
        this.amIOpen = true;
        this.$history.addBackObserver(() => {
          this.amIOpen = false;
        });
      }
    }
  }
};
