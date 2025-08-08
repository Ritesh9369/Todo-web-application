import styles from "./TodoItem.module.css";

function TodoItem({ todoName, todoDate , ondeleteclick }) {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles["col-6"]}>{todoName}</div>
        <div className={styles["col-4"]}>{todoDate}</div>
        <div className={styles["col-2"]}>
          <button
            type="button"
            className={`${styles.btn} ${styles["btn-danger"]}`}
            onClick={() => ondeleteclick(todoName)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;