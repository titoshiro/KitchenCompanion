from flask import Blueprint, jsonify, request
from models.recipe import Recipe

api = Blueprint('recipes_api', __name__)

@api.route('/recipes', methods=['GET'])
def list_recipes():
    
    recipes = Recipe.query.all()
    recipes = list(map(lambda recipe: recipe.serialize(), recipes))

    return jsonify(recipes), 200

@api.route('/recipes', methods=['POST'])
def add_food_group():
    data = request.get_json()
    recipe = Recipe()
    recipe.recipe_name = data['recipe_name']
    recipe.ingredient_id = data['ingredient_id']
    recipe.description = data['description']
    recipe.image_url = data['imgage_url']
    recipe.save()

    return jsonify({ "message": "POST recipe"}), 200

@api.route('/recipes/{id}', methods=['GET'])
def add_food_group():
    
    recipe = Recipe.query.get(id)

    return jsonify(recipe.serialize()), 200

@api.route('/recipes', methods=['PUT'])
def update_food_group():
    return jsonify({ "message": "PUT recipe"}), 200

@api.route('/recipes', methods=['DELETE'])
def remove_food_group():
    return jsonify({ "message": "Delete recipe"}), 200