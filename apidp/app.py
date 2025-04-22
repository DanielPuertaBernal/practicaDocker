import json
from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api/user')
def get_user_info():
    user_data = {
        "rol": "Administrador",
        "nombre": "Juan Pérez",
        "correo": "juan.perez@example.com",
        "telefono": "+52 123 456 7890",
        "descripcion": "Usuario con acceso completo al sistema"
    }
    return jsonify(user_data)

