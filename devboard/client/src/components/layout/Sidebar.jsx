import { Link } from "react-router-dom";
import { BarChart, Folder, LayoutDashboard, LayoutList , SquareDashedBottomCode, Brain } from "lucide-react"


const Sidebar = () => { 
  return (
    <aside className="w-64 bg-zinc-100 dark:bg-zinc-800 p-4 h-full dark:text-white text-xl">
      <nav className="flex flex-col gap-4">
        <Link to="dashboard" className="flex items-center gap-3"><LayoutDashboard /> Dashboard</Link>
        <Link to="task-tracker" className="flex items-center gap-3"><LayoutList />Tasks</Link>
        <Link to="snippet-tracker" className="flex items-center gap-3"><SquareDashedBottomCode />Snippets</Link>
        <Link to="project-tracker" className="flex items-center gap-3"><Folder /> Projects</Link>
        <Link to="inspiration" className="flex items-center gap-3"><Brain /> Brainstorm </Link>
      </nav>
    </aside>
  )
}

export default Sidebar;