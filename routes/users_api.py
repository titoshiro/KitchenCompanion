from flask import Blueprint, jsonify, request
from models.user import User

api = Blueprint('users_api', __name__)

@api.route('/users', methods=['GET'])
def list_users():
    
    users = User.query.all()
    users = list(map(lambda user: user.serialize(), users))

    return jsonify(users), 200

@api.route('/users', methods=['POST'])
def add_food_group():
    return jsonify({ "message": "POST user"}), 200

@api.route('/users', methods=['PUT'])
def update_food_group():
    return jsonify({ "message": "PUT user"}), 200

@api.route('/users', methods=['DELETE'])
def remove_food_group():
    return jsonify({ "message": "Delete user"}), 200