<template>
  <div class="modal">
    <div class="content">
      <div class="header">
        {{ title }} <span class="close" @click="interalCancel">X</span>
      </div>
      <slot></slot>
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
    },
    title: {
      default: ""
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

  .content {
    background: white;
    margin: 100px auto;
    width: 300px;
    padding: 10px;
  }
  .header {
    background: #efefef;
    padding: 5px 10px;
    margin: -10px -10px 0;
  }
  .close {
    float: right;
    margin: -5px -10px;
    padding: 5px 10px;
    background: blue;
    color: white;
    cursor: pointer;
  }
}
</style>
