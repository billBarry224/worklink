import React, { useState, useEffect } from 'react';
import { X, Star, Briefcase, User } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode: {
    isLogin: boolean;
    userType: 'client' | 'professional';
  };
}

export function AuthModal({ isOpen, onClose, initialMode }: AuthModalProps) {
  const [isLogin, setIsLogin] = useState(initialMode.isLogin);
  const [userType, setUserType] = useState<'client' | 'professional'>(initialMode.userType);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    city: '',
    cin: '',
    email: '',
    password: '',
    services: [] as string[],
    experience: '',
    certifications: '',
    description: '',
    availability: '',
    registrationNumber: '',
    insurance: '',
  });

  useEffect(() => {
    setIsLogin(initialMode.isLogin);
    setUserType(initialMode.userType);
  }, [initialMode]);

  if (!isOpen) return null;

  const availableServices = [
    'Plomberie',
    'Électricité',
    'Mécanique',
    'Menuiserie',
    'Peinture',
    'Jardinage',
    'Nettoyage',
    'Déménagement',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const service = e.target.value;
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-lg w-full max-w-2xl my-8 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="sticky top-0 bg-white z-10 pt-6 px-6 pb-4 border-b">
          <div className="flex border-b">
            <button
              className={`flex-1 py-2 text-center ${
                isLogin
                  ? 'border-b-2 border-emerald-600 text-emerald-600'
                  : 'text-gray-500'
              }`}
              onClick={() => setIsLogin(true)}
            >
              Se connecter
            </button>
            <button
              className={`flex-1 py-2 text-center ${
                !isLogin
                  ? 'border-b-2 border-emerald-600 text-emerald-600'
                  : 'text-gray-500'
              }`}
              onClick={() => setIsLogin(false)}
            >
              S'inscrire
            </button>
          </div>

          {!isLogin && (
            <div className="mt-4">
              <div className="flex gap-4 justify-center">
                <button
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                    userType === 'client'
                      ? 'bg-emerald-600 text-white'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                  onClick={() => setUserType('client')}
                >
                  <User className="w-5 h-5" />
                  Client
                </button>
                <button
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                    userType === 'professional'
                      ? 'bg-emerald-600 text-white'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                  onClick={() => setUserType('professional')}
                >
                  <Briefcase className="w-5 h-5" />
                  Professionnel
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="p-6 max-h-[calc(100vh-16rem)] overflow-y-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Prénom
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nom
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Numéro de téléphone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Ville
                  </label>
                  <input
                    type="text"
                    name="city"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Numéro CIN
                  </label>
                  <input
                    type="text"
                    name="cin"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                    value={formData.cin}
                    onChange={handleChange}
                  />
                </div>

                {userType === 'professional' && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Services proposés
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {availableServices.map((service) => (
                          <label key={service} className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              value={service}
                              checked={formData.services.includes(service)}
                              onChange={handleServiceChange}
                              className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                            />
                            <span className="text-sm text-gray-700">{service}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Années d'expérience
                      </label>
                      <input
                        type="number"
                        name="experience"
                        required
                        min="0"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                        value={formData.experience}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Certifications
                      </label>
                      <input
                        type="text"
                        name="certifications"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                        value={formData.certifications}
                        onChange={handleChange}
                        placeholder="Ex: CAP Plomberie, Certification électricité..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Description de vos services
                      </label>
                      <textarea
                        name="description"
                        required
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Décrivez votre expertise et vos services..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Disponibilité
                      </label>
                      <select
                        name="availability"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                        value={formData.availability}
                        onChange={handleChange}
                      >
                        <option value="">Sélectionnez votre disponibilité</option>
                        <option value="full-time">Temps plein</option>
                        <option value="part-time">Temps partiel</option>
                        <option value="weekends">Weekends uniquement</option>
                        <option value="flexible">Horaires flexibles</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Numéro d'immatriculation professionnelle
                      </label>
                      <input
                        type="text"
                        name="registrationNumber"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                        value={formData.registrationNumber}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Numéro d'assurance professionnelle
                      </label>
                      <input
                        type="text"
                        name="insurance"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                        value={formData.insurance}
                        onChange={handleChange}
                      />
                    </div>
                  </>
                )}
              </>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mot de passe
              </label>
              <input
                type="password"
                name="password"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </form>
        </div>

        <div className="sticky bottom-0 bg-white px-6 py-4 border-t">
          <button
            type="submit"
            className="w-full bg-emerald-600 text-white py-2 px-4 rounded-lg hover:bg-emerald-700 transition-colors"
          >
            {isLogin ? 'Se connecter' : 'S\'inscrire'}
          </button>

          {isLogin && (
            <p className="mt-4 text-center text-sm text-gray-600">
              Mot de passe oublié ?{' '}
              <button className="text-emerald-600 hover:text-emerald-700">
                Cliquez ici
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}