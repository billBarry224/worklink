import React from 'react';
import { PenTool as Tool } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-700 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et réseaux sociaux */}
          <div>
            <div className="flex items-center mb-4">
              <Tool className="h-8 w-8 text-emerald-500" />
              <span className="ml-2 text-xl font-bold text-white">Worklink</span>
            </div>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="hover:text-white">Facebook</a>
              <a href="#" className="hover:text-white">Twitter</a>
              <a href="#" className="hover:text-white">Instagram</a>
              <a href="#" className="hover:text-white">LinkedIn</a>
            </div>
          </div>

          {/* Découvrir */}
          <div>
            <h3 className="text-white font-semibold mb-4">Découvrir</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white">Devenir un Pro</a></li>
              <li><a href="#" className="hover:text-white">Services par ville</a></li>
              <li><a href="#" className="hover:text-white">Services à proximité</a></li>
              <li><a href="#" className="hover:text-white">Tous les services</a></li>
              <li><a href="#" className="hover:text-white">Professionnels d'élite</a></li>
              <li><a href="#" className="hover:text-white">Aide</a></li>
            </ul>
          </div>

          {/* Entreprise */}
          <div>
            <h3 className="text-white font-semibold mb-4">Entreprise</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white">À propos de nous</a></li>
              <li><a href="#" className="hover:text-white">Carrières</a></li>
              <li><a href="#" className="hover:text-white">Devenez partenaire</a></li>
              <li><a href="#" className="hover:text-white">Presse</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
            </ul>
          </div>

          {/* Application mobile */}
          <div>
            <h3 className="text-white font-semibold mb-4">Téléchargez notre application</h3>
            <p className="mb-4">Gérez votre liste de tâches où que vous soyez avec notre application mobile.</p>
            <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-900 transition-colors flex items-center">
              <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.08-.46-2.07-.48-3.2 0-1.42.61-2.16.44-3.04-.35C4.43 17.01 3.47 12.11 4.85 9.55c1-1.85 2.56-2.87 4.31-2.87 1.34 0 2.19.47 3.12.47.91 0 1.67-.47 3.23-.47 1.53.01 2.8.79 3.68 2.01-3.27 1.88-2.75 6.78.82 8.64-.82 1.96-1.87 2.86-2.96 2.95zM12.77 4.36c-.84-1.04-1.98-1.64-3.1-1.64-.13 1.77.9 3.52 2.01 4.51 1.01.91 2.24 1.61 3.61 1.61.1-1.79-.89-3.56-2.52-4.48z"/>
              </svg>
              Télécharger sur l'App Store
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}