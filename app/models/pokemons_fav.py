from app import mongo

class favorite_pokemon:
    collection = mongo.db.favorite_pokemon

    # Método para encontrar todos los Pokémon favoritos
    @staticmethod
    def find_all():
        favorites = favorite_pokemon.collection.find()
        return list(favorites)
    
    # Método para encontrar un Pokémon favorito por ID
    @staticmethod
    def find_by_id(favorite_id):
        favorite = favorite_pokemon.collection.find_one({
            "_id": favorite_id
        })
        return favorite
    
    # Método para encontrar todos los Pokémon favoritos de un usuario
    @staticmethod
    def find_by_user(user_id):
        favorites = favorite_pokemon.collection.find({"user_id": user_id})
        return list(favorites)
    
    # Método para agregar un Pokémon a favoritos
    @staticmethod
    def create(data):
        favorite = favorite_pokemon.collection.insert_one(data)
        return favorite.inserted_id
    
    # Método para eliminar un Pokémon de favoritos
    @staticmethod
    def delete(favorite_id):
        return favorite_pokemon.collection.delete_one({"_id": favorite_id})
