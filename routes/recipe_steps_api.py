from flask import Blueprint, jsonify, request
from models.recipe_step import Recipe_Step

api = Blueprint('recipe_steps_api', __name__)

@api.route('/recipe_steps', methods=['GET'])
def list_users():
    
    recipe_steps = Recipe_Step.query.all()
    recipe_steps = list(map(lambda recipe_step: recipe_step.serialize(), recipe_steps))

    return jsonify(users), 200

@api.route('/recipe_steps', methods=['POST'])
def add_food_group():
    return jsonify({ "message": "POST recipe steps"}), 200

@api.route('/recipe_steps', methods=['PUT'])
def update_food_group():
    return jsonify({ "message": "PUT recipe steps"}), 200

@api.route('/recipe_steps', methods=['DELETE'])
def remove_food_group():
    return jsonify({ "message": "Delete recipe steps"}), 200