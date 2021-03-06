import { Todo } from "@/types/todo";

// 保存
export function saveTodos(todos: Todo[]) {
	localStorage.setItem("todos_key", JSON.stringify(todos));
}

// 读取
export function readTodos(): Todo[] {
	return JSON.parse(localStorage.getItem("todos_key") || "[]");
}
