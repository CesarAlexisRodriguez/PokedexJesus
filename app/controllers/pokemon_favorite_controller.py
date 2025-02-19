#crea 
#elimina
#get all
#modificar la clase del modelo y evitar que se usen metodos no permitidos

from flask import Blueprint, request, jsonify
from app.models.factory import modelfactory
from bson import ObjectId

bp = Blueprint('favorite_pokemons', __name__, url_prefix='/favorite_pokemons')
favorite_pokemon_model = modelfactory.get_model("favorite_pokemon")

@bp.route('/get_all', methods=["GET"])
def get_all():
    favorites = favorite_pokemon_model.find_all()
    return jsonify(favorites), 200

@bp.route('/create', methods=["POST"])
def create():
    data = request.json
    favorite_id = favorite_pokemon_model.create(data)
    return jsonify({"favorite_id": str(favorite_id)}), 200

@bp.route('/delete/<string:favorite_id>', methods=["DELETE"])
def delete(favorite_id):
    favorite_pokemon_model.delete(ObjectId(favorite_id))
    return jsonify("Pokémon favorito eliminado con éxito"), 200
