import React from 'react';
import { Play, Star, Clock } from 'lucide-react';

interface MovieCardProps {
  title: string;
  image: string;
  rating: number;
  year: number;
}

const MovieCard = ({ title, image, rating, year }: MovieCardProps) => {
  return (
    <div className="group relative rounded-xl overflow-hidden shadow-lg shadow-black/20">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-[400px] object-cover transition-transform duration-500 
        group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent 
        opacity-0 group-hover:opacity-100 transition-all duration-300">
        <div className="absolute bottom-0 p-6 w-full">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <div className="flex items-center gap-4 text-sm mb-4">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-purple-400" fill="currentColor" />
              <span>{rating}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-gray-400" />
              <span>{year}</span>
            </div>
          </div>
          <button className="w-full flex items-center justify-center gap-2 
            bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold 
            transition-colors">
            <Play className="w-4 h-4" fill="currentColor" />
            Watch Now
          </button>
        </div>
      </div>
      <div className="absolute top-4 right-4">
        <span className="px-2 py-1 bg-black/60 backdrop-blur-sm rounded-md text-sm">
          HD
        </span>
      </div>
    </div>
  );
};

export default MovieCard;