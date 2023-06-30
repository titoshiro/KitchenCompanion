from flask import Blueprint, jsonify, request

api = Blueprint('api', __name__)

@api.route('/users', methods=['GET'])
def list_users():
    return jsonify([
        { "id": 1, "name": "John Doe" },
        { "id": 2, "name": "Jane Doe" },
    ]), 200