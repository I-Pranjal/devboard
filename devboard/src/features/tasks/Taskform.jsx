import { useState } from 'react'

const TaskForm = ({ setTasks }) => {
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!input.trim()) return

    setTasks(prev => [...prev, { id: Date.now(), text: input, done: false }])
    setInput('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        className="flex-1 p-2 rounded border border-zinc-300 dark:bg-zinc-800 dark:text-white"
        placeholder="Add a new task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add
      </button>
    </form>
  )
}

export default TaskForm
