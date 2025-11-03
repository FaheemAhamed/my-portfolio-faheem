import { Menu, X, Home, FileText, FolderGit2, Briefcase, Mail, Code2 } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onLogoClick: () => void; // Add this line
}

function Navigation({ currentPage, onNavigate, onLogoClick }: NavigationProps) {
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
          className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#8a946f] to-[#768064] flex items-center justify-center shadow-[0_0_15px_rgba(138,148,111,0.3)] cursor-pointer overflow-hidden hover:shadow-[0_0_20px_rgba(138,148,111,0.5)] transition-all duration-300"
          onClick={onLogoClick} // Update this line
          title="Back to Landing"
        >
          <Code2 className="text-black" size={24} />
        </div>

        {navItems.map((item) => {
          const Icon = item.icon;
          const active = currentPage === item.name;
          return (
            <button
              key={item.name}
              onClick={() => onNavigate(item.name)}
              title={item.name}
              className={`w-11 h-11 rounded-lg flex items-center justify-center transition-all duration-300
                ${active 
                  ? 'bg-[#8a946f] text-black shadow-[0_0_20px_rgba(138,148,111,0.4)]' 
                  : 'bg-black/60 text-gray-300 hover:scale-110 hover:bg-[#768064]/10 hover:text-[#8a946f]'}`}
            >
              <Icon size={18} className={active ? '' : 'transition-transform duration-300 group-hover:scale-110'} />
            </button>
          );
        })}
      </nav>

      {/* Mobile menu button */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-10 h-10 rounded-lg bg-black/60 backdrop-blur-sm flex items-center justify-center text-[#8a946f] hover:bg-[#768064]/10 transition-all duration-300 shadow-[0_0_15px_rgba(138,148,111,0.2)]"
          aria-label="menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile slide-in menu */}
      <div 
        className={`md:hidden fixed inset-y-0 right-0 w-64 bg-black/95 backdrop-blur-md shadow-[0_0_30px_rgba(138,148,111,0.2)] transform transition-all duration-300 ease-in-out z-40 
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col gap-3 p-6 pt-20">
          <div 
            className="flex items-center gap-3 mb-6 cursor-pointer"
            onClick={() => {
              onLogoClick();
              setIsOpen(false);
            }}
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#8a946f] to-[#768064] flex items-center justify-center overflow-hidden shadow-[0_0_15px_rgba(138,148,111,0.3)]">
              <Code2 className="text-black" size={20} />
            </div>
            <div>
              <div className="text-white font-semibold hover:animate-shine">Faheem Ahmed</div>
              <div className="text-[#8a946f] text-xs filter drop-shadow-[0_0_8px_rgba(138,148,111,0.3)]">Full Stack Developer</div>
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
                className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl transition-all duration-300
                  ${active 
                    ? 'bg-[#8a946f] text-black shadow-[0_0_20px_rgba(138,148,111,0.4)]' 
                    : 'text-gray-300 hover:bg-[#768064]/10 hover:text-[#8a946f]'
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
