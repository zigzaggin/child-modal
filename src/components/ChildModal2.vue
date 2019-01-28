<template>
  <div>
    <Modal title="Modal 2" v-if="amIOpen">
      This is another sub modal
      <span class="btn" @click="openm2">Open Second Modal</span>
      <div>{{ r }}</div>
    </Modal>

    <ChildModal
      title="What?"
      ref="m2"
      :result.sync="r"
      :closed="onClose"
    ></ChildModal>
  </div>
</template>

<script>
import Modal from "./Modal";
import ChildModal from "./ChildModal";

export default {
  extends: Modal,
  data() {
    return {
      r: {
        id: 3,
        name: "Bob"
      }
    };
  },
  methods: {
    onClose() {
      this.amIOpen = true;
    },
    openm2() {
      this.amIOpen = false;
      this.$refs.m2.open();
    }
  },
  components: {
    Modal,
    ChildModal
  }
};
</script>
<style scoped>
.btn {
  margin: 10px 0;
}
</style>
