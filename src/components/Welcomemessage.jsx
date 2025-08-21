import Styles from "./WelcomeMessage.module.css";
import { TodoItemsContext } from "../store/Todo-items-store";
import { useContext } from "react";
const WelcomeMessage = () => {
  const {todoItems} = useContext(TodoItemsContext);
  
  return (
    todoItems.length=== 0 && <p className={Styles.WelcomeMessage}>Enjoy your day</p>
    
  );
};

export default WelcomeMessage;
