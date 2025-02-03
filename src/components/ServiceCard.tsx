import React from 'react';
import { Service } from '../types';
import * as Icons from 'lucide-react';

interface ServiceCardProps {
  service: Service;
  onClick: () => void;
}

export function ServiceCard({ service, onClick }: ServiceCardProps) {
  const IconComponent = (Icons as any)[service.icon];

  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
    >
      {IconComponent && <IconComponent className="w-12 h-12 text-blue-600 mb-3" />}
      <h3 className="text-lg font-semibold text-gray-800">{service.name}</h3>
      <p className="text-sm text-gray-600 text-center mt-2">{service.description}</p>
    </button>
  );
}