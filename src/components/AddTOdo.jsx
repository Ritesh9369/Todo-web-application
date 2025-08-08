import styles from "./AddTOdo.module.css";
import React, { useState } from "react";
function AddTodo({ onNewitem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName( event.target.value);
  }
  const handleDateChange = (event) => {
    setDueDate( event.target.value);
  }
  const handleAddButtonClick = () => {
    onNewitem(todoName, dueDate);
    setTodoName(""); // Clear input after adding    
    setDueDate(""); // Clear date input after adding  
   }
  return (
    <div className={`${styles.container} text-center`}>
      <div className={styles.row}>
        <div className={styles.col6}>
          <input
            type="text"
            placeholder="Enter Todo Here"
            className={styles.inputText}
            onChange={handleNameChange}
            value={todoName}
          />
        </div>
        <div className={styles.col4}>
          <input type="date" className={styles.inputDate} onChange={handleDateChange} value={dueDate}/>
        </div>
        <div className={styles.col2}>
          <button
            type="button"
            className={styles.btnSuccess}
            onClick={handleAddButtonClick}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
