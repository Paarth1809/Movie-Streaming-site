import React from 'react';
import { Play, Info } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-[85vh] bg-cover bg-center" style={{
      backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.8)), 
      url('https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=2000')`
    }}>
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl pt-20">
            <span className="inline-block px-4 py-1.5 bg-purple-500/20 text-purple-400 
              rounded-full text-sm font-medium mb-4">Featured Premiere</span>
            <h1 className="text-6xl font-bold mb-4 leading-tight">Dune: Part Two</h1>
            <div className="flex items-center gap-4 text-sm text-gray-300 mb-6">
              <span className="px-2 py-1 bg-gray-800 rounded">2024</span>
              <span>2h 46m</span>
              <span className="flex items-center">
                <span className="text-purple-400">★</span> 8.9
              </span>
              <span className="px-2 py-1 bg-gray-800 rounded">4K HDR</span>
            </div>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Follow the mythic journey of Paul Atreides as he unites with Chani and 
              the Fremen while on a path of revenge against the conspirators who 
              destroyed his family. Facing a choice between the love of his life and 
              the fate of the universe.
            </p>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 
                px-8 py-4 rounded-lg font-semibold transition-colors">
                <Play className="w-5 h-5" fill="currentColor" />
                Play Now
              </button>
              <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 
                px-8 py-4 rounded-lg font-semibold transition-colors backdrop-blur-sm">
                <Info className="w-5 h-5" />
                More Info
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;