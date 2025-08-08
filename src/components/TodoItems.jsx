import TodoItem from "./TodoItem";
const TodoItems = ({ todoItems, ondeleteclick }) => {
  return (
    <div className="item-container">
      {todoItems.map((item, index) => (
        <TodoItem
          key={item.name}
          todoName={item.name}
          todoDate={item.duedate}
          ondeleteclick={ondeleteclick}
        ></TodoItem>
      ))}
    </div>
  );
};
export default TodoItems;
