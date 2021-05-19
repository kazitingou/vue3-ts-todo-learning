<template>
  <div :style="{ color }">孙子ei</div>
</template>
<script lang='ts'>
import { defineComponent, inject } from "vue";
export default defineComponent({
  name: "Gson",
  setup() {
    //接受color属性
    const color = inject("color");
    return {
      color,
    };
  },
});
</script>