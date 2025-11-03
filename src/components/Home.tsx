import { Github, Linkedin, Mail, Phone, MapPin, Code2, Terminal, Sparkles } from 'lucide-react';

function Home() {
  return (
    <div className="min-h-screen bg-black pt-4 md:pt-6 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/6 left-1/8 w-48 h-48 sm:w-80 sm:h-80 md:w-[600px] md:h-[600px] bg-cyan-500/6 rounded-full filter blur-[80px] md:blur-[150px]"></div>
        <div className="absolute bottom-1/6 right-1/8 w-48 h-48 sm:w-80 sm:h-80 md:w-[600px] md:h-[600px] bg-blue-500/6 rounded-full filter blur-[80px] md:blur-[150px]"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6">
        {/* Welcome section - moved to top */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="text-cyan-400" size={24} />
            <span className="text-cyan-400 font-semibold tracking-wide">WELCOME TO MY PORTFOLIO</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight"> 
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">FAHEEM AHMED</span>
          </h1>
        </div>

        <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-start">
          {/* Card - moved after welcome text */}
          <div className="md:col-span-2 flex justify-center md:justify-end order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-3xl filter blur-3xl"></div>
              <div className="relative w-64 h-96 md:w-72 md:h-[450px] bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-3xl border-2 border-cyan-400/30 shadow-[0_0_60px_rgba(34,211,238,0.3)] overflow-hidden">
                {/* Profile image - increased opacity and added brightness/contrast filters */}
                <img 
                  src="/images/faheem.jpg" 
                  alt="Faheem Ahmed"
                  className="absolute top-0 left-0 w-full h-full object-cover opacity-70 brightness-110 contrast-110"
                />

                {/* Lighter gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-500/5 mix-blend-overlay"></div>

                {/* Border gradients - kept same for design consistency */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
                <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-cyan-400 to-transparent"></div>
                <div className="absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent"></div>

                {/* Content container - added slight background for text readability */}
                <div className="absolute top-0 left-0 right-0 p-6 space-y-1.5 bg-gradient-to-b from-black/30 to-transparent">
                  <div className="flex items-center gap-2">
                    <Code2 className="text-cyan-400" size={16} />
                    <div>
                      <div className="text-white text-xs font-medium">Full Stack Development</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Terminal className="text-blue-400" size={16} />
                    <div>
                      <div className="text-white text-xs font-medium">React & Angular Expert</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content section - moved after card */}
          <div className="md:col-span-3 order-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 border border-cyan-400/30 rounded-full">
                <Terminal className="text-cyan-400" size={18} />
                <span className="text-gray-300 font-medium">Full Stack Web Developer</span>
              </div>
            </div>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
              Computer Science undergraduate with strong skills in Python and full-stack web development.
              Completed multiple front-end and full-stack training programs with hands-on projects.
              Quick learner and problem-solver, eager to contribute technical expertise in software development roles.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              <div className="flex items-center gap-3 px-4 py-3 bg-white/5 border border-white/10 rounded-xl hover:border-cyan-400/30 transition-all duration-300 group">
                <div className="w-10 h-10 bg-cyan-400/10 rounded-lg flex items-center justify-center group-hover:bg-cyan-400/20 transition-all">
                  <MapPin className="text-cyan-400" size={18} />
                </div>
                <span className="text-gray-300 text-sm">Narasaraopet, AP, India</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 bg-white/5 border border-white/10 rounded-xl hover:border-cyan-400/30 transition-all duration-300 group">
                <div className="w-10 h-10 bg-cyan-400/10 rounded-lg flex items-center justify-center group-hover:bg-cyan-400/20 transition-all">
                  <Phone className="text-cyan-400" size={18} />
                </div>
                <span className="text-gray-300 text-sm">+91-8522848042</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 bg-white/5 border border-white/10 rounded-xl hover:border-cyan-400/30 transition-all duration-300 group sm:col-span-2">
                <div className="w-10 h-10 bg-cyan-400/10 rounded-lg flex items-center justify-center group-hover:bg-cyan-400/20 transition-all">
                  <Mail className="text-cyan-400" size={18} />
                </div>
                <span className="text-gray-300 text-sm">faheemshaik533@gmail.com</span>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/faheem-ahmed-shaik/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold rounded-xl hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-all duration-300 hover:scale-105"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/FaheemAhamed"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-6 py-3 bg-white/5 border-2 border-cyan-400/30 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black hover:border-cyan-400 transition-all duration-300 hover:scale-105"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
