from models import db
from models.relations import ingredient_user
class User(db.Model):
    __tablename__='users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(150), unique=True)
    password = db.Column(db.String(50))
    ingredient = db.relationship('Ingredient', cascade="all,delete", secondary=ingredient_user, backref="users")



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
        "username": self.username,
        "email": self.email,
        "password": self.password
    }


def serialize_with_ingredient(self):
    return {
        "id": self.id,
        "username": self.username,
        "email": self.email,
        "password": self.password,
        "ingredient": self.ingredient.name
    }