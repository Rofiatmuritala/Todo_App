import { Todo } from "../types/todo";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const todoApi = {
  async getAllTodos(): Promise<Todo[]> {
    const response = await fetch(`${API_BASE_URL}/todos`);
    return response.json();
  },

  async createTodo(todo: Omit<Todo, "id">): Promise<Todo> {
    const response = await fetch(`${API_BASE_URL}/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
    return response.json();
  },

  async updateTodo(id: number, todo: Partial<Todo>): Promise<void> {
    await fetch(`${API_BASE_URL}/todos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
  },

  async deleteTodo(id: number): Promise<void> {
    await fetch(`${API_BASE_URL}/todos/${id}`, {
      method: "DELETE",
    });
  },
};
