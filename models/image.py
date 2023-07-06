from models import db

class Image(db.Model):
    __tablename__ = 'images'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(50), nullable=False)
    image_file = db.Column(db.String(120), nullable=False)
    active = db.Column(db.Boolean(), default=True)
    
    def serialize(self):
        return {
            "id": self.id,
            "title": self.title,
            "image_file": self.image_file,
            "public_id": self.public_id,
            "active": self.active
        }
        
    def save(self):
        db.session.add(self)
        db.session.commit()
        
    def update(self):
        db.session.commit()
    
    def delete(self):
        db.session.delete(self)
        db.session.commit()