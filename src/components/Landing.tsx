interface LandingProps {
  onEnter: () => void;
}

function Landing({ onEnter }: LandingProps) {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full filter blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-[120px]"></div>
      </div>

      <div className="relative z-10 text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight">
          SHAIK FAHEEM AHMED
        </h1>
        <p className="text-xl md:text-2xl text-cyan-400 mb-12 tracking-wide">
          Full Stack Developer
        </p>
        <button
          onClick={onEnter}
          className="px-12 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 text-lg font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]"
        >
          ENTER PORTFOLIO
        </button>
      </div>
    </div>
  );
}

export default Landing;
