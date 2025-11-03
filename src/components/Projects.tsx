import { Code, Car, Vote, Layout, Film, Clock } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
}

function Projects() {
  const projects: Project[] = [
    {
      title: 'Car Accessories & Services Website',
      description: 'Engineered a dynamic front-end using React for a platform to book car services and purchase accessories. Implemented reusable UI components and managed application state to ensure a seamless and intuitive user experience.',
      tech: ['React', 'HTML', 'CSS'],
      image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      title: 'Vote Smart – Online Voting Awareness',
      description: 'Developed a full-stack voter awareness application using an Angular front-end, Node.js/Express.js backend, and MySQL database. Designed and implemented a secure registration form with backend validation for Aadhar/Voter ID data.',
      tech: ['Angular', 'Node.js', 'Express.js', 'MySQL'],
      image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      title: 'Responsive Portfolio Website',
      description: 'Built a comprehensive portfolio website featuring About, Skills, Projects, and Contact sections using HTML5, CSS3, and JavaScript with full responsive design.',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      image: '/images/portfolio.png', // Updated image path
    },
    {
      title: 'Movie Search App',
      description: 'Developed a Movie Search application with real-time results using OMDb API. Implemented responsive UI and comprehensive error handling for seamless user experience.',
      tech: ['JavaScript', 'OMDb API', 'HTML', 'CSS'],
      image: '/images/movies.png', // Updated image path
    },
    {
      title: 'Digital Clock Application',
      description: 'Created a Digital Clock Application with live second-wise updates and support for both 12-hour and 24-hour format displays.',
      tech: ['JavaScript', 'HTML', 'CSS'],
      image: '/images/digital.png', // Updated image path
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
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl overflow-hidden 
              hover:border-[#768064]/50 transition-all duration-500 
              hover:shadow-[0_0_50px_rgba(118,128,100,0.15)] hover:-translate-y-2"
            >
              <div className="h-56 relative overflow-hidden">
                {project.image.startsWith('/') || project.image.startsWith('http') ? (
                  // Render image if path exists
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  // Render gradient background with icon if no image path
                  <div 
                    className="w-full h-full flex items-center justify-center"
                    style={{ background: project.image }}
                  >
                    {/* Render appropriate icon based on project title */}
                    {project.title.includes('Car') && <Car className="w-16 h-16 text-white/50" />}
                    {project.title.includes('Vote') && <Vote className="w-16 h-16 text-white/50" />}
                    {project.title.includes('Portfolio') && <Layout className="w-16 h-16 text-white/50" />}
                    {project.title.includes('Movie') && <Film className="w-16 h-16 text-white/50" />}
                    {project.title.includes('Clock') && <Clock className="w-16 h-16 text-white/50" />}
                  </div>
                )}
                <div className="absolute inset-0 bg-black/75 group-hover:bg-black/60 transition-all duration-500"></div>
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
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
