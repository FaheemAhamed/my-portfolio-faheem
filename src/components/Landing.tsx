import Silk from './Silk';

interface LandingProps {
  onEnter: () => void;
}

function Landing({ onEnter }: LandingProps) {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Add Silk component as background */}
      <div className="absolute inset-0 opacity-50">
        <Silk
          speed={5}
          scale={1}
          color="#768064"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>
      
      {/* Keep existing glow effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#768064]/20 rounded-full filter blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#768064]/20 rounded-full filter blur-[120px] animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#768064]/50 to-transparent animate-shimmer"></div>
      </div>

      <div className="relative z-10 text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-tight">
          <span className="bg-gradient-to-r from-[#8a946f] via-[#768064] to-[#8a946f] bg-clip-text text-transparent bg-300% animate-shine-background">
            SHAIK FAHEEM AHMED
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-[#8a946f] mb-12 tracking-wide hover:animate-shine filter drop-shadow-[0_0_8px_rgba(138,148,111,0.3)]">
          Full Stack Developer
        </p>
        <button
          onClick={onEnter}
          className="px-12 py-4 bg-transparent border-2 border-[#8a946f] text-[#8a946f] text-lg font-semibold rounded-lg
          hover:bg-gradient-to-r hover:from-[#8a946f] hover:to-[#768064] hover:text-black 
          transition-all duration-300 hover:shadow-[0_0_30px_rgba(138,148,111,0.6)]
          hover:scale-105 relative overflow-hidden group"
        >
          <span className="relative z-10">ENTER PORTFOLIO</span>
          <div className="absolute inset-0 bg-gradient-to-r from-[#8a946f]/20 to-[#768064]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </div>
    </div>
  );
}

export default Landing;
