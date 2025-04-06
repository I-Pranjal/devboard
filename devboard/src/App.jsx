import { useTheme } from './context/ThemeContext';
import React from 'react';
import DashboardLayout from './components/layout/DashboardLayout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectTracker from './features/project/projectmanager';
import TaskManager from './features/tasks/taskmanager';
import SnippetManager from './features/snippets/snippetmanager';

function App() {
  const { dark, toggleTheme } = useTheme();

  return (
           <Router> <DashboardLayout>
      <div className='dark:bg-gray-700 bg-gray-100 min-h-screen p-0'>
          <Routes>
            <Route path="/" element={<ProjectTracker />} />
            <Route path="/project-tracker" element={<ProjectTracker />} />
            <Route path="/task-tracker" element={<TaskManager />} />
            <Route path="/snippet-tracker" element={<SnippetManager />} />
          </Routes>
      </div>
    </DashboardLayout>
        </Router>
  );
}

export default App;
