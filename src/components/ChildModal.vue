<template>
  <Modal v-if="amIOpen" :cancel="onCancel">This is the Child Modal</Modal>
</template>

<script>
import Modal from "./Modal";

export default {
  extends: Modal,
  data() {
    return {};
  },
  methods: {
    onCancel() {
      console.log("cancel!");
      this.close();
    }
  },
  components: {
    Modal
  }
};
</script>
