import React from "react";

const TodoList = ({ todo, setTodo }) => {

  const deleteTodo = (id) => {
    let newTodo = [...todo].filter((el) => el.id != id);
    setTodo(newTodo);
  };

  const statusTodo = (id) => {
    let newTodo = [...todo].filter((el) => {
      if (el.id == id) {
        el.status = !el.status;
      }
      return el;
    });
    setTodo(newTodo);
  };

  return (
    <div>
      {todo.map((el) => {
        return (
          <div key={el.id}>
            <p>{el.title}</p>
            <button onClick={() => deleteTodo(el.id)}>delete</button>
            <button onClick={() => statusTodo(el.id)}>open/close</button>
            <button>edit</button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
