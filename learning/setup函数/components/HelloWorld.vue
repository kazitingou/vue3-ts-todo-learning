<template>
  <div>吱吱吱</div>
  <div>{{ str }}</div>
  <button @click="xtxt">哈哈哈</button>
</template>

<script lang='ts'>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "Child",
  props: ["str"],
  setup(props, { attrs, slots, emit }) {
    console.log("setup", this);
    console.log(props, attrs, slots, emit);
    const xtxt = () => {
      emit("xxx", "+++");
    };
    return {
      xtxt,
    };
  },
});
</script>