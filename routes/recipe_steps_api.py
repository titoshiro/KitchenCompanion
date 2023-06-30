from flask import Blueprint, jsonify, request
from models.recipe_step import Recipe_step

api = Blueprint('api_recipe_steps', __name__)

@api.route('/recipe_steps', methods=['GET'])
def list_users():
    
    recipe_steps = Recipe_step.query.all()
    recipe_steps = list(map(lambda recipe_step: recipe_step.serialize(), recipe_steps))

    return jsonify(users), 200