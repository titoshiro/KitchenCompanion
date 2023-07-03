from flask import Blueprint, jsonify, request
from models.recipe import Recipe

api = Blueprint('recipes_api', __name__)

@api.route('/recipes', methods=['GET'])
def list_recipes():
    
    users = Recipe.query.all()
    users = list(map(lambda recipe: recipe.serialize(), recipes))

    return jsonify(recipes), 200

@api.route('/recipes', methods=['POST'])
def add_food_group():
    return jsonify({ "message": "POST recipe"}), 200

@api.route('/recipes', methods=['PUT'])
def update_food_group():
    return jsonify({ "message": "PUT recipe"}), 200

@api.route('/recipes', methods=['DELETE'])
def remove_food_group():
    return jsonify({ "message": "Delete recipe"}), 200