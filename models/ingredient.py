from models import db
from models.image import Image

class Ingredient(db.Model):
    __tablename__='ingredients'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50))
    food_groups_id = db.Column(db.Integer, db.ForeignKey('food_groups.id'), nullable=False)
    vegan_tag = db.Column(db.Boolean, nullable=False)
    vegetarian_tag = db.Column(db.Boolean, nullable=False)
    image_ = db.Column(db.String(150), nullable=False)
    users = db.relationship("User", secondary="ingredient_user")
    recipes = db.relationship("Recipe", secondary="ingredient_recipe")


    def save(self):
        db.session.add(self)
        db.session.commit()
        
    def update(self):
        db.session.commit()
            
    def delete(self):
        db.session.delete(self)
        db.session.commit()

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name
        }

    def serialize_with_group(self):
        return {
            "id": self.id,
            "name": self.name,
            "food_group": self.group.name
        }
    def serialize_all(self):
        return{
            "id": self.id,
            "name": self.name,
            "food_group": self.group.name,
            "vegan_tag": self.vegan_tag,
            "vegetarian_tag": self.vegetarian_tag,
            "image_file": self.image.image_file

        }