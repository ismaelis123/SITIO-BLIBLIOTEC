// Función para mostrar la sección seleccionada y ocultar las demás
function showSection(sectionId) {
    // Ocultar todas las secciones
    var sections = document.querySelectorAll('main > section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    // Mostrar la sección seleccionada
    var selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}

// Mostrar la sección de inicio por defecto
document.addEventListener('DOMContentLoaded', function() {
    showSection('inicio');
});
