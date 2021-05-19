<template>
  <div>服服服</div>
  <div>{{ str }}</div>
  <child :str="str" @xxx="xxx" />
  <button @click="strAdd">你你你</button>
</template>
<script lang='ts'>
import { defineComponent, ref } from "vue";
import Child from "./components/HelloWorld.vue";
export default defineComponent({
  name: "App",
  components: {
    Child,
  },
  setup() {
    const str = ref("问我我我我我我我我我我我我我");
    function strAdd() {
      str.value += "是伞兵";
    }
    function xxx(txt: string) {
      console.log(333);

      str.value += txt;
    }
    return {
      str,
      strAdd,
      xxx,
    };
  },
});
</script>