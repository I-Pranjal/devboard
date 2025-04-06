import { useState } from "react"

const TaskItem = ({ task, setTasks }) => {
    const [isEditiing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(task.text);


  const toggleDone = () => {
      setTasks(prev =>
        prev.map(t => t.id === task.id ? { ...t, done: !t.done } : t)
      )
    }
  
    const deleteTask = () => {
      setTasks(prev => prev.filter(t => t.id !== task.id))
    }
  
    const handleEdit = () => {
      setIsEditing(true)
    }

    const handleSave = () => {
      setTasks(prev =>
        prev.map(t => t.id === task.id ? { ...t, text: editText } : t)
      )
      setIsEditing(false)
    }

    return (
      <div className="flex items-center justify-between bg-zinc-100 dark:bg-zinc-800 p-2 rounded dark:text-white text-xl"> 
       <div className="flex items-center gap-2 flex-1">
       <input type="checkbox" checked={task.done} onChange={toggleDone} className="cursor-pointer" />
       {isEditiing ? (
        <input className="flex-1 bg-transparent border-b border-zinc-300 dark:border-zinc-600 text-xl dark:text-white"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSave()}
          autoFocus />
       ): (
        <span 
        onDoubleClick={handleEdit}
        className={`flex-1 ${task.done ? 'line-through' : ''}`}>
        {task.text}
        </ span >
       )}
       </div> 

       <div className="flex gap-2">
        { isEditiing ? (
          <button onClick={handleSave} className="bg-green-400 text-white px-2 py-1 rounded">Save</button>
        ) : (
          <button onCLick={deleteTask} className="bg-red-400 text-white px-2 py-1 rounded">Delete</button>        
        )}
        </div>
      </div>
    )
  }
  
  export default TaskItem
  