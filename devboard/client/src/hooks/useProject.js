import {useEffect, useState} from 'react';
import axios from 'axios';

const API = 'http://localhost:5000/api/projects';

export default function useProjects() {
  const [projects, setProjects] = useState([]);

  // Get list of all projects
  const getProjects = async () => {
    try {
      const res = await axios.get(API);
      setProjects(res.data);
    } catch (err) {
      console.error('Failed to load projects', err);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  // Add a project
  const addProject = async (project) => {
    try {
      const res = await axios.post(API, project);
      setProjects([...projects, res.data]);
      getProjects(); // wait for it to complete
    } catch (err) {
      console.error('Failed to add project', err);
    }
  };

    // Delete a project
    const deleteProject = async (id) => {
        console.log('Deleting project with id:', id);
        try {
            await axios.delete(`${API}/${id}`);
            setProjects(projects.filter((project) => project.id !== id));
            getProjects(); // wait for it to complete
        } catch (err) {
            console.error('Failed to delete project', err);
        }
    } 
    
    
 return {
        projects,
        addProject,
        getProjects,
        deleteProject
    };
} 

   
    