import React, { useState, useRef, useEffect } from 'react'

export default function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(todo.text);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditing) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  function handleSave() {
    const trimmedValue = value.trim();
    if (trimmedValue === '') {
      onDelete(todo.id); // Hapus jika teks kosong setelah edit
    } else if (trimmedValue !== todo.text) {
      onEdit(todo.id, trimmedValue);
    }
    setIsEditing(false);
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      setValue(todo.text); // Batalkan edit dan kembalikan teks asli
      setIsEditing(false);
    }
  }

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="left">
        <label className="checkbox-wrap">
          <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)} />
          <svg className="check" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>
        </label>
        {!isEditing ? (
          <div className="text-wrap" onDoubleClick={() => setIsEditing(true)}>
            <span className="text">{todo.text}</span>
          </div>
        ) : (
          <div className="edit-wrap">
            <input
              ref={inputRef}
              className="edit-input"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={handleKeyDown}
              onBlur={handleSave}
            />
            <button className="btn small" onClick={handleSave}>
              Simpan
            </button>
          </div>
        )}
      </div>
      <div className="actions">
        <button className="btn small ghost" onClick={() => setIsEditing(!isEditing)}>{isEditing ? 'Batal' : 'Edit'}</button>
        <button className="btn small danger" onClick={() => onDelete(todo.id)}>Hapus</button>
      </div>
    </li>
  );
}