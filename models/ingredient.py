from models import db

class Ingredient(db.Model):
    __tablename__='ingredients'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50))
    group_id = db.Column(db.Integer, db.ForeignKey('ingredients.id'), nullable=False)
    food_group = db.relationship("Food_Group", back_populates="recipes", lazy=True)

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
        "food_group": self.food_group.name
    }