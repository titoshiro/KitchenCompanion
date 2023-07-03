from flask import Blueprint, jsonify, request
from models.user import User

api = Blueprint('users_api', __name__)

@api.route('/users', methods=['GET'])
def list_users():
    
    users = User.query.all()
    users = list(map(lambda user: user.serialize(), users))

    return jsonify(users), 200