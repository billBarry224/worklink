import React from 'react';
import { Star } from 'lucide-react';
import { PopularTask } from '../types';

interface PopularTaskCardProps {
  task: PopularTask;
}

export function PopularTaskCard({ task }: PopularTaskCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200">
      <div 
        className="h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${task.image})` }}
      />
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">{task.title}</h3>
        <p className="text-gray-600 mb-4">{task.description}</p>
        <div className="flex items-center mb-4">
          <div className="flex items-center text-yellow-400">
            <Star className="w-5 h-5 fill-current" />
            <span className="ml-1 text-gray-900">{task.rating}</span>
          </div>
          <span className="mx-2 text-gray-400">•</span>
          <span className="text-gray-600">{task.reviews} avis</span>
        </div>
        <button className="w-full px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
          Réserver
        </button>
      </div>
    </div>
  );
}