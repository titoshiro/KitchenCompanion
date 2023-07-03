import os
from flask import Flask, jsonify
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager
from flask_cors import CORS
from models import db

from models.food_group import Food_group
from models.ingredient import Ingredient
from models.recipe_step import Recipe_step
from models.recipe import Recipe
from models.user import User

from dotenv import load_dotenv
from rutas import api

from routes.food_groups_api import api as api_food_group
from routes.ingredients_api import api as api_ingredients
from routes.recipes_api import api as api_recipes
from routes.users_api import api as api_users
from routes.recipe_steps_api import api as api_recipe_steps

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

app.register_blueprint(api_food_group, url_prefix="/api")
app.register_blueprint(api_ingredients, url_prefix="/api")
app.register_blueprint(api_recipes, url_prefix="/api")
app.register_blueprint(api_users, url_prefix="/api")
app.register_blueprint(api_recipe_steps, url_prefix="/api")


@app.route('/')
def main():
    return jsonify({ "message": "API REST With Flask"}), 200

if __name__ == '__main__':
    app.run()