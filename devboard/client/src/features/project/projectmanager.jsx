import ProjectForm from './projectform'
import ProjectList from './projectlist'
import useLocalStorage from '../../hooks/localstorage'
import useProjects from '../../hooks/useProject'

const ProjectTracker = () => {
  const { projects , addProject, deleteProject } = useProjects()

  return (
    <div className="mx-auto p-4 text-sm">
      <div className='flex justify-between items-center px-3 mb-4'>
      <h2 className="text-2xl font-bold mb-4 dark:text-green-300"> Project Tracker</h2>
      <ProjectForm setProjects={addProject} />
      </div>
      <ProjectList projects={projects} deleteProject={deleteProject} />
    </div>
  )
}

export default ProjectTracker
