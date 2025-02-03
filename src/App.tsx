import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SearchBar } from './components/SearchBar';
import { ServiceCard } from './components/ServiceCard';
import { PopularTaskCard } from './components/PopularTaskCard';
import { Service, PopularTask, Professional, Review } from './types';
import { Wrench, Car, Droplet, Home, Briefcase, Shield, Star, Clock, PenTool, Zap, Quote } from 'lucide-react';

function App() {
  const services: Service[] = [
    {
      id: '1',
      name: 'Plomberie',
      icon: 'Droplet',
      description: 'Réparation et installation de plomberie'
    },
    {
      id: '2',
      name: 'Mécanique Auto',
      icon: 'Car',
      description: 'Réparation et entretien automobile'
    },
    {
      id: '3',
      name: 'Travaux',
      icon: 'Home',
      description: 'Construction et rénovation'
    },
    {
      id: '4',
      name: 'Maintenance',
      icon: 'Wrench',
      description: 'Entretien et réparations générales'
    },
    {
      id: '5',
      name: 'Services Pro',
      icon: 'Briefcase',
      description: 'Services aux entreprises'
    },
    {
      id: '6',
      name: 'Sécurité',
      icon: 'Shield',
      description: 'Installation et maintenance'
    }
  ];

  const popularTasks: PopularTask[] = [
    {
      id: '1',
      title: 'Plomberie',
      price: '150000',
      image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?ixlib=rb-4.0.3',
      rating: 4.8,
      reviews: 127,
      description: 'Réparez vos fuites et installations.'
    },
    {
      id: '2',
      title: 'Électricité',
      price: '100000',
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3',
      rating: 4.9,
      reviews: 89,
      description: 'Installation et réparation électriques.'
    },
    {
      id: '3',
      title: 'Mécanique',
      price: '75000',
      image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3',
      rating: 4.7,
      reviews: 156,
      description: 'Dépannage et entretien automobile.'
    }
  ];

  const topProfessionals: Professional[] = [
    {
      id: '1',
      name: 'Jean Dupont',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3',
      services: ['Plomberie', 'Installation sanitaire'],
      location: {
        lat: 0,
        lng: 0,
        address: 'Conakry, Guinée'
      },
      rating: 4.9,
      reviews: 234,
      specialties: ['Dépannage urgent', 'Installation sanitaire'],
      certifications: ['Plomberie professionnelle'],
      available: true
    },
    {
      id: '2',
      name: 'Marie Koné',
      photo: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3',
      services: ['Électricité', 'Domotique'],
      location: {
        lat: 0,
        lng: 0,
        address: 'Conakry, Guinée'
      },
      rating: 4.8,
      reviews: 189,
      specialties: ['Installation électrique', 'Domotique'],
      certifications: ['Électricien certifié'],
      available: true
    },
    {
      id: '3',
      name: 'Ahmed Sylla',
      photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3',
      services: ['Mécanique automobile'],
      location: {
        lat: 0,
        lng: 0,
        address: 'Conakry, Guinée'
      },
      rating: 4.9,
      reviews: 156,
      specialties: ['Diagnostic', 'Réparation moteur'],
      certifications: ['Mécanicien automobile certifié'],
      available: true
    }
  ];

  const clientReviews: Review[] = [
    {
      id: '1',
      clientName: 'Sophie Camara',
      rating: 5,
      comment: "Service exceptionnel ! Le plombier est arrivé rapidement et a résolu mon problème en moins d'une heure.",
      date: '2024-01-15',
      serviceType: 'Plomberie',
      professionalName: 'Jean Dupont'
    },
    {
      id: '2',
      clientName: 'Ibrahim Bah',
      rating: 5,
      comment: "Très satisfait du service d'électricité. Travail propre et professionnel.",
      date: '2024-01-20',
      serviceType: 'Électricité',
      professionalName: 'Marie Koné'
    },
    {
      id: '3',
      clientName: 'Mamadou Diallo',
      rating: 5,
      comment: "Excellent mécanicien, très compétent et honnête. Je recommande vivement !",
      date: '2024-01-25',
      serviceType: 'Mécanique',
      professionalName: 'Ahmed Sylla'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <div 
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Trouvez un professionnel qualifié près de chez vous
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl">
            Plombiers, électriciens, mécaniciens et bien plus encore !
          </p>
          <SearchBar />
        </div>
      </div>

      {/* Popular Tasks Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Services Populaires
          </h2>
          <button className="text-emerald-600 hover:text-emerald-700 font-semibold">
            Voir tout
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularTasks.map((task) => (
            <PopularTaskCard key={task.id} task={task} />
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Tous nos services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onClick={() => console.log('Service clicked:', service.name)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pourquoi choisir Worklink ?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Une expérience simple, rapide et sécurisée pour tous vos besoins
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Star className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Professionnels Vérifiés</h3>
              <p className="text-gray-600">Tous nos professionnels sont soigneusement sélectionnés, vérifiés et notés par la communauté</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Service Rapide</h3>
              <p className="text-gray-600">Trouvez un professionnel disponible en quelques minutes, même pour les urgences</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <PenTool className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Garantie Satisfaction</h3>
              <p className="text-gray-600">Satisfaction garantie ou remboursé. Notre support client est disponible 7j/7</p>
            </div>
          </div>
        </div>
      </div>

      {/* Top Professionals Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Nos Meilleurs Professionnels
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topProfessionals.map((pro) => (
              <div key={pro.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <img
                    src={pro.photo}
                    alt={pro.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{pro.name}</h3>
                    <p className="text-gray-600">{pro.services.join(', ')}</p>
                  </div>
                </div>
                <div className="flex items-center mb-3">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="ml-1 font-semibold">{pro.rating}</span>
                  <span className="mx-1 text-gray-400">•</span>
                  <span className="text-gray-600">{pro.reviews} avis</span>
                </div>
                <div className="text-sm text-gray-600 mb-4">
                  <p>Spécialités : {pro.specialties.join(', ')}</p>
                  <p className="mt-1">{pro.location.address}</p>
                </div>
                <button className="w-full px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
                  Contacter
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Client Reviews Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Ce que disent nos clients
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clientReviews.map((review) => (
              <div key={review.id} className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-emerald-600" />
                </div>
                <p className="text-gray-600 mb-4">{review.comment}</p>
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
                <div className="border-t pt-4 mt-4">
                  <p className="font-semibold text-gray-900">{review.clientName}</p>
                  <p className="text-sm text-gray-600">Service : {review.serviceType}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Download App Section */}
      <div className="bg-emerald-600 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Téléchargez notre application
              </h2>
              <p className="text-emerald-100 mb-8">
                Gérez votre liste de tâches où que vous soyez avec notre application mobile.
                Trouvez des professionnels, réservez des services et suivez vos rendez-vous en temps réel.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors flex items-center justify-center">
                  <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.08-.46-2.07-.48-3.2 0-1.42.61-2.16.44-3.04-.35C4.43 17.01 3.47 12.11 4.85 9.55c1-1.85 2.56-2.87 4.31-2.87 1.34 0 2.19.47 3.12.47.91 0 1.67-.47 3.23-.47 1.53.01 2.8.79 3.68 2.01-3.27 1.88-2.75 6.78.82 8.64-.82 1.96-1.87 2.86-2.96 2.95zM12.77 4.36c-.84-1.04-1.98-1.64-3.1-1.64-.13 1.77.9 3.52 2.01 4.51 1.01.91 2.24 1.61 3.61 1.61.1-1.79-.89-3.56-2.52-4.48z"/>
                  </svg>
                  App Store
                </button>
                <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors flex items-center justify-center">
                  <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.523 15.334l2.038-1.177-2.038-1.177v2.354zm-3.121-8.85l-9.754 5.631v1.177l9.754 5.631v-2.354l-6.633-3.277 6.633-3.277v-2.354zm-9.754 5.631l9.754-5.631v-2.354l-9.754 5.631v2.354zm9.754 4.454v2.354l9.754-5.631v-1.177l-9.754-5.631v2.354l6.633 3.277-6.633 3.277z"/>
                  </svg>
                  Google Play
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3"
                alt="Application mobile"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;