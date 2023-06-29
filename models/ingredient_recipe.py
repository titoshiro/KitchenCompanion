from models import db

class Ingredient_recipe(db.Model):
    __tablename__='ingredient_recipe'
    id_ingredient = db.Column(db.Integer, primary_key=True, db.ForeignKey('ingredients.id'))
    id_recipe = db.Column(db.Integer, primary_key=True, db.ForeignKey('recipes.id'))