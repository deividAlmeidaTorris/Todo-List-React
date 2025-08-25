function TodoItem({ todo, onToggle, onDelete }) {
    return (
      <li style={{ textDecoration: todo.done ? "line-through" : "none" }}>
        {todo.text}
        <button onClick={() => onToggle(todo.id)}>✔</button>
        <button onClick={() => onDelete(todo.id)}>❌</button>
      </li>
    );
  }
  
  export default TodoItem;
  