import React from 'react';
import { Search, MapPin } from 'lucide-react';

export function SearchBar() {
  return (
    <div className="relative max-w-2xl w-full">
      <div className="flex items-center bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="flex-1 flex items-center border-r border-gray-200">
          <Search className="w-5 h-5 text-gray-400 ml-4" />
          <input
            type="text"
            placeholder="Quel service recherchez-vous ?"
            className="w-full p-4 outline-none text-gray-700 placeholder-gray-400"
          />
        </div>
        <div className="flex items-center px-4">
          <MapPin className="w-5 h-5 text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Localisation"
            className="p-4 outline-none text-gray-700 placeholder-gray-400"
          />
        </div>
      </div>
    </div>
  );
}