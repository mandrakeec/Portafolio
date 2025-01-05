const modal = document.getElementById('modal');
const modalImage = document.getElementById('imagen-modal');
const modalDescription = document.getElementById('descripcion-modal');
const closeModal = document.querySelector('.cerrar');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentImages = []; // Almacena las imágenes del proyecto actual
let currentIndex = 0;   // Índice de la imagen actual

// Datos de los proyectos y sus imágenes
const proyectos = {
    "1": [
        { src: "./img/actas1.png", alt: "Ingreso de Acta Entrega" },
        { src: "./img/actas2.png", alt: "Consulta de Acta Entrega" },
        { src: "./img/actas3.png", alt: "Modificar Acta de Entrega" },
        { src: "./img/actas4.png", alt: "Eliminar Acta de Entrega" },
        { src: "./img/actas5.png", alt: "Eliminar Acta de Entrega" },
        { src: "./img/actas6.png", alt: "PDF Acta de Entrega" },
        { src: "./img/inventario1.png", alt: "Inventario de Equipos - CRUD" },
        { src: "./img/inventario2.png", alt: "Reporte de Inventario - PDF" },
        { src: "./img/inventario3.png", alt: "Reporte de Inventario - PDF" },
        { src: "./img/inventario4.png", alt: "Reporte de Inventario - PDF" }
    ],
    "2": [
        { src: "./img/python.jpg", alt: "Proyecto de Python avanzado - Imagen 1" },
        { src: "./img/python2.jpg", alt: "Proyecto de Python avanzado - Imagen 2" }
    ],
    "3": [
        { src: "./img/actas1.png", alt: "Proyecto Actas Entrega - Imagen 1" },
        { src: "./img/actas2.png", alt: "Proyecto Actas Entrega - Imagen 2" },
        { src: "./img/actas3.png", alt: "Proyecto Actas Entrega - Imagen 3" }
    ],
    "4": [
        { src: "./img/python.jpg", alt: "Proyecto de Python avanzado - Imagen 1" },
        { src: "./img/python2.jpg", alt: "Proyecto de Python avanzado - Imagen 2" }
    ]
};

// Al hacer clic en la imagen principal, abre el modal con las imágenes del proyecto
document.querySelectorAll('.imagen-proyecto').forEach(img => {
    img.addEventListener('click', () => {
        const proyectoId = img.getAttribute('data-proyecto');
        currentImages = proyectos[proyectoId];
        currentIndex = 0; // Empieza siempre en la primera imagen del proyecto
        updateModalContent();
        modal.classList.add('show');
    });
});

// Actualiza el contenido del modal
function updateModalContent() {
    const currentImage = currentImages[currentIndex];
    modalImage.src = currentImage.src;
    modalDescription.textContent = currentImage.alt || 'Sin descripción';
}

// Navegar a la imagen anterior
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    updateModalContent();
});

// Navegar a la siguiente imagen
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % currentImages.length;
    updateModalContent();
});

// Cierra el modal
closeModal.addEventListener('click', () => {
    modal.classList.remove('show');
});

// Cierra el modal al hacer clic fuera
window.addEventListener('click', e => {
    if (e.target === modal) {
        modal.classList.remove('show');
    }
});
