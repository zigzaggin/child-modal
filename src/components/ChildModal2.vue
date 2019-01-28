<template>
  <Modal title="Modal 2" v-if="amIOpen" :cancel="onCancel">
    This is another sub modal
  </Modal>
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
