from app import mongo
from app.models.super_clase import SuperClass

class users(SuperClass):
    def __init__(self):
        super().__init__("users")

        def find_all(self):
            raise NotImplementedError("No es necesario encontrar todos los usuarios")
        
        def get_by_email_password(self, email, password):
            user = self.collection.find_one({
                "email": email,
                "password": password
            })
            return user
        