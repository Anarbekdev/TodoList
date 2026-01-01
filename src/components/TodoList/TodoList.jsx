import React from "react";

export const TodoList = ({ removeTodo, toggleTodo, todos }) => {
  return (
    <>
      <div>
        {todos.length === 0 && <p>список пуст</p>}
        {todos.map((todo) => (
          <div key={todo.id} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px'}}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.todo}
            </span>
            <button onClick={() => removeTodo(todo.id)}>удалить</button>
          </div>
        ))}
      </div>
    </>
  );
};
