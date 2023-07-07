from flask import Blueprint, jsonify, request
from flask_jwt_extended import create_access_token
from models.user import User
from werkzeug.security import generate_password_hash, check_password_hash

api = Blueprint('api_auth', __name__)

@api.route('/login', methods=['POST'])
def login():
    
    email = request.json.get('email')
    password = request.json.get('password')
    
    userFound = User.query.filter_by(email=email).first()
    
    if not userFound: return jsonify({ "message": "email/password is incorrect"}), 401
    
    if not check_password_hash(userFound.password, password):
        return jsonify({ "message": "email/password is incorrect"}), 401
    
    acces_token = create_access_token(identity=userFound.id)
    
    data = {
        "access_token": acces_token,
        "user": userFound.serialize()
    }

    return jsonify(data), 200

@api.route('/register', methods=['POST'])
def register():

    email = request.json.get('email')
    password = request.json.get('password')
    password = generate_password_hash(password)
    
    userFound = User.query.filter_by(email=email).first()
    
    if userFound:
        return jsonify({ "message": "email already in use"}), 409

    userFound = User()
            
    userFound.email = email        
    userFound.password = password
    userFound.name = email

    userFound.save()
        
    data = {
        "user": userFound.serialize()
    }

    return jsonify(data), 200
    