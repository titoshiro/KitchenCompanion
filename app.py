import os
from flask import Flask, jsonify
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager
from flask_cors import CORS
from models import db

from models.role import Role
from models.user import User

from dotenv import load_dotenv
from rutas import api

from routes.auth import api as api_auth
from routes.users import api as api_users
from routes.roles import api as api_roles

load_dotenv()

app = Flask(__name__)
app.config['DEBUG'] = True
app.config['ENV'] = 'development'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URI')
app.config['JWT_SECRET_KEY'] = os.getenv('SECRET_KEY')

db.init_app(app)
Migrate(app, db)
jwt = JWTManager(app)
CORS(app)

app.register_blueprint(api_auth, url_prefix="/api")
app.register_blueprint(api_roles, url_prefix="/api")
app.register_blueprint(api_users, url_prefix="/api")


@app.route('/')
def main():
    return jsonify({ "message": "API REST With Flask"}), 200


if __name__ == '__main__':
    app.run()