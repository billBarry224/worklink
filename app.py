from flask import Flask, render_template, request, jsonify, redirect, url_for, session
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime
from functools import wraps
import json

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///worklink.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = 'votre_clé_secrète_ici'  # Important pour la session
db = SQLAlchemy(app)

# Modèles de données
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)
    first_name = db.Column(db.String(80), nullable=False)
    last_name = db.Column(db.String(80), nullable=False)
    phone = db.Column(db.String(20), nullable=False)
    city = db.Column(db.String(80), nullable=False)
    cin = db.Column(db.String(20), nullable=False)
    user_type = db.Column(db.String(20), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

class Professional(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    services = db.Column(db.String(255), nullable=False)
    experience = db.Column(db.Integer, nullable=False)
    certifications = db.Column(db.String(255))
    description = db.Column(db.Text, nullable=False)
    availability = db.Column(db.String(50), nullable=False)
    registration_number = db.Column(db.String(50), nullable=False)
    insurance_number = db.Column(db.String(50), nullable=False)
    user = db.relationship('User', backref='professional_profile', uselist=False)

# Décorateur pour vérifier si l'utilisateur est connecté
def login_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if 'user_id' not in session:
            return redirect(url_for('index'))
        return f(*args, **kwargs)
    return decorated_function

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/register', methods=['POST'])
def register():
    try:
        data = request.json
        
        # Vérifier si l'utilisateur existe déjà
        if User.query.filter_by(email=data['email']).first():
            return jsonify({'error': 'Email déjà utilisé'}), 400
        
        # Créer un nouvel utilisateur
        user = User(
            email=data['email'],
            password=generate_password_hash(data['password']),
            first_name=data['firstName'],
            last_name=data['lastName'],
            phone=data['phone'],
            city=data['city'],
            cin=data['cin'],
            user_type=data['userType']
        )
        
        db.session.add(user)
        db.session.flush()  # Pour obtenir l'ID de l'utilisateur
        
        # Si c'est un professionnel, ajouter les informations supplémentaires
        if data['userType'] == 'professional':
            professional = Professional(
                user_id=user.id,
                services=','.join(data['services']),
                experience=int(data['experience']),
                certifications=data['certifications'],
                description=data['description'],
                availability=data['availability'],
                registration_number=data['registrationNumber'],
                insurance_number=data['insurance']
            )
            db.session.add(professional)
        
        db.session.commit()
        
        # Connecter automatiquement l'utilisateur après l'inscription
        session['user_id'] = user.id
        session['user_type'] = user.user_type
        
        return jsonify({
            'message': 'Inscription réussie',
            'user': {
                'id': user.id,
                'email': user.email,
                'firstName': user.first_name,
                'lastName': user.last_name,
                'userType': user.user_type
            }
        }), 201
        
    except Exception as e:
        db.session.rollback()
        print(f"Erreur lors de l'inscription: {str(e)}")
        return jsonify({'error': str(e)}), 500

@app.route('/login', methods=['POST'])
def login():
    try:
        data = request.json
        user = User.query.filter_by(email=data['email']).first()
        
        if user and check_password_hash(user.password, data['password']):
            session['user_id'] = user.id
            session['user_type'] = user.user_type
            return jsonify({
                'message': 'Connexion réussie',
                'user': {
                    'id': user.id,
                    'email': user.email,
                    'firstName': user.first_name,
                    'lastName': user.last_name,
                    'userType': user.user_type
                }
            })
        
        return jsonify({'error': 'Email ou mot de passe incorrect'}), 401
        
    except Exception as e:
        print(f"Erreur lors de la connexion: {str(e)}")
        return jsonify({'error': str(e)}), 500

@app.route('/logout')
def logout():
    session.clear()
    return redirect(url_for('index'))

@app.route('/profile')
@login_required
def profile():
    user = User.query.get(session['user_id'])
    if user.user_type == 'professional':
        return render_template('professional_profile.html', user=user)
    return render_template('client_profile.html', user=user)

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)