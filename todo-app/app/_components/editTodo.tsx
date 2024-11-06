"use client";

import { useActionState } from "react";
import { Todo } from "@/types/todo";
import { editTodo } from "../_actions/todos";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Pencil } from "lucide-react";

export function EditTodoModal({ todo }: { todo: Todo }) {
  const [state, formAction] = useActionState(editTodo, undefined);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <Pencil size={18} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Todo</DialogTitle>
          <DialogDescription>
            Make changes to your todo item here.
          </DialogDescription>
        </DialogHeader>
        <form action={formAction} className="space-y-4">
          <div className="hidden">
            <Input id="id" name="id" defaultValue={todo.id} />
          </div>
          <div className="space-y-2">
            <Input
              id="title"
              name="title"
              defaultValue={todo.title}
              placeholder="Todo title"
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <Textarea
              id="desc"
              name="desc"
              defaultValue={todo.desc || ""}
              placeholder="Add a description..."
              className="w-full"
            />
          </div>
          <div className="flex justify-end gap-3">
            <Button type="button" variant="outline">
              Cancel
            </Button>
            <Button type="submit">Save changes</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
