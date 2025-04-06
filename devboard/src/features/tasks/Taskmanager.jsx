import TaskForm from './Taskform'
import TaskList from './TaskList'
import { useEffect, useRef, useState } from 'react'
import useLocalStorage from '../../hooks/localstorage'


const TaskManager = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', []); 
  const [filter, setFilter] = useState('all') // We will switch between all, active and done 
    const hasLoaded = useRef(false)

  // Load tasks from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('tasks')) || []
    setTasks(stored)
    hasLoaded.current = true
  }, [])

  // Save to localStorage on change
  useEffect(() => {
    if(hasLoaded.current) {
      localStorage.setItem('tasks', JSON.stringify(tasks))
    }
  }, [tasks])

  const filteredTasks = tasks.filter(task => {
    if(filter === 'done') return task.done
    if(filter === 'active') return !task.done
    return true })

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 dark:text-amber-300">📝 Tasks</h2>
      <div className='flex justify-between mb-4'>
      <TaskForm setTasks={setTasks} />

      <div className="flex gap-2 mb-4">
        {['all', 'active', 'done'].map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1 rounded ${
              filter === f
                ? 'bg-blue-500 text-white'
                : 'bg-zinc-200 dark:bg-zinc-700 dark:text-white'
            }`}
          >
            {f[0].toUpperCase() + f.slice(1)}
          </button>
        ))}
        </div>
      </div>

      <TaskList tasks={filteredTasks} setTasks={setTasks} />
    </div>
  )
}

export default TaskManager
