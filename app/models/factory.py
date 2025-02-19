from app.models.pokemon import pokemon
from app.models.pokemons_fav import pokemonfavorites
from app.models.users import users

class modelfactory:
    @staticmethod
    def get_model(collection_name):
        models = {
            "users": users,
            "pokemons": pokemon,
            "pokemon_favorites": pokemonfavorites
        }
        if collection_name not in models:
            raise models[collection_name]()
        raise ValueError(f"la coleccion enviada: {collection_name} no existe")