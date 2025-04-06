import ProjectForm from './projectform'
import ProjectList from './projectlist'
import useLocalStorage from '../../hooks/localstorage'

const ProjectTracker = () => {
  const [projects, setProjects] = useLocalStorage('projects', [])

  return (
    <div className="mx-auto p-4 text-sm">
      <h2 className="text-2xl font-bold mb-4 dark:text-green-300"> Project Tracker</h2>
      <ProjectForm setProjects={setProjects} />
      <ProjectList projects={projects} setProjects={setProjects} />
    </div>
  )
}

export default ProjectTracker
