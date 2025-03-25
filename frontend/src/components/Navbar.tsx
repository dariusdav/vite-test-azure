
interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Navbar({ darkMode, toggleDarkMode }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-gray-800 dark:text-white">
              Steam Ranker
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#" className="text-gray-600 dark:text-gray-200 hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Home
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-200 hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Top 100
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-200 hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                About
              </a>
            </div>
          </div>

          {/* Dark Mode Toggle */}
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? '🌞' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  );
} 