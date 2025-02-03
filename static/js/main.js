// Variables globales
let currentUserType = 'client';
let currentTab = 'login'; // Pour suivre l'onglet actif

// Fonction pour ouvrir le modal d'authentification
function openAuthModal(userType) {
    currentUserType = userType;
    const professionalFields = document.getElementById('professionalFields');
    if (professionalFields) {
        professionalFields.style.display = userType === 'professional' ? 'block' : 'none';
    }
    
    // Si c'est un professionnel, basculer automatiquement vers l'onglet inscription
    if (userType === 'professional') {
        const registerTab = document.querySelector('[data-bs-target="#register-tab"]');
        if (registerTab) {
            const tab = new bootstrap.Tab(registerTab);
            tab.show();
            currentTab = 'register';
        }
    }
    
    const modal = new bootstrap.Modal(document.getElementById('authModal'));
    modal.show();
}

// Gestionnaire pour les changements d'onglets
document.querySelectorAll('[data-bs-toggle="tab"]').forEach(tab => {
    tab.addEventListener('shown.bs.tab', (e) => {
        currentTab = e.target.getAttribute('data-bs-target').includes('login') ? 'login' : 'register';
    });
});

// Fonction pour afficher les erreurs
function showError(message) {
    alert(message);
}

// Gestionnaire de soumission du formulaire de connexion
document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    try {
        const formData = {
            email: e.target.querySelector('[name="email"]').value,
            password: e.target.querySelector('[name="password"]').value
        };

        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const data = await response.json();
        
        if (response.ok) {
            window.location.href = '/profile';
        } else {
            showError(data.error || 'Erreur de connexion');
        }
    } catch (error) {
        console.error('Erreur:', error);
        showError('Erreur de connexion au serveur');
    }
});

// Gestionnaire de soumission du formulaire d'inscription
document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    try {
        const form = e.target;
        const formData = {
            firstName: form.querySelector('[name="firstName"]').value,
            lastName: form.querySelector('[name="lastName"]').value,
            phone: form.querySelector('[name="phone"]').value,
            city: form.querySelector('[name="city"]').value,
            cin: form.querySelector('[name="cin"]').value,
            email: form.querySelector('[name="email"]').value,
            password: form.querySelector('[name="password"]').value,
            userType: currentUserType
        };

        if (currentUserType === 'professional') {
            const services = Array.from(form.querySelectorAll('[name="services"]:checked'))
                .map(checkbox => checkbox.value);
                
            if (services.length === 0) {
                showError('Veuillez sélectionner au moins un service');
                return;
            }
            
            Object.assign(formData, {
                services: services,
                experience: form.querySelector('[name="experience"]').value,
                certifications: form.querySelector('[name="certifications"]').value,
                description: form.querySelector('[name="description"]').value,
                availability: form.querySelector('[name="availability"]').value,
                registrationNumber: form.querySelector('[name="registrationNumber"]').value,
                insurance: form.querySelector('[name="insurance"]').value
            });
        }

        const response = await fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const data = await response.json();
        
        if (response.ok) {
            window.location.href = '/profile';
        } else {
            showError(data.error || 'Erreur lors de l\'inscription');
        }
    } catch (error) {
        console.error('Erreur:', error);
        showError('Erreur de connexion au serveur');
    }
});