import { Monitor, Smartphone, Database, Code2, Layout, Server } from 'lucide-react';

interface Service {
  icon: typeof Monitor;
  title: string;
  description: string;
}

function Services() {
  const services: Service[] = [
    {
      icon: Monitor,
      title: 'Web Development',
      description: 'Building responsive and dynamic web applications using modern technologies like React, Angular, and Node.js with focus on user experience and performance.'
    },
    {
      icon: Layout,
      title: 'Front-End Development',
      description: 'Creating beautiful, intuitive, and responsive user interfaces using HTML5, CSS3, JavaScript, React.js, and Angular with modern design principles.'
    },
    {
      icon: Server,
      title: 'Back-End Development',
      description: 'Developing robust server-side applications and RESTful APIs using Node.js, Express.js with secure authentication and data validation.'
    },
    {
      icon: Database,
      title: 'Database Design',
      description: 'Designing and implementing efficient database schemas and queries using MySQL with optimization for performance and scalability.'
    },
    {
      icon: Code2,
      title: 'Full Stack Solutions',
      description: 'End-to-end development of web applications from database design to front-end implementation with seamless integration and deployment.'
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Creating mobile-first, responsive designs that work flawlessly across all devices and screen sizes with optimal user experience.'
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-4 md:pt-6 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/6 left-1/8 w-48 h-48 sm:w-80 sm:h-80 md:w-[600px] md:h-[600px] bg-cyan-500/6 rounded-full filter blur-[80px] md:blur-[150px]"></div>
        <div className="absolute bottom-1/6 right-1/8 w-48 h-48 sm:w-80 sm:h-80 md:w-[600px] md:h-[600px] bg-blue-500/6 rounded-full filter blur-[80px] md:blur-[150px]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-400/10 border border-cyan-400/30 rounded-full mb-4">
            <Code2 className="text-cyan-400" size={20} />
            <span className="text-cyan-400 font-semibold text-sm">SERVICES</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            What I offer to help you achieve your goals and bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(34,211,238,0.2)] hover:scale-[1.02] group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 border border-cyan-400/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-cyan-400/20 group-hover:to-blue-500/20 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] group-hover:scale-110 transition-all duration-500">
                  <Icon className="text-cyan-400 group-hover:text-cyan-300 transition-colors" size={32} />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Services;
