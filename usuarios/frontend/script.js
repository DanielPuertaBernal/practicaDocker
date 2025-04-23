let currentPage = 1;

function loadUsers(page) {
    fetch(`http://localhost:5000/api/users?page=${page}`)
        .then(response => response.json())
        .then(data => {
            const userList = document.getElementById('user-list');
            const pageInfo = document.getElementById('page-info');
            userList.innerHTML = '';

            data.usuarios.forEach(user => {
                const li = document.createElement('li');
                li.textContent = `${user.nombre} - ${user.correo}`;
                userList.appendChild(li);
            });

            pageInfo.textContent = `Página ${data.pagina_actual} de ${data.paginas_totales}`;

            // Manejo de botones
            document.getElementById('prev').disabled = data.pagina_actual === 1;
            document.getElementById('next').disabled = data.pagina_actual === data.paginas_totales;
        });
}

document.getElementById('prev').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        loadUsers(currentPage);
    }
});

document.getElementById('next').addEventListener('click', () => {
    currentPage++;
    loadUsers(currentPage);
});

loadUsers(currentPage);
