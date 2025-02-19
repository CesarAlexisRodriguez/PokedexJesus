from app import mongo
from app.models.super_clase import SuperClass

class pokemon(SuperClass):
    def __init__(self):
        super().__init__("pokemons")

        def create(self, data):
            raise NotImplementedError("No se puede crear un pokemon")
        
        def delete(self, object_id):
            raise NotImplementedError("No se puede eliminar un pokemon")
        
        def update(self, object_id, data):
            raise NotImplementedError("No se pueden actualizar un pokemon")
        