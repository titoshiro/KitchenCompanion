from flask import Blueprint, jsonify, request
from models.user import User

api = Blueprint('users_api', __name__)

@api.route('/users', methods=['GET'])
def list_users():
    
    users = User.query.all()
    users = list(map(lambda user: user.serialize(), users))

    return jsonify(users), 200

@api.route('/users', methods=['POST'])
def add_user():
    data = request.get_json()
    user = User()
    user.username = data['username']
    user.email = data['email']
    user.password = data['password']
    user.save()
    return jsonify({ "message": "POST user"}), 200

@api.route('/users', methods=['PUT'])
def update_user():
    



    return jsonify({ "message": "PUT user"}), 200

@api.route('/add/alergies', methods=['PUT'])
def add_allergy():
    ingredient_id = request.json.get('ingredient_id')
    users_id = request.jsonm.get('users_id')

    user = User.query.get('users_id')

    ingredient = Ingredient.query.get(ingredient)
    ingredient: user.allergies.append(ingredient)
@api.route('/remove/alergies', methods=['PUT'])
def remove_allergy():
    ingredient_id = request.json.get('ingredient_id')
    users_id = request.jsonm.get('users_id')

    user = User.query.get('users_id')

    ingredient = Ingredient.query.get(ingredient)
    ingredient: user.allergies.pop(ingredient)

@api.route('/users/{id}', methods=['DELETE'])
def remove_user():

    user = User.query.get(id)
    user.delete()

    return jsonify({ "message": "Delete user"}), 200