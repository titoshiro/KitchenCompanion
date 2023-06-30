from flask import Blueprint, jsonify, request
from models.ingredient import Ingredient

api = Blueprint('api_ingredients', __name__)

@api.route('/ingredients', methods=['GET'])
def list_users():
    
    ingredients = Ingredient.query.all()
    ingredients = list(map(lambda user: ingredient.serialize(), ingredients))

    return jsonify(ingredients), 200