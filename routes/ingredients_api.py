from flask import Blueprint, jsonify, request
from models.ingredient import Ingredient

api = Blueprint('ingredients_api', __name__)

@api.route('/ingredients', methods=['GET'])
def list_users():
    
    ingredients = Ingredient.query.all()
    ingredients = list(map(lambda ingredient: ingredient.serialize(), ingredients))

    return jsonify(ingredients), 200

@api.route('/ingredients', methods=['POST'])
def add_food_group():

    ingredient = Ingredient()
    ingredient. name = data['recipe_name']
    ingredient.ingredient_id = data['food_group_id']
    ingredient.save()
    return jsonify({ "message": "POST user"}), 200


@api.route('/ingredients', methods=['PUT'])
def update_food_group():
    return jsonify({ "message": "PUT ingredient"}), 200

@api.route('/ingredients', methods=['DELETE'])
def remove_food_group():
    return jsonify({ "message": "Delete ingredient"}), 200