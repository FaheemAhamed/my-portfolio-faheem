import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
  const [state, handleSubmit] = useForm("xdkpvpdl");

  if (state.succeeded) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-4">
        <div className="bg-gradient-to-br from-cyan-400/5 to-blue-500/5 border-2 border-cyan-400/30 rounded-2xl p-8 text-center max-w-md w-full">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Thank you for your message!</h2>
          <p className="text-gray-300">I'll get back to you as soon as possible.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black py-12 lg:py-16 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full filter blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-400/10 border border-cyan-400/30 rounded-full mb-4">
            <MessageSquare className="text-cyan-400" size={18} />
            <span className="text-cyan-400 font-semibold text-sm">CONTACT</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Contact Info - Takes 2 columns */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              {/* Contact Cards */}
              {[
                { icon: Mail, title: 'Email', content: 'faheemshaik533@gmail.com' },
                { icon: Phone, title: 'Phone', content: '+91-8522848042' },
                { icon: MapPin, title: 'Location', content: 'Narasaraopet, Andhra Pradesh, India' }
              ].map(({ icon: Icon, title, content }) => (
                <div key={title} className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-xl p-5 hover:border-cyan-400/40 transition-all duration-300 group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-cyan-400/10 border border-cyan-400/30 rounded-lg flex items-center justify-center group-hover:bg-cyan-400/20 group-hover:scale-110 transition-all">
                      <Icon className="text-cyan-400" size={22} />
                    </div>
                    <div>
                      <h3 className="text-white font-bold group-hover:text-cyan-400 transition-colors">{title}</h3>
                      <p className="text-gray-400 text-sm mt-1">{content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Info Box */}
            <div className="bg-gradient-to-br from-cyan-400/5 to-blue-500/5 border-2 border-cyan-400/30 rounded-xl p-6">
              <h3 className="text-cyan-400 font-bold mb-3">Let's Work Together</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>
          </div>

          {/* Contact Form - Takes 3 columns */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6 bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-xl p-6 lg:p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-gray-300 mb-2 font-medium">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-300"
                    placeholder="Your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-300 resize-none"
                  placeholder="Your message"
                />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full px-6 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold rounded-xl hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={20} />
                {state.submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
