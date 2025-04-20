import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { TodoContext } from "../Context/todoContext";

const Dashboard = () => {
  const { todos, addTodo, updateTodo, deleteTodo } = useContext(TodoContext);
  const [input, setInput] = useState({ title: "", description: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.title || !input.description) return;

    if (isEditing) {
      updateTodo(editId, input);
      Swal.fire("Updated!", "Todo has been updated", "success");
      setIsEditing(false);
      setEditId(null);
    } else {
      addTodo(input);
      Swal.fire("Added!", "Todo has been added", "success");
    }

    setInput({ title: "", description: "" });
  };

  const handleEdit = (todo) => {
    setInput({ title: todo.title, description: todo.description });
    setEditId(todo.id);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This will be deleted permanently",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it"
    }).then((result) => {
      if (result.isConfirmed) {
        deleteTodo(id);
        Swal.fire("Deleted!", "Todo has been deleted.", "success");
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-600 text-white p-4 text-center text-2xl font-semibold">
        Dashboard
      </nav>
      <div className="max-w-2xl mx-auto py-8 px-4">
        <form onSubmit={handleSubmit} className="mb-6">
          <input
            type="text"
            placeholder="Title"
            value={input.title}
            onChange={(e) => setInput({ ...input, title: e.target.value })}
            className="w-full p-2 mb-2 border border-gray-300 rounded"
          />
          <textarea
            placeholder="Description"
            value={input.description}
            onChange={(e) => setInput({ ...input, description: e.target.value })}
            className="w-full p-2 mb-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
          >
            {isEditing ? "Update Todo" : "Add Todo"}
          </button>
        </form>

        <ul className="space-y-4">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="bg-white p-4 rounded shadow flex justify-between items-start"
            >
              <div>
                <h3 className="text-xl font-semibold">{todo.title}</h3>
                <p className="text-gray-600">{todo.description}</p>
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => handleEdit(todo)}
                  className="text-blue-500 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(todo.id)}
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
