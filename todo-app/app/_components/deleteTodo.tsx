"use client";

import React, { useActionState } from "react";
import { deleteTodo } from "../_actions/todos";
import { TrashIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function DeleteTodoButton({ id }: { id: number }) {
  const [state, formAction] = useActionState(deleteTodo, undefined);

  return (
    <form action={formAction}>
      <div className="hidden">
        <Input id="id" name="id" defaultValue={id} />
      </div>
      <Button type="submit" variant={"ghost"}>
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-4" />
      </Button>
    </form>
  );
}
