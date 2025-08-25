import { useState } from "react";

function AddTodo({ onAdd }) {
  const [text, setText] = useState(""); // controla o campo do input

  const handleSubmit = (e) => {
    e.preventDefault();   // evita recarregar a página
    if (text.trim() === "") return;  // não adiciona vazio
    onAdd(text);          // chama a função do App.jsx
    setText("");          // limpa o input
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Digite uma tarefa..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default AddTodo;
