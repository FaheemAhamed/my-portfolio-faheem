import { useState, useEffect } from 'react';
import Landing from './components/Landing';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  // Initialize states from localStorage or default values
  const [showPortfolio, setShowPortfolio] = useState(() => {
    const saved = localStorage.getItem('showPortfolio');
    return saved ? JSON.parse(saved) : false;
  });
  
  const [currentPage, setCurrentPage] = useState(() => {
    const saved = localStorage.getItem('currentPage');
    return saved || 'HOME';
  });

  // Update localStorage when states change
  useEffect(() => {
    localStorage.setItem('showPortfolio', JSON.stringify(showPortfolio));
  }, [showPortfolio]);

  useEffect(() => {
    localStorage.setItem('currentPage', currentPage);
  }, [currentPage]);

  // Handle navigation and portfolio visibility
  const handleEnter = () => {
    setShowPortfolio(true);
  };

  const handleLogoClick = () => {
    setShowPortfolio(false);
    localStorage.removeItem('showPortfolio');
    localStorage.removeItem('currentPage');
  };

  if (!showPortfolio) {
    return <Landing onEnter={handleEnter} />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'HOME':
        return <Home />;
      case 'RESUME':
        return <Resume />;
      case 'MY PROJECTS':
        return <Projects />;
      case 'MY SERVICES':
        return <Services />;
      case 'CONTACT':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Navigation 
        currentPage={currentPage} 
        onNavigate={setCurrentPage}
        onLogoClick={handleLogoClick}
      />
      {renderPage()}
    </div>
  );
}

export default App;
