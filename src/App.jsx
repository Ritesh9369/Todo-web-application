import AddName from "./components/AppName";
import AddTodo from "./components/AddTOdo";

import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/Welcomemessage";

import "./App.css";
import { use } from "react";
import { useState } from "react";
import { TodoItemsContext } from "./store/Todo-items-store";
function App() {
  const [todoItems, setTodoItems] = useState([]);

  // Function to handle adding a new item
  const addNewItem= (itemName, itemdueDate) => {
    setTodoItems((currentValue) => {
      const newtodoItems = [
        ...todoItems,
        { name: itemName, duedate: itemdueDate }
      ];
      return newtodoItems;
    });
  };

  // Function to handle item deletion
  const deleteItem = (itemName) => {
    console.log(`Item Deleted: ${itemName}`);
    const newtodoItems = todoItems.filter((item) => item.name !== itemName);
    setTodoItems(newtodoItems);
  };

  // Function to handle item completion
  return (
    <TodoItemsContext.Provider value={{ todoItems , addNewItem, deleteItem }}>
      <center className="todo-container">
        <AddName></AddName>
        <AddTodo></AddTodo>
        <WelcomeMessage ></WelcomeMessage>
        <TodoItems
          
          
        ></TodoItems>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
