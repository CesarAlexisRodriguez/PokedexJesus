from marshmallow import Schema, fields, ValidationError

class UserSchema(Schema):
    name = fields.String(
        required=True,
        validate=lambda x: len(x) > 0,
        error_messages={"required": "El nombre es requerido"})
    
    password = fields.String(
        required=True,
        validate=lambda x: len(x) > 8,
        error_messages={"required": "la contraseña es requerida"})
    
    email = fields.String(
        required=True,
        validate=lambda x: "@" in x,
        error_messages={"required": "El nombre es requerido"})