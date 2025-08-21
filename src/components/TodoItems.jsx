import TodoItem from "./TodoItem";
import { TodoItemsContext } from "../store/Todo-items-store";
import { useContext } from "react";

const TodoItems = () => {

  const { todoItems  } = useContext(TodoItemsContext);
  
  return (
    <div className="item-container">
      {todoItems.map((item, index) => (
        <TodoItem
          key={item.name}
          todoName={item.name}
          todoDate={item.duedate}
          
        ></TodoItem>
      ))}
    </div>
  );
};
export default TodoItems;
