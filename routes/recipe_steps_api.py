from flask import Blueprint, jsonify, request
from models.recipe_step import Recipe_Step
from models.recipe import Recipe

api = Blueprint('recipe_steps_api', __name__)

@api.route('/recipe_steps', methods=['GET'])
def list_recipe_steps():
    
    recipe_steps = Recipe_Step.query.all()
    recipe_steps = list(map(lambda recipe_step: recipe_step.serialize(), recipe_steps))

    return jsonify(recipe_steps), 200

@api.route('/recipe_steps', methods=['POST'])
def add_food_group():

    recipe_steps = Recipe_steps()
    recipe_steps.recipe_name = data['recipe_name']
    recipe_steps.ingredient_id = data['ingredient_id']
    recipe_steps.description = data['description']
    recipe_steps.image_url = data['imgage_url']

@api.route('/recipes_steps/{id}', methods=['GET'])
def add_food_group():
    
    recipe = Recipe.query.get(id)
    recipe_steps = recipe.recipe_steps

    return jsonify(recipe_steps.serialize()), 200


@api.route('/recipe_steps', methods=['PUT'])
def update_food_group():
    return jsonify({ "message": "PUT recipe steps"}), 200

@api.route('/recipe_steps', methods=['DELETE'])
def remove_food_group():
    return jsonify({ "message": "Delete recipe steps"}), 200