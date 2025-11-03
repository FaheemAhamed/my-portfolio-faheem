import { Menu, X, Home, FileText, FolderGit2, Briefcase, Mail } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'HOME', icon: Home },
    { name: 'RESUME', icon: FileText },
    { name: 'MY PROJECTS', icon: FolderGit2 },
    { name: 'MY SERVICES', icon: Briefcase },
    { name: 'CONTACT', icon: Mail }
  ];

  return (
    <>
      {/* Left vertical sidebar for md+ screens */}
      <nav className="hidden md:flex fixed left-4 top-1/2 transform -translate-y-1/2 z-50 flex-col gap-3 items-center">
        <div
          className="w-11 h-11 rounded-lg bg-gradient-to-br flex items-center justify-center shadow-md cursor-pointer overflow-hidden"
          onClick={() => onNavigate('HOME')}
          title="Home"
        >
          <img 
            src="/images/favicon.jpg" 
            alt="Logo" 
            className="w-full h-full object-cover"
          />
        </div>

        {navItems.map((item) => {
          const Icon = item.icon;
          const active = currentPage === item.name;
          return (
            <button
              key={item.name}
              onClick={() => onNavigate(item.name)}
              title={item.name}
              className={`w-11 h-11 rounded-lg flex items-center justify-center transition-transform duration-150
                ${active ? 'bg-cyan-400 text-black shadow-lg' : 'bg-black/60 text-gray-300 hover:scale-110 hover:bg-white/5'}`}
            >
              <Icon size={18} />
            </button>
          );
        })}
      </nav>

      {/* Mobile menu button */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-10 h-10 rounded-lg bg-black/60 backdrop-blur-sm flex items-center justify-center text-cyan-400 hover:bg-cyan-400/10 transition shadow-lg"
          aria-label="menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile slide-in menu */}
      <div 
        className={`md:hidden fixed inset-y-0 right-0 w-64 bg-black/95 backdrop-blur-md shadow-2xl transform transition-transform duration-300 ease-in-out z-40 
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col gap-3 p-6 pt-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center overflow-hidden">
              <img 
                src="/images/favicon.jpg" 
                alt="Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="text-white font-semibold">Faheem Ahmed</div>
              <div className="text-cyan-400 text-xs">Full Stack Developer</div>
            </div>
          </div>

          {navItems.map((item) => {
            const Icon = item.icon;
            const active = currentPage === item.name;
            return (
              <button
                key={item.name}
                onClick={() => {
                  onNavigate(item.name);
                  setIsOpen(false);
                }}
                className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl transition-colors
                  ${active 
                    ? 'bg-cyan-400 text-black' 
                    : 'text-gray-300 hover:bg-white/5'
                  }`}
              >
                <Icon size={18} />
                <span className="font-medium">{item.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

export default Navigation;
