import React, { createContext, useContext, useState } from 'react';

const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  
  const addProject = (project) => {
    setProjects(prev => [...prev, { ...project, id: Date.now() }]);
  };
  
  const deleteProject = (id) => {
    setProjects(prev => prev.filter(p => p.id !== id));
  };
  
  return (
    <ProjectContext.Provider value={{
      projects,
      addProject,
      deleteProject
    }}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjects = () => useContext(ProjectContext);