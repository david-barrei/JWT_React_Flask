from flask import Flask, request, jsonify
from flask_migrate import Migrate
from flask_jwt_extended import create_access_token, jwt_required,JWTManager
from models import db,User,Book

app = Flask(__name__)
jwt = JWTManager(app)
app.config['JWT_SECRET_KEY']= 'secret-key'
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///pokemon.db"

Migrate(app,db)
db.init_app(app) 


@app.route('/login', methods=['POST'])
def login():
    email = request.json.get('email')
    user = User.query.filter_by(email = email).first()
    if user is None:
        return jsonify({
            'mensaje':'Usuario no encontrado'
        }),404
    password = request.json.get('password')
    if password != user.password:
        return jsonify({
            'mensaje':'Email o password incorrecto'
        }),404
    access_token = create_access_token(identity=email)
    return jsonify({
        'access_token': access_token
    })

@app.route('/user',methods=['POST'])
def create_user():
    user = User()
    user.email = request.json.get('email')
    user.password = request.json.get('password')
    db.session.add(user)
    db.session.commit()

    return jsonify(
        {
            "message":"Usuario guardado"
        }
    ),200

@app.route('/book',methods=['POST'])
@jwt_required(refresh=True)
def create_book():
    book = Book()
    book.title = request.json.get('title')
    book.description = request.json.get('description')
    book.year = request.json.get('year')
    book.feedback = request.json.get('feedback')
    book.user_id = request.json.get('user_id')
    db.session.add(book)
    db.session.commit()


    return jsonify(
        {
            "message":"libro guardado"
        }
    ),200

@app.route('/book',methods=['GET'])#ARREGLAR 
@jwt_required(refresh=True)
def create_book():
    book = Book()
    book.title = request.json.get('title')
    book.description = request.json.get('description')
    book.year = request.json.get('year')
    book.feedback = request.json.get('feedback')
    book.user_id = request.json.get('user_id')
    db.session.add(book)
    db.session.commit()


    return jsonify(
        {
            "message":"libro guardado"
        }
    ),200

if __name__=="__main__":
    app.run(host="localhost", port=5000, debug=True)
