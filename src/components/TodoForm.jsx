import React, { useState, useRef } from 'react'


export default function TodoForm({ onAdd }) {
const [text, setText] = useState('')
const inputRef = useRef(null)


function submit(e) {
e.preventDefault()
onAdd(text)
setText('')
inputRef.current.focus()
}


return (
<form className="todo-form" onSubmit={submit}>
<input
ref={inputRef}
className="input"
placeholder="Tambah todo... (tekan Enter untuk menyimpan)"
value={text}
onChange={e => setText(e.target.value)}
aria-label="Input todo"
/>
<button type="submit" className="btn">Tambah</button>
</form>
)
}