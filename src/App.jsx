import AddName from "./components/AppName";
import AddTodo from "./components/AddTOdo";

import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/Welcomemessage";

import "./App.css";
import { use } from "react";
import { useState } from "react";
function App() {
  const [todoitems, setTodoItems] = useState([]);

  // Function to handle adding a new item
  const handleNewItem = (itemName, itemdueDate) => {
    
    setTodoItems((currentValue) => {
      const newtodoItems = [
        ...todoitems,
        { name: itemName, duedate: itemdueDate }
      ];
      return newtodoItems;
    }
    
    
    );
  };


  // Function to handle item deletion
  const handledeleteItem = (itemName) => {
    console.log(`Item Deleted: ${itemName}`);
    const newtodoItems = todoitems.filter((item) => item.name !== itemName);
    setTodoItems(newtodoItems);
  };

  // Function to handle item completion
  return (
    <center className="todo-container">
      <AddName></AddName>
      <AddTodo onNewitem={handleNewItem}></AddTodo>
      {todoitems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems
        todoItems={todoitems}
        ondeleteclick={handledeleteItem}
      ></TodoItems>
    </center>
  );
}

export default App;
