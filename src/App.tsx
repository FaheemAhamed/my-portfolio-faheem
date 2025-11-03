import { useState } from 'react';
import Landing from './components/Landing';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [currentPage, setCurrentPage] = useState('HOME');

  if (!showPortfolio) {
    return <Landing onEnter={() => setShowPortfolio(true)} />;
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
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      {renderPage()}
    </div>
  );
}

export default App;
