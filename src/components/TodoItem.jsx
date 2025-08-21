import styles from "./TodoItem.module.css";
import { TodoItemsContext } from "../store/Todo-items-store";
import { useContext } from "react";

function TodoItem({ todoName, todoDate, }) {
  const { deleteItem } = useContext(TodoItemsContext);
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles["col-6"]}>{todoName}</div>
        <div className={styles["col-4"]}>{todoDate}</div>
        <div className={styles["col-2"]}>
          <button
            type="button"
            className={`${styles.btn} ${styles["btn-danger"]}`}
            onClick={() => deleteItem(todoName)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;