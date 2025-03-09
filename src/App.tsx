import React from 'react';
import { TrendingUp, Clock, Siren as Fire, Star } from 'lucide-react';
import Navbar from './components/Navbar';
import MovieCard from './components/MovieCard';
import Hero from './components/Hero';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar />
      <Hero />
      
      <main className="container mx-auto px-4 py-12">
        {/* Trending Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="w-6 h-6 text-purple-500" />
            <h2 className="text-2xl font-bold">Trending Now</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <MovieCard 
              title="Inception"
              image="https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=800"
              rating={4.8}
              year={2010}
            />
            <MovieCard 
              title="The Dark Knight"
              image="https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=800"
              rating={4.9}
              year={2008}
            />
            <MovieCard 
              title="Interstellar"
              image="https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800"
              rating={4.7}
              year={2014}
            />
            <MovieCard 
              title="Dune"
              image="https://images.unsplash.com/photo-1547700055-b61cacebece9?auto=format&fit=crop&w=800"
              rating={4.5}
              year={2021}
            />
          </div>
        </section>

        {/* Latest Releases */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Clock className="w-6 h-6 text-purple-500" />
            <h2 className="text-2xl font-bold">Latest Releases</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <MovieCard 
              title="The Matrix"
              image="https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800"
              rating={4.6}
              year={2023}
            />
            <MovieCard 
              title="Avatar"
              image="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800"
              rating={4.4}
              year={2023}
            />
            <MovieCard 
              title="Blade Runner"
              image="https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&w=800"
              rating={4.3}
              year={2023}
            />
            <MovieCard 
              title="The Godfather"
              image="https://images.unsplash.com/photo-1559108217-640147175310?auto=format&fit=crop&w=800"
              rating={4.7}
              year={2023}
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;