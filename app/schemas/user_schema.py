from marshmallow import Schema, fields, ValidationError

class UserSchema(Schema):
    name = fields.String(
        required=True,
        validate=lambda x: len(x) > 0,
        error_messages={"required": "El nombre es requerido"})
    
    password = fields.String(
        required=True,
        validate=lambda x: len(x) > 0,
        error_messages={"required": "la contraseña es requerida"})
    
    email = fields.Email(
        required=True,
        validate=lambda x: "@utma.edu.mx" in x,
        error_messages={"required": "El nombre es requerido"})