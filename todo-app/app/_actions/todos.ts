"use server";
import { Todo } from "@/types/todo";

import { todoApi } from "@/utils/api";
import { error } from "console";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createTodo(prevState: any, formData: FormData) {
  const title = formData.get("title") as string;
  const desc = formData.get("desc") as string;
  if (!title) {
    return {
      error: "Title is required",
    };
  }

  const newTodo = await todoApi.createTodo({
    title,
    desc,
  });
  console.log("newtodo", newTodo);

  if (!newTodo) {
    return {
      error: "failed to create new todo",
    };
  }
  revalidatePath("/");
  redirect("/");
}

export async function editTodo(prevState: any, formData: FormData) {
  const id = formData.get("id") as string;
  const title = formData.get("title") as string;
  const desc = formData.get("desc") as string;
  if (!title) {
    return {
      error: "Title is required",
    };
  }

  const updatedTodo = await todoApi.updateTodo(Number(id), {
    title,
    desc,
  });

  if (!updatedTodo) {
    return {
      error: "Failed to update todo",
    };
  }
  revalidatePath("/");
  redirect("/");
}

export async function deleteTodo(prevState: any, formData: FormData) {
  const id = formData.get("id") as string;

  const deletedTodo = await todoApi.deleteTodo(Number(id));

  if (!deletedTodo) {
    return {
      error: "Failed to delete Todo",
    };
  }
  revalidatePath("/");
  redirect("/");
}
