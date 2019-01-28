<template>
  <Modal title="Modal 1" v-if="amIOpen">
    <input type="text" v-model="r.id" /> <input type="text" v-model="r.name" />
    <span @click="save">GO</span>
  </Modal>
</template>

<script>
import Modal from "./Modal";

export default {
  props: {
    result: {
      type: Object
    }
  },
  extends: Modal,
  data() {
    return {
      r: {
        id: this.result.id,
        name: this.result.name
      }
    };
  },
  methods: {
    save() {
      this.$emit("update:result", { ...this.r });
      this.close();
    }
  },
  components: {
    Modal
  }
};
</script>

<style lang="scss" scoped>
input {
  height: 30px;
  border: solid 1px #efefef;
  margin-top: 10px;
  display: block;
  padding: 5px;
  width: 100%;
}
span {
  display: block;
  padding: 10px;
  background: blue;
  margin-top: 10px;
}
</style>
