from flask import Blueprint, jsonify, request
from models.food_group import Food_group

api = Blueprint('api_food_group', __name__)

@api.route('/food_groups', methods=['GET'])
def list_food_group():
    
    food_groups = Food_group.query.all()
    food_groups = list(map(lambda user: food_group.serialize(), food_groups))

    return jsonify(food_groups), 200