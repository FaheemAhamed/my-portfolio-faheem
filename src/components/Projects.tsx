import { Code, Car, Vote, Globe, Film, Clock } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  icon: typeof Car;
}

function Projects() {
  const projects: Project[] = [
    {
      title: 'Car Accessories & Services Website',
      description: 'Engineered a dynamic front-end using React for a platform to book car services and purchase accessories. Implemented reusable UI components and managed application state to ensure a seamless and intuitive user experience.',
      tech: ['React', 'HTML', 'CSS'],
      image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      icon: Car
    },
    {
      title: 'Vote Smart – Online Voting Awareness',
      description: 'Developed a full-stack voter awareness application using an Angular front-end, Node.js/Express.js backend, and MySQL database. Designed and implemented a secure registration form with backend validation for Aadhar/Voter ID data.',
      tech: ['Angular', 'Node.js', 'Express.js', 'MySQL'],
      image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      icon: Vote
    },
    {
      title: 'Responsive Portfolio Website',
      description: 'Built a comprehensive portfolio website featuring About, Skills, Projects, and Contact sections using HTML5, CSS3, and JavaScript with full responsive design.',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      icon: Globe
    },
    {
      title: 'Movie Search App',
      description: 'Developed a Movie Search application with real-time results using OMDb API. Implemented responsive UI and comprehensive error handling for seamless user experience.',
      tech: ['JavaScript', 'OMDb API', 'HTML', 'CSS'],
      image: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      icon: Film
    },
    {
      title: 'Digital Clock Application',
      description: 'Created a Digital Clock Application with live second-wise updates and support for both 12-hour and 24-hour format displays.',
      tech: ['JavaScript', 'HTML', 'CSS'],
      image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      icon: Clock
    }
  ];

  return (
    <div className="min-h-screen bg-black py-20 relative overflow-hidden">
      {/* Updated background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[1000px] h-[1000px] bg-[#768064]/5 rounded-full filter blur-[180px] -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[1000px] h-[1000px] bg-[#8a946f]/5 rounded-full filter blur-[180px] translate-x-1/2 translate-y-1/2 animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Enhanced header section */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <div className="inline-flex items-center gap-3 px-6 py-2.5 bg-[#768064]/10 border border-[#768064]/30 rounded-full mb-8 hover:bg-[#768064]/20 transition-all duration-300">
            <Code className="text-[#8a946f]" size={22} />
            <span className="text-[#8a946f] font-semibold tracking-wider">PORTFOLIO</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            My Recent <span className="bg-gradient-to-r from-[#8a946f] to-[#768064] bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-gray-400 text-xl leading-relaxed">
            Showcasing my expertise in web development through real-world applications
          </p>
        </div>

        {/* Updated project grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl overflow-hidden 
                hover:border-[#768064]/50 transition-all duration-500 
                hover:shadow-[0_0_50px_rgba(118,128,100,0.15)] hover:-translate-y-2"
              >
                <div
                  className="h-56 relative overflow-hidden"
                  style={{ background: project.image }}
                >
                  <div className="absolute inset-0 bg-black/75 group-hover:bg-black/60 transition-all duration-500"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center 
                    border border-white/20 group-hover:border-[#768064]/50 
                    group-hover:bg-[#768064]/20 transition-all duration-500 group-hover:scale-110">
                      <Icon className="text-white group-hover:text-[#8a946f] transition-colors" size={44} />
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#8a946f] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-base mb-8 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Updated tech stack badges */}
                  <div className="flex flex-wrap gap-2.5">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 text-sm bg-[#768064]/5 border border-[#768064]/20 
                        text-[#8a946f] rounded-lg font-medium 
                        group-hover:bg-[#768064]/10 group-hover:border-[#768064]/40 
                        transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
