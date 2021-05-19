<template>
  <div>DD</div>
  <div>{{ color }}</div>
  <button @click="up"></button>
  <Son />
</template>
<script lang='ts'>
import { defineComponent, provide } from "vue";
import Son from "./components/Son.vue";
export default defineComponent({
  name: "App",
  components: {
    Son,
  },
  setup() {
    const color = "pink";
    //传递值为color的"color"属性给孙子
    provide("color", color);
    function up() {
      color;
    }
    return {
      color,
    };
  },
});
</script>