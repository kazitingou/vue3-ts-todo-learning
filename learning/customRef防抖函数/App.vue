<template>
  <input type="text" v-model="str" />
  <div>{{ str }}</div>
</template>

<script lang="ts">
import { customRef, onMounted, ref } from "vue";
function useDebounedRef<T>(val: T, delay = 500) {
  let timer: number;
  return customRef((track, trigger) => {
    return {
      get() {
        //追踪数据变化
        track();
        return val;
      },
      set(newVal: T) {
        clearInterval(timer);
        timer = setTimeout(() => {
          val = newVal;
          //触发页面更新
          trigger();
        }, delay);
      },
    };
  });
}

export default {
  setup() {
    const str = useDebounedRef("HHH", 500);

    onMounted(() => {});

    return {
      str,
    };
  },
};
</script>