import SnippetItem from './snippetitem'

const SnippetList = ({ snippets, setSnippets }) => {
  if (snippets.length === 0) {
    return <p className="text-zinc-500 dark:text-zinc-400">No snippets saved yet.</p>
  }

  return (
    <div className="space-y-4">
      {snippets.map(snippet => (
        <SnippetItem
          key={snippet.id}
          snippet={snippet}
          setSnippets={setSnippets}
        />
      ))}
    </div>
  )
}

export default SnippetList
