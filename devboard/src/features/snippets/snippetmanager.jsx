import SnippetForm from './snippetform'
import SnippetList from './snippetlist'
import useLocalStorage from '../../hooks/localstorage'

const SnippetManager = () => {
  const [snippets, setSnippets] = useLocalStorage('snippets', [])

  return (
    <div className="mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 dark:text-white">Snippet Manager</h2>
      <SnippetForm setSnippets={setSnippets} />
      <SnippetList snippets={snippets} setSnippets={setSnippets} />
    </div>
  )
}

export default SnippetManager
