from flask import Blueprint, jsonify, request
from models.recipe import Recipe

api = Blueprint('api_recipes', __name__)

@api.route('/recipes', methods=['GET'])
def list_recipes():
    
    users = Recipe.query.all()
    users = list(map(lambda user: recipe.serialize(), recipes))

    return jsonify(recipes), 200