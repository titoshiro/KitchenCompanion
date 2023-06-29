from models import db

class Ingredient_recipe(db.Model):
    __tablename__='ingredient_user'
    id_ingredient = db.Column(db.Integer, primary_key=True, db.ForeignKey('ingredients.id'))
    id_user = db.Column(db.Integer, primary_key=True, db.ForeignKey('users.id'))
