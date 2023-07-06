from models import db

class Recipe_Step(db.Model):
    __tablename__='recipe_steps'
    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(200), nullable=False)
   
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
            "description": self.description
        }

    def serialize_with_recipe(self):
        return {
            "id": self.id,
            "description": self.description,
            "recipe": self.recipe.name
        }