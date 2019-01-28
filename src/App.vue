<template>
  <div id="app">
    <span @click="c">Open Modal</span> <span @click="c2">Open Modal 2</span>
    <Modal ref="modal" :result.sync="m1"></Modal> <Modal2 ref="modal2"></Modal2>

    <div>{{ m1 }}</div>
  </div>
</template>

<script>
import Modal from "./components/ChildModal";
import Modal2 from "./components/ChildModal2";

export default {
  data() {
    return {
      m1: {
        id: 0,
        name: "Test"
      }
    };
  },
  methods: {
    c() {
      this.$refs.modal.open();
    },
    c2() {
      this.$refs.modal2.open();
    }
  },
  name: "app",
  components: {
    Modal,
    Modal2
  }
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
span {
  padding: 10px;
  background: blue;
  display: inline-block;
  color: white;
  cursor: pointer;
  + span {
    margin-left: 10px;
  }
  &.btn {
    display: block;
  }
}
</style>
