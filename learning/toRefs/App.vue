<template>
  <div>x: {{ x }}</div>
  <div>y: {{ y }}</div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs } from "vue";
export default defineComponent({
  name: "App",
  setup() {
    const state = reactive({
      x: 123,
      y: 456,
    });
    // const state2 = toRefs(state);
    setInterval(() => {
      state.x++;
      state.y--;
    }, 500);
    return {
      // ...state 直接传出对象里的属性是 不是响应式的，必须用toRefs
      ...toRefs(state),
    };
  },
});
</script>