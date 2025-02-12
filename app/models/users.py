from app import mongo

class user:
    collection = mongo.db.user

#metodo para encontrar todos los usuarios
    @staticmethod
    def find_all():
        users = user.collection.find()
        return list(users)
    
    @staticmethod
    def find_by_id(user_id):
        user = user.collection.find_one({
            "_id": user_id
            })
        return user
    
    @staticmethod
    def create(data):
        user = user.collection.insert_one(data)
        return user.inserted_id
    
    @staticmethod
    def update(user_id, data):
        user = user.collection.update_one({
            "_id": user_id
        }, {
            "$set": data
        })
        return user
    
    @staticmethod
    def delete(user_id):
        return user.collection.delete_one({"_id": user_id})