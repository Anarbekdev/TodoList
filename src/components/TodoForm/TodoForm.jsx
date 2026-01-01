import React, { useState } from "react";

export const TodoForm = ({addTodo}) => {
  const [valueInp, setValueInp] = useState("");
  const handleChange = (e) => {
    setValueInp(e.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    addTodo(valueInp)
    setValueInp('')
  }
  return (
    <>
      <div>
        <h2>Добавьте список</h2>
        <form action="" onSubmit={handleSubmit}>
          <input type="text" value={valueInp} onChange={handleChange}/>
          <button type="submit">Добавить</button>
        </form>
      </div>
    </>
  );
};
