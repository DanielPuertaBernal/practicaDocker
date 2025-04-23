from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Lista de 20 empleados de ejemplo
empleados = [
    {
        "id": i,
        "nombre": f"Empleado {i}",
        "correo": f"empleado{i}@empresa.com",
        "telefono": f"+52 123 456 78{i:02d}",
        "rol": "Empleado",
        "descripcion": f"Empleado número {i} en la compañía."
    }
    for i in range(1, 21)
]

@app.route('/api/users')
def get_users():
    page = int(request.args.get('page', 1))
    per_page = 5
    start = (page - 1) * per_page
    end = start + per_page
    paginated = empleados[start:end]
    total_pages = (len(empleados) + per_page - 1) // per_page
    return jsonify({
        "usuarios": paginated,
        "pagina_actual": page,
        "paginas_totales": total_pages
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
