import { useEffect } from 'react'
import TaskItem from './TaskItem'

const TaskList = ({ tasks, setTasks }) => {
  // Save task to localstorage when change occurs
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks]);
  
  return (
    <div className="space-y-2">
      {tasks.length === 0 ? (
        <p className="text-zinc-500 dark:text-white">No tasks yet. Add one above! 🚀</p>
      ) : (
        tasks.map(task => (
          <TaskItem key={task.id} task={task} setTasks={setTasks} />
        ))
      )}
    </div>
  )
}

export default TaskList
