<template>
  <div>x: {{ x }}</div>
  <div>y: {{ y }}</div>
</template>
<script lang='ts'>
import { defineComponent } from "vue";
import useMouseMove from "./hooks/useMouseMove";
export default defineComponent({
  name: "App",
  setup() {
    const { x, y } = useMouseMove();
    return { x, y };
  },
});
</script>