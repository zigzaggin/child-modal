<template>
  <div class="modal">
    <div class="content">
      <slot></slot>
      <span class="close" @click="interalCancel">Close Modal</span>
    </div>
  </div>
</template>

<script>
import open from "./open.mixin.js";
export default {
  mixins: [open],
  props: {
    cancel: {
      type: Function
    }
  },
  methods: {
    interalCancel() {
      if (typeof this.cancel !== "undefined") this.cancel();
      else this.close();
    }
  }
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  text-align: center;

  .content {
    background: white;
    margin: 100px auto;
    width: 300px;
    padding: 10px;
  }
  .close {
    display: block;
    padding: 10px;
    background: blue;
    margin-top: 10px;
    color: white;
    cursor: pointer;
  }
}
</style>
