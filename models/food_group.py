from models import db

class Food_group(db.Model):
    __tablename__='food_groups'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50))
    description = db.Column(db.String(50))

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
        "name": self.name,
        "description": self.description
    }