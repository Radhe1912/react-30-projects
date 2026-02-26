import { useState } from 'react'

function App() {
  const [todo, setTodo] = useState([])
  const [val, setVal] = useState('')

  const handleClick = () => {
    if (!val.trim()) return

    const newTodo = {
      id: Date.now(),
      task: val,
    }

    setTodo(prev => [...prev, newTodo])
    setVal('')
  }

  const handleDelete = (id) => {
    setTodo(todo.filter(t => t.id!==id))
  }

  const valid = todo.filter(t => !t.status)

  return (
    <>
      <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
      <button onClick={handleClick}>Add</button>

      {valid.map(t => (
        <div key={t.id}>
          <h1>{t.task}</h1>
          <button onClick={() => handleDelete(t.id)}>Delete</button>
        </div>
      ))}
    </>
  )
}

export default App
