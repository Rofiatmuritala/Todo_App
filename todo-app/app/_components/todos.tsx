import { todoApi } from "@/utils/api";
import { EditTodoModal } from "./editTodo";
import { AddTodoModal } from "./addTodo";
import { DeleteTodoButton } from "./deleteTodo";

const Todos = async () => {
  const todos = await todoApi.getAllTodos();

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Todo List</h1>
        <AddTodoModal />
      </div>

      <ul className="space-y-4">
        {todos.map((todo, index) => (
          <li key={todo.id || index} className="p-4 border rounded shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={todo.isCompleted}
                    className="h-5 w-5"
                  />
                  <span
                    className={
                      todo.isCompleted
                        ? "line-through text-gray-500"
                        : "font-medium"
                    }
                  >
                    {todo.title}
                  </span>
                </div>
                <div className="flex gap-2">
                  <EditTodoModal todo={todo} />
                  <div>
                    <DeleteTodoButton id={todo.id!} />
                  </div>
                </div>
              </div>
              {todo.desc && (
                <p className="text-gray-600 text-sm ml-7">{todo.desc}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
