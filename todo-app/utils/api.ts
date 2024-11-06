import { Todo } from "../types/todo";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const todoApi = {
  async getAllTodos(): Promise<Todo[]> {
    const response = await fetch(`${API_BASE_URL}/todos`);
    return response.json();
  },

  async createTodo(todo: Omit<Todo, "id">): Promise<Todo> {
    console.log("todo", todo);
    const response = await fetch(`${API_BASE_URL}/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(`Error: ${responseData.message || "Unknown error"}`);
    }

    return responseData;
  },

  async updateTodo(id: number, todo: Partial<Todo>): Promise<{}> {
    console.log(id, todo);
    const response = await fetch(`${API_BASE_URL}/todos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(`Error: ${responseData.message || "Unknown error"}`);
    }
    return {};
  },

  async deleteTodo(id: number): Promise<{}> {
    const response = await fetch(`${API_BASE_URL}/todos/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
    }
    return {};
  },
};
