import ProjectItem from './projectitem'

const ProjectList = ({ projects, setProjects }) => {
  const handleDelete = id => {
    const confirmed = window.confirm('Delete this project?')
    if (confirmed) {
      setProjects(prev => prev.filter(project => project.id !== id))
    }
  }

  const handleStatusChange = (id, newStatus) => {
    setProjects(prev =>
      prev.map(project =>
        project.id === id ? { ...project, status: newStatus } : project
      )
    )
  }

  if (projects.length === 0) {
    return <p className="text-zinc-500">No projects yet.</p>
  }

  return (
    <div className="space-y-4">
      {projects.map(project => (
        <ProjectItem
          key={project.id}
          project={project}
          onDelete={handleDelete}
          onStatusChange={handleStatusChange}
        />
      ))}
    </div>
  )
}

export default ProjectList
