<template>
  <input type="text" v-model="user.firstName" />
  <br />
  <input type="text" v-model="user.lastName" />
  <br />
  <input type="text" v-model="full1" />
  <br />
  <input type="text" v-model="full2" />
  <br />
  <input type="text" v-model="full3" />
  <br />
  <input type="text" v-model="full4" />
  <br />
</template>
<script lang='ts'>
import {
  computed,
  defineComponent,
  reactive,
  ref,
  watch,
  watchEffect,
} from "vue";
export default defineComponent({
  name: "App",
  setup() {
    const user = reactive({
      firstName: "啊哈",
      lastName: "来了",
    });

    //计算只有一哥回调函数为参数时是get
    const full1 = computed(() => {
      return user.firstName + "_" + user.lastName;
    });
    //设置get和set参数
    const full2 = computed({
      get() {
        return user.firstName + "_" + user.lastName;
      },
      set(val: string) {
        const name = val.split("_");
        user.firstName = name[0];
        user.lastName = name[1];
      },
    });

    //使用watch监视user变量
    //第三个参数为一个对象immediate是否立即执行 deep深沉监视
    const full3 = ref("");
    watch(
      user,
      () => {
        full3.value = user.firstName + "_" + user.lastName;
      },
      { immediate: true, deep: true }
    );

    watch(full3, (val) => {
      const name = val.split("_");
      user.firstName = name[0];
      user.lastName = name[1];
    });

    const full4 = ref("");
    watchEffect(() => {
      full4.value = user.firstName + "_" + user.lastName;
    });

    return {
      user,
      full1,
      full2,
      full3,
      full4,
    };
  },
});
</script>