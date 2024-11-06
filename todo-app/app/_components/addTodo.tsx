"use client";

import { createTodo } from "../_actions/todos";
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
import { Plus } from "lucide-react";
import { useActionState } from "react";

export function AddTodoModal() {
  const [state, formAction] = useActionState(createTodo, undefined);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">
          <Plus size={16} className="mr-2" />
          Add Todo
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Todo</DialogTitle>
          <DialogDescription>Create a new todo item.</DialogDescription>
        </DialogHeader>
        <form action={formAction} className="space-y-4">
          <div className="space-y-2">
            <Input
              id="title"
              name="title"
              placeholder="Todo title"
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <Textarea
              id="description"
              name="desc"
              placeholder="Add a description..."
              className="w-full"
            />
          </div>
          <div className="flex justify-end gap-3">
            <Button type="button" variant="outline">
              Cancel
            </Button>
            <Button type="submit">Create Todo</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
