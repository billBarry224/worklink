// Afficher/masquer les champs professionnels
function toggleProfessionalFields() {
    const userType = document.getElementById('userType').value;
    const professionalFields = document.getElementById('professionalFields');
    professionalFields.style.display = (userType === 'professional') ? 'block' : 'none';
}

// Initialiser les événements
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('userType').addEventListener('change', toggleProfessionalFields);
});