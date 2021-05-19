<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo="addTodo" />
      <List :todos="todos" @delTodo="delTodo" :updateTodo="updateTodo" />
      <Footer
        :todos="todos"
        :checkAll="checkAll"
        :clearAllCompletedTodos="clearAllCompletedTodos"
      />
    </div>
  </div>
</template>
<script lang='ts'>
import { defineComponent, onMounted, reactive, toRefs, watch } from "vue";
import Header from "./components/Header.vue";
import List from "./components/List.vue";
import Footer from "./components/Footer.vue";
import { Todo } from "./types/todo";
import { saveTodos, readTodos } from "./utils/localStorageUtils";

export default defineComponent({
  name: "App",
  components: {
    Footer,
    Header,
    List,
  },
  setup() {
    // const state = reactive<{ todos: Todo[] }>({
    //   todos: [
    //     {
    //       id: 0,
    //       title: "奥琦玮",
    //       isCompleted: true,
    //     },
    //     {
    //       id: 1,
    //       title: "加特技",
    //       isCompleted: false,
    //     },
    //     {
    //       id: 2,
    //       title: "呢百姓",
    //       isCompleted: false,
    //     },
    //   ],
    // });

    const state = reactive<{ todos: Todo[] }>({
      todos: [],
    });

    //读取数据
    onMounted(() => {
      // setTimeout(() => {
      state.todos = readTodos();
      // }, 500);
    });

    //添加一个todo
    function addTodo(todo: Todo) {
      state.todos.unshift(todo);
    }
    //删除一个todo
    function delTodo(index: number) {
      state.todos.splice(index, 1);
    }
    //更新todo是否为已完成
    function updateTodo(todo: Todo, val: boolean) {
      todo.isCompleted = val;
    }
    //反选或全选
    function checkAll(isCheck) {
      state.todos.forEach((todo) => {
        todo.isCompleted = isCheck;
      });
    }
    //清除已做完的list
    function clearAllCompletedTodos() {
      state.todos = state.todos.filter((todo) => !todo.isCompleted);
    }

    //todos数据被修改就保存到浏览器
    watch(() => state.todos, saveTodos, { deep: true });

    return {
      ...toRefs(state),
      addTodo,
      delTodo,
      updateTodo,
      checkAll,
      clearAllCompletedTodos,
    };
  },
});
</script>

<style scoped>
.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>