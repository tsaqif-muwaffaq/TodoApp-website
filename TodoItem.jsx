// import React, { useState, useRef, useEffect } from "react";

// export default function TodoItem({ todo, onToggle, onDelete, onEdit }) {
//   const [isEditing, setIsEditing] = useState(false);
//   const [text, setText] = useState(todo.text);
//   const inputRef = useRef(null);

//   // Fokus ke input saat mode edit aktif
//   useEffect(() => {
//     if (isEditing) {
//       inputRef.current.focus();
//     }
//   }, [isEditing]);

//   const handleDoubleClick = () => {
//     setIsEditing(true);
//   };

//   const handleSave = () => {
//     if (text.trim() === "") {
//       onDelete(todo.id); // Hapus jika teks kosong
//     } else {
//       onEdit(todo.id, text);
//     }
//     setIsEditing(false);
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter") {
//       handleSave();
//     } else if (e.key === "Escape") {
//       setText(todo.text); // Batalkan edit
//       setIsEditing(false);
//     }
//   };

//   return (
//     <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
//       <input
//         type="checkbox"
//         checked={todo.completed}
//         onChange={() => onToggle(todo.id)}
//         className="todo-checkbox"
//       />
//       {isEditing ? (
//         <input
//           ref={inputRef}
//           type="text"
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//           onBlur={handleSave}
//           onKeyDown={handleKeyDown}
//           className="edit-input"
//         />
//       ) : (
//         <span onDoubleClick={handleDoubleClick} className="todo-text">{todo.text}</span>
//       )}
//       <button onClick={() => onDelete(todo.id)} className="delete-btn">×</button>
//     </li>
//   );
// }