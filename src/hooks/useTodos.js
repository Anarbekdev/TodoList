import { useState, useEffect } from "react";


const initialTodos = [
  { id: 1, todo: "Купить хлеб", completed: false },
  { id: 2, todo: "Позвонить другу", completed: true },
  { id: 3, todo: "Сделать домашку", completed: false },
  { id: 4, todo: "Прочитать книгу", completed: false },
  { id: 5, todo: "Сходить в спортзал", completed: true },
  { id: 6, todo: "Сделать уборку", completed: false },
  { id: 7, todo: "Записаться к врачу", completed: false },
  { id: 8, todo: "Приготовить ужин", completed: true },
  { id: 9, todo: "Выучить React", completed: false },
  { id: 10, todo: "Сходить на прогулку", completed: false },
];

export const useTodos = () => {
  
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : initialTodos;
  });


  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newItem = {
      id: Date.now(),
      todo: text,
      completed: false,
    };
    setTodos([...todos, newItem]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return { todos, addTodo, removeTodo, toggleTodo };
};
