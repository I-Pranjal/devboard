import { Link } from "react-router-dom";

const Sidebar = () => { 
  return (
    <aside className="w-64 bg-zinc-100 dark:bg-zinc-800 p-4 min-h-screen dark:text-white text-xl">
    <nav className="flex flex-col gap-4">
      <Link to="dashboard" className="hover:underline">📊 Dashboard</Link>
      <Link to="task-tracker" className="hover:underline">✅ Tasks</Link>
      <Link to="snippet-tracker" className="hover:underline">📂 Snippets</Link>
      <Link to="project-tracker" className="hover:underline">📦 Projects</Link>
      <Link to="inspiration" className="hover:underline">🧠 Brainstorm </Link>
    </nav>
    </aside>
  )
}

export default Sidebar;