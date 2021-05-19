<template>
  <li
    :style="{ backgroundColor: bgColor, color: myColor }"
    @mouseenter="mouseHandle(true)"
    @mouseleave="mouseHandle(false)"
  >
    <label>
      <input type="checkbox" v-model="isCompleted" />
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" v-show="delIsShow" @click="delTodo">
      删除
    </button>
  </li>
</template>
<script lang='ts'>
import { computed, defineComponent, ref } from "vue";
import { Todo } from "../types/todo";
export default defineComponent({
  name: "Item",
  props: {
    todo: {
      type: Object as () => Todo,
      required: true,
    },
    index: {
      type: Number,
    },
    updateTodo:{
      type:Function
    }
  },
  setup(props, { attrs, slots, emit }) {
    const bgColor = ref("white");
    const myColor = ref("black");
    const delIsShow = ref(false);
    const mouseHandle = (flag) => {
      if (flag) {
        bgColor.value = "blue";
        myColor.value = "white";
        delIsShow.value = true;
      } else {
        bgColor.value = "white";
        myColor.value = "black";
        delIsShow.value = false;
      }
    };
    const delTodo = () => {
      emit("delTodo", props.index);
    };
    const isCompleted = computed({
      get(){
        return props.todo.isCompleted;
      },
      set(val:boolean){
        props.updateTodo(props.todo,val)
      }
    })
    return {
      bgColor,
      myColor,
      mouseHandle,
      delIsShow,
      delTodo,
      isCompleted
    };
  },
});
</script>

<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  /* display: none; */
  margin-top: 3px;
}
li::before {
  content: initial;
}
li:last-child {
  border-bottom: none;
}
</style>