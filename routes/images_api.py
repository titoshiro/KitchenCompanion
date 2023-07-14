import cloudinary
import cloudinary.uploader
from flask import Blueprint, jsonify, request
from models.image import Image

api = Blueprint('image_api', __name__)

@api.route('/images', methods=['GET'])
def list_gallery_images():
    
    images = Image.query.filter_by(active=True).all()
    images = list(map(lambda image: image.serialize(), images))
    
    return jsonify(images), 200

@api.route('/images/upload', methods=['POST'])
def upload_image():
    
    title = request.form['title']
    image = None
    
    if not title: return jsonify({"message": "Title is required!"}), 400
    if not 'image' in request.files: 
        return jsonify({"message": "Image is required!"}), 400
    else: 
        image = request.files['image']
        
    response = cloudinary.uploader.upload(image, folder="gallery_project")
    
    if response:
        
        imgGallery = Image()
        imgGallery.title = title
        imgGallery.image_file = response['secure_url']
        imgGallery.public_id = response['public_id']
        imgGallery.active = True
        imgGallery.save()
    
    return jsonify({ "image": imgGallery.serialize(), "message": "Image uploaded successfully"}), 201

@api.route('/api/gallery/image/<int:id>/delete', methods=['DELETE'])
def delete_image(id):
    image = Image.query.get(id)
    
    if not image: return jsonify({ "message": "Image not found"}), 400
    
    cloudinary.uploader.destroy(image.public_id)
    
    image.delete()
    
    return jsonify({ "message": "Image deleted!"}), 200