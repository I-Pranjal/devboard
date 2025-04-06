import { useState } from 'react'

const SnippetItem = ({ snippet, setSnippets }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(snippet.snippet)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleDelete = () => {
    if (confirm(`Delete snippet "${snippet.title}"?`)) {
      setSnippets(prev => prev.filter(s => s.id !== snippet.id))
    }
  }

  return (
    <div className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-lg shadow dark:text-white">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-xl font-semibold">{snippet.title}</h3>
        <div className='flex gap-3'>
        <span className="text-sm bg-blue-200 text-blue-800 dark:bg-blue-900 dark:text-blue-300 px-2 py-1 rounded">
          {snippet.language}
        </span>
        <button
          onClick={handleCopy}
          className="bg-amber-600 text-white px-3 py-1 rounded hover:bg-amber-700"
          >
          {copied ? '✅ Copied!' : '📋 Copy'}
        </button>
            </div>
      </div>

      {snippet.description && (
        <p className="mb-2 text-sm text-zinc-600 dark:text-zinc-400">
          {snippet.description}
        </p>
      )}

      <pre className="bg-zinc-200 dark:bg-zinc-900 p-3 rounded text-sm overflow-auto font-mono">
        <code className="whitespace-pre-wrap">{snippet.snippet}</code>
      </pre>

      <div className="flex gap-3 mt-3">
        
        <button
          onClick={handleDelete}
          className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 shadow-sm shadow-black"
        >
         Delete Snippet
        </button>
      </div>
    </div>
  )
}

export default SnippetItem
