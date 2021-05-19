<template>
  <div>Son</div>
  <Gson />
</template>
<script lang='ts'>
import { defineComponent } from "vue";
import Gson from "./GSon.vue";

export default defineComponent({
  name: "Son",
  components: {
    Gson,
  },
});
</script>