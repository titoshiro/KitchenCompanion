from models import db

class User(db.Model):
        __tablename__='users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50))
    email = db.Column(db.String(150))
    password = db.Column(db.String(50))

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
        "password": self.password
        "ingredient": self.ingredient.name
    }