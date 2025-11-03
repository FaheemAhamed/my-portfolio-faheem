import { GraduationCap, Briefcase, Code, Award, FileText, Languages, Mail, Phone, MapPin } from 'lucide-react';

function Resume() {
  return (
    <div className="min-h-screen bg-black py-20 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-[#768064]/5 rounded-full filter blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[800px] h-[800px] bg-[#768064]/5 rounded-full filter blur-[150px] animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        {/* Enhanced header section */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <div className="inline-flex items-center gap-3 px-6 py-2.5 bg-[#768064]/10 border border-[#768064]/30 rounded-full mb-8">
            <FileText className="text-[#8a946f]" size={22} />
            <span className="text-[#8a946f] font-semibold tracking-wider">RESUME</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            My <span className="bg-gradient-to-r from-[#8a946f] to-[#768064] bg-clip-text text-transparent">Experience</span>
          </h1>
          <p className="text-gray-400 text-xl leading-relaxed">
            A comprehensive overview of my education, skills, and professional journey
          </p>
        </div>

        <div className="space-y-24">
          {/* Education section with improved spacing and larger icons */}
          <section>
            <div className="flex items-center gap-4 mb-10">
              <GraduationCap className="text-[#8a946f]" size={40} />
              <h2 className="text-4xl font-bold text-white">Education</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-6 hover:border-[#768064]/40 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-[#8a946f] group-hover:text-[#768064]">B.Tech – Computer Science & Engineering</h3>
                  <span className="px-3 py-1 bg-[#768064]/10 border border-[#768064]/30 rounded-full text-[#8a946f] text-xs font-semibold">Ongoing</span>
                </div>
                <p className="text-white mb-1 font-medium">Narasaraopeta Engineering College</p>
                <p className="text-gray-400 text-sm mb-3">Oct 2022 – Present</p>
                <div className="flex items-center gap-2">
                  <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg">
                    <span className="text-gray-400 text-sm">CGPA: </span>
                    <span className="text-[#8a946f] font-semibold">7.9</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-6 hover:border-[#768064]/40 transition-all duration-300 group">
                <h3 className="text-xl font-bold text-[#8a946f] group-hover:text-[#768064] mb-2">Intermediate (MPC)</h3>
                <p className="text-white mb-1 font-medium">Sri Chaitanya Junior College</p>
                <p className="text-gray-400 text-sm mb-3">2022</p>
                <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg inline-flex items-center gap-2">
                  <span className="text-gray-400 text-sm">Score: </span>
                  <span className="text-[#8a946f] font-semibold">92.4%</span>
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-6 hover:border-[#768064]/40 transition-all duration-300 group">
                <h3 className="text-xl font-bold text-[#8a946f] group-hover:text-[#768064] mb-2">SSC</h3>
                <p className="text-white mb-1 font-medium">Bhashyam High School</p>
                <p className="text-gray-400 text-sm mb-3">2020</p>
                <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg inline-flex items-center gap-2">
                  <span className="text-gray-400 text-sm">Score: </span>
                  <span className="text-[#8a946f] font-semibold">94.5%</span>
                </div>
              </div>
            </div>
          </section>

          {/* Experience section */}
          <section>
            <div className="flex items-center gap-4 mb-10">
              <Briefcase className="text-[#8a946f]" size={40} />
              <h2 className="text-4xl font-bold text-white">Experience</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-6 hover:border-[#768064]/40 transition-all duration-300 group">
                <h3 className="text-xl font-bold text-[#8a946f] group-hover:text-[#768064] mb-2">Front-end Development Intern (Training)</h3>
                <p className="text-white font-medium mb-1">InLighnX Global Pvt. Ltd.</p>
                <p className="text-gray-400 text-sm mb-4">Jul 2025 – Aug 2025</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Completed one-month front-end development training</li>
                  <li>Built a Responsive Portfolio Website using HTML5, CSS3, and JavaScript</li>
                  <li>Developed a Movie Search App with real-time results using OMDb API</li>
                  <li>Created a Digital Clock Application with live updates</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-6 hover:border-[#768064]/40 transition-all duration-300 group">
                <h3 className="text-xl font-bold text-[#8a946f] group-hover:text-[#768064] mb-2">Web Development Intern (Training)</h3>
                <p className="text-white font-medium mb-1">Elewayte (Wipro Credential Partner)</p>
                <p className="text-gray-400 text-sm mb-4">Jul 2024 – Aug 2024</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Assisted in developing front-end features for web applications</li>
                  <li>Improved responsiveness and usability of client applications</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-6 hover:border-[#768064]/40 transition-all duration-300 group">
                <h3 className="text-xl font-bold text-[#8a946f] group-hover:text-[#768064] mb-2">Intern (Training)</h3>
                <p className="text-white font-medium mb-1">OctaNet Services Pvt. Ltd.</p>
                <p className="text-gray-400 text-sm mb-4">Apr 2024</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Practiced front-end development tasks using HTML, CSS, and JavaScript</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Skills section with improved grid */}
          <section>
            <div className="flex items-center gap-4 mb-10">
              <Code className="text-[#8a946f]" size={40} />
              <h2 className="text-4xl font-bold text-white">Technical Skills</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-xl p-6 hover:border-[#768064]/40 transition-all duration-300 group">
                <h3 className="text-lg font-bold text-[#8a946f] mb-3 group-hover:text-[#768064]">Front-End</h3>
                <div className="flex flex-wrap gap-2">
                  {['React.js', 'Angular', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'].map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-[#768064]/5 border border-[#768064]/20 text-gray-300 text-xs rounded-full">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-xl p-6 hover:border-[#768064]/40 transition-all duration-300 group">
                <h3 className="text-lg font-bold text-[#8a946f] mb-3 group-hover:text-[#768064]">Back-End</h3>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'Express.js'].map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-[#768064]/5 border border-[#768064]/20 text-gray-300 text-xs rounded-full">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-xl p-6 hover:border-[#768064]/40 transition-all duration-300 group">
                <h3 className="text-lg font-bold text-[#8a946f] mb-3 group-hover:text-[#768064]">Databases</h3>
                <div className="flex flex-wrap gap-2">
                  {['MySQL'].map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-[#768064]/5 border border-[#768064]/20 text-gray-300 text-xs rounded-full">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-xl p-6 hover:border-[#768064]/40 transition-all duration-300 group">
                <h3 className="text-lg font-bold text-[#8a946f] mb-3 group-hover:text-[#768064]">Programming</h3>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'JavaScript'].map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-[#768064]/5 border border-[#768064]/20 text-gray-300 text-xs rounded-full">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-xl p-6 hover:border-[#768064]/40 transition-all duration-300 group">
                <h3 className="text-lg font-bold text-[#8a946f] mb-3 group-hover:text-[#768064]">Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {['Git', 'GitHub'].map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-[#768064]/5 border border-[#768064]/20 text-gray-300 text-xs rounded-full">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Achievements section */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-[#8a946f]" size={32} />
              <h2 className="text-3xl font-bold text-white">Achievements</h2>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-6 hover:border-[#768064]/40 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#8a946f] to-[#768064] rounded-xl flex items-center justify-center flex-shrink-0 text-black font-bold text-2xl group-hover:scale-110 transition-transform duration-300">
                  3rd
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">Static Website Designing Hackathon</h3>
                  <p className="text-gray-400 text-sm">JNTU Narasaraopet, 2023</p>
                </div>
              </div>
            </div>
          </section>

          {/* Certifications section */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <FileText className="text-[#8a946f]" size={32} />
              <h2 className="text-3xl font-bold text-white">Certifications</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Infosys Springboard: Express.js, ML with Python',
                'NextWave CCBP 4.0: Web Development, Python, MySQL',
                'SkillDzire: Python Programming',
                'Cognitive Class: Deep Learning Fundamentals',
                'LinkedIn Learning: Introduction to Generative AI'
              ].map((cert, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-xl p-5 hover:border-[#768064]/40 transition-all duration-300 group">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#8a946f] rounded-full mt-2 group-hover:scale-150 transition-transform"></div>
                    <p className="text-gray-300 group-hover:text-white transition-colors">{cert}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Languages section */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Languages className="text-[#8a946f]" size={32} />
              <h2 className="text-3xl font-bold text-white">Languages</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {['English', 'Hindi', 'Telugu'].map((lang, i) => (
                <div key={i} className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-xl p-5 text-center hover:border-[#768064]/40 transition-all duration-300 group">
                  <p className="text-white font-bold text-lg group-hover:text-[#768064] transition-colors">{lang}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Information section */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Mail className="text-[#8a946f]" size={32} />
              <h2 className="text-3xl font-bold text-white">Contact Information</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-xl p-5 hover:border-[#768064]/40 transition-all duration-300 group">
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-12 h-12 bg-[#768064]/10 rounded-xl flex items-center justify-center group-hover:bg-[#768064]/20 transition-all">
                    <MapPin className="text-[#8a946f]" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs mb-1">Location</p>
                    <p className="text-white font-medium text-sm">Narasaraopet, AP, India</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-xl p-5 hover:border-[#768064]/40 transition-all duration-300 group">
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-12 h-12 bg-[#768064]/10 rounded-xl flex items-center justify-center group-hover:bg-[#768064]/20 transition-all">
                    <Phone className="text-[#8a946f]" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs mb-1">Phone</p>
                    <p className="text-white font-medium text-sm">+91-8522848042</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-xl p-5 hover:border-[#768064]/40 transition-all duration-300 group">
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-12 h-12 bg-[#768064]/10 rounded-xl flex items-center justify-center group-hover:bg-[#768064]/20 transition-all">
                    <Mail className="text-[#8a946f]" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs mb-1">Email</p>
                    <p className="text-white font-medium text-sm break-all">faheemshaik533@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Resume;
