import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { ProjectProvider } from './contexts/ProjectContext';
import ThemeToggle from './components/ThemeToggle';
import Counter from './components/Counter';
import ProjectManager from './components/ProjectManager';

function App() {
  return (
    <ThemeProvider>
      <ProjectProvider>
        <div style={{ padding: '20px' }}>
          <h1>Day 4: State Management</h1>
          <ThemeToggle />
          <Counter />
          <ProjectManager />
        </div>
      </ProjectProvider>
    </ThemeProvider>
  );
}

export default App;