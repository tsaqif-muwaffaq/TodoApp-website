import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  // ✅ Tambah todo
  const addTodo = (text) => {
    if (text.trim() === "") return;
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  // ✅ Toggle status todo
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // ✅ Hapus todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // ✅ Edit todo
  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  // ✅ Filter todo
  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const activeTodosCount = todos.filter((todo) => !todo.completed).length;

  return (
    <div className="wrap">
      <div className="card">
        <div className="header">
          <h1> React Todo List </h1>
          <p className="subtitle">
            Aplikasi todo sederhana, modern, dan responsif.
          </p>
        </div>
        {/* Form Tambah */}
        <TodoForm onAdd={addTodo} />

        {/* Filter */}
        <TodoFilter
          filter={filter}
          setFilter={setFilter}
          activeCount={activeTodosCount}
        />

        {/* List */}
        <TodoList
          todos={filteredTodos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          onEdit={editTodo}
        />

        {/* Info */}
        <div className="footer">
          <span>Tips: Klik dua kali pada teks todo untuk mengeditnya.</span>
        </div>
      </div>
    </div>
  );
}

export default App;
