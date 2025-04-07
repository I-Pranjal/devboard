import SnippetForm from './snippetform'
import SnippetList from './snippetlist'
import useLocalStorage from '../../hooks/localstorage'
import useSnippets from '@hooks/useSnippet'

const SnippetManager = () => {
  const { snippets, getSnippets, addSnippet, deleteSnippet} = useSnippets()

  return (
    <div className="mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 dark:text-white">Snippet Manager</h2>
      <SnippetForm addSnippet={addSnippet} />
      <SnippetList snippets={snippets} setSnippets={getSnippets} deleteSnippet={deleteSnippet} />
    </div>
  )
}

export default SnippetManager
