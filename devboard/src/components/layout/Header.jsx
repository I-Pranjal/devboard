import { useTheme } from '../../context/ThemeContext'

const Header = () => {
  const { dark, toggleTheme } = useTheme()

  return (
    <header className="p-4 shadow flex justify-between items-center bg-white dark:bg-zinc-900 dark:text-white">
      <h1 className="text-xl font-bold">DevBoard</h1>
      <button
        onClick={toggleTheme}
        className="bg-zinc-200 dark:bg-zinc-700 px-4 py-2 rounded transition"
      >
        {dark === true ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
    </header>
  )
}

export default Header
