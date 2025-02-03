export type UserType = 'worker' | 'client' | 'business';

export interface User {
  id: string;
  email: string;
  userType: UserType;
  profile: WorkerProfile | ClientProfile | BusinessProfile;
}

export interface WorkerProfile {
  fullName: string;
  phone: string;
  services: string[];
  experience: string;
  certifications: string[];
  availability: string;
  location: string;
}

export interface ClientProfile {
  fullName: string;
  phone: string;
  location: string;
}

export interface BusinessProfile {
  companyName: string;
  businessType: string;
  registrationNumber: string;
  contactPerson: string;
  phone: string;
  location: string;
}

export interface Professional {
  id: string;
  name: string;
  photo: string;
  services: string[];
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  rating: number;
  reviews: number;
  specialties: string[];
  certifications: string[];
  available: boolean;
}

export interface Service {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface PopularTask {
  id: string;
  title: string;
  price: string;
  image: string;
  rating: number;
  reviews: number;
  description: string;
}

export interface Review {
  id: string;
  clientName: string;
  rating: number;
  comment: string;
  date: string;
  serviceType: string;
  professionalName: string;
}