import React from 'react';
import { Clapperboard, Search, Bell, User, Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-gradient-to-b from-black/90 to-black/60 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <Clapperboard className="w-8 h-8 text-purple-500" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-tight">Cinematic</span>
              <span className="text-xs text-purple-400 -mt-1">Premium Streaming</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-12">
            <a href="#" className="text-white hover:text-purple-400 transition-colors font-medium">Home</a>
            <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">Movies</a>
            <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">TV Shows</a>
            <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">My List</a>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-6">
              <button className="hover:text-purple-400 transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <button className="hover:text-purple-400 transition-colors relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-purple-500 rounded-full"></span>
              </button>
              <button className="flex items-center gap-2 hover:text-purple-400 transition-colors">
                <User className="w-5 h-5" />
                <span className="text-sm font-medium">Account</span>
              </button>
            </div>
            <button className="md:hidden hover:text-purple-400 transition-colors">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;