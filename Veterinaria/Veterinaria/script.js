// script.js
document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('#menu li');
    const contentDiv = document.getElementById('content');

    function loadContent(url) {
        fetch(url)
            .then(response => response.text())
            .then(html => {
                contentDiv.innerHTML = html;
            })
            .catch(error => {
                contentDiv.innerHTML = "<p>Error al cargar el contenido.</p>";
            });
    }

    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            loadContent(this.getAttribute('data-target'));
        });
    });

    // Cargar el contenido inicial
    loadContent('vacunas.html');
});
