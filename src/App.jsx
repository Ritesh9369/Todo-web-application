import AddName from "./components/AppName";
import AddTodo from "./components/AddTOdo";

import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/Welcomemessage";

import "./App.css";
import { use } from "react";
import { useState } from "react";
function App() {
  // const initialtodoItems = [
  //   { name: "Buy Milk", duedate: "4/5/2025" },
  //   { name: "go to college", duedate: "4/6/2025" },
  //   { name: "Buy Groceries", duedate: "4/7/2025" },
  //   { name: " Assignment", duedate: "4/8/2025" }
  // ];
  const [todoitems, setTodoItems] = useState([]);
  // const [todoitems, setTodoItems] = useState(initialtodoItems);
  const handleNewItem = (itemName, itemdueDate) => {
    console.log(`New Item Added: ${itemName} ${itemdueDate}`);
    const newtodoItems = [...todoitems,{ name: itemName, duedate: itemdueDate }];
    setTodoItems(newtodoItems);
           
  }
  const handledeleteItem = (itemName) => {
    console.log(`Item Deleted: ${itemName}`);
    const newtodoItems = todoitems.filter((item) => item.name !== itemName);
    setTodoItems(newtodoItems);
  };
  return (
    <center className="todo-container">
      <AddName></AddName>
      <AddTodo onNewitem={handleNewItem}></AddTodo>
      {todoitems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems todoItems={todoitems} ondeleteclick={handledeleteItem}></TodoItems>
    </center>
  );
}

export default App;
