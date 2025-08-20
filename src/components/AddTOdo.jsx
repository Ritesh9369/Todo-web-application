import styles from "./AddTOdo.module.css";
import React, { useState } from "react";
import { useRef } from "react";
function AddTodo({ onNewitem }) {

  const todoNameElement = React.useRef();
  const dueDateElement = React.useRef();

  const handleAddButtonClick = (event) => {
    event.preventDefault(); // Prevent form submission
    const todoName= todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
   
    onNewitem(todoName, dueDate);
  };
  return (
    <div className={`${styles.container} text-center`}>
      <form className={styles.row} onSubmit={handleAddButtonClick}>
        <div className={styles.col6}>
          <input
            type="text"
            placeholder="Enter Todo Here"
            className={styles.inputText}
            ref={todoNameElement}
          />
        </div>
        <div className={styles.col4}>
          <input
            type="date"
            className={styles.inputDate}
            ref={dueDateElement}
            placeholder="Enter Due Date"
          />
        </div>
        <div className={styles.col2}>
          <button type="submit" className={styles.btnSuccess}>
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
