<template>
  <div id="app">
    <span @click="c">Open Modal</span> <Modal ref="modal"></Modal>
  </div>
</template>

<script>
import Modal from "./components/ChildModal";

export default {
  data() {
    return {};
  },
  methods: {
    c() {
      this.$refs.modal.open();
    }
  },
  name: "app",
  components: {
    Modal
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
span {
  padding: 10px;
  background: blue;
  display: inline-block;
  color: white;
  cursor: pointer;
}
</style>
