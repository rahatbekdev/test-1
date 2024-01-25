import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import AddTodo from "./Components/AddTodo/AddTodo";
import TodoList from "./Components/TodoList/TodoList";
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState([
    {
      id:1,
      title:'first todo',
      status:true,
    },
    {
      id:2,
      title:'second todo',
      status:true,
    },
    {
      id:3,
      title:'thirf todo',
      status:false,
    },
  ]);
  
  return (
    <div className="App">
      <Header />
      <AddTodo todo={todo} setTodo={setTodo} />
      <TodoList todo={todo} setTodo={setTodo}/>
    </div>
  );
}
export default App;
