from flask import Blueprint, jsonify, request
from models.food_group import Food_Group

api = Blueprint('food_group_api', __name__)

@api.route('/food_groups', methods=['GET'])
def list_food_group():
    
    food_groups = Food_Group.query.all()
    food_groups = list(map(lambda food_group: food_group.serialize(), food_groups))

    return jsonify(food_groups), 200