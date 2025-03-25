import { StrictMode, useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './components/Navbar'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom';

function Main() {
  const [darkMode, setDarkMode] = useState(() => 
    localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className="pt-16">
        <App />
      </div>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </StrictMode>,
)
