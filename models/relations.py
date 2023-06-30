from models import db

ingredient_recipe = db.Table('ingredient_recipe',
    db.Column('ingredient_id', db.Integer, db.ForeignKey('ingredients.id'), ondelete="CASCADE", primary_key=True),
    db.Column('recipe_id', db.Integer, db.ForeignKey('recipes.id'), ondelete="CASCADE", primary_key=True)
)

ingredient_user = db.Table('ingredient_user',
    db.Column('ingredient_id', db.Integer, db.ForeignKey('ingredients.id'), ondelete="CASCADE", primary_key=True),
    db.Column('user_id', db.Integer, db.ForeignKey('users.id'), ondelete="CASCADE", primary_key=True)
)