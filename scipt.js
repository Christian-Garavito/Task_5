///// tarea 
// Obtener referencia al botón y al título
var btnCambiarTexto = document.getElementById("cambiarTextoBtn");
var titulo = document.getElementById("titulo");

// Agregar evento click al botón
btnCambiarTexto.addEventListener("click", function() {
    // Solicitar al usuario que ingrese el nuevo texto
    var nuevoTexto = prompt("Por favor, ingresa el nuevo texto:");

    // Verificar si se ingresó un texto y no se canceló el prompt
    if (nuevoTexto !== null && nuevoTexto !== "") {
        // Cambiar el texto del título
        titulo.textContent = nuevoTexto;
    }
});


































let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;
    const indicators = document.querySelectorAll('.indicator');

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const newTransform = -currentIndex * 1;
    document.querySelector('.carousel-inner').style.transform = `translateX(${newTransform}%)`;

    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === currentIndex);
    });

    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === currentIndex);
    });
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function goToSlide(index) {
    showSlide(index);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
});

