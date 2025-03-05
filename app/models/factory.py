from app.models.pokemon import Pokemon
from app.models.pokemons_fav import PokemonFavorites
from app.models.users import users

class modelfactory:
    @staticmethod
    def get_model(collection_name):
        models = {
            "users": users,
            "pokemons": Pokemon, #en ves de pokemon era pokemons
            "pokemon_favorites": PokemonFavorites
        }
        if collection_name in models:
            return models[collection_name]() #
        else:
            raise ValueError(f"la coleccion enviada: {collection_name} no existe")