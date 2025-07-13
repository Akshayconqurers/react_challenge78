import React, { useState } from 'react';
import { useProjects } from '../contexts/ProjectContext';

const ProjectManager = () => {
  const { projects, addProject, deleteProject } = useProjects();
  const [projectName, setProjectName] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (projectName.trim()) {
      addProject({ name: projectName, status: 'active' });
      setProjectName('');
    }
  };
  
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', margin: '10px 0' }}>
      <h3>Project Manager</h3>
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          placeholder="Enter project name"
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <button type="submit">Add Project</button>
      </form>
      
      <div style={{ marginTop: '20px' }}>
        <h4>Projects:</h4>
        {projects.length === 0 ? (
          <p>No projects yet. Add your first project!</p>
        ) : (
          projects.map(project => (
            <div key={project.id} style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              padding: '10px',
              border: '1px solid #eee',
              margin: '5px 0'
            }}>
              <span>{project.name}</span>
              <button onClick={() => deleteProject(project.id)}>Delete</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProjectManager;