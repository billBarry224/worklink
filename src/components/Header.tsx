import React, { useState } from 'react';
import { PenTool as Tool } from 'lucide-react';
import { AuthModal } from './AuthModal';

export function Header() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [initialAuthMode, setInitialAuthMode] = useState<{
    isLogin: boolean;
    userType: 'client' | 'professional';
  }>({ isLogin: true, userType: 'client' });

  const openAuthModal = (isLogin: boolean, userType: 'client' | 'professional') => {
    setInitialAuthMode({ isLogin, userType });
    setIsAuthModalOpen(true);
  };

  return (
    <>
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Tool className="h-8 w-8 text-emerald-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Worklink</span>
            </div>

            {/* Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <button
                onClick={() => openAuthModal(false, 'client')}
                className="text-gray-600 hover:text-gray-900"
              >
                S'inscrire / Se connecter
              </button>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Services
              </a>
              <button 
                onClick={() => openAuthModal(false, 'professional')}
                className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
              >
                Devenir un Pro
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-gray-600 hover:text-gray-900">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)}
        initialMode={initialAuthMode}
      />
    </>
  );
}