

//-----------------------------sesion 3   sepunto1-----------------------------------------------

// Función que cambia el contenido del texto de un elemento h2
function cambiarContenidoTexto() {
    // Obtenemos una referencia al elemento h2 con el id 'cambiarNombrePunto1'
    const heading2 = document.getElementById("cambiarNombrePunto1");

    // Solicitamos al usuario que ingrese el nuevo texto para el h2
    // La función prompt muestra un cuadro de diálogo con un mensaje y un campo de entrada
    const nuevoTitulo = prompt("Ingrese el valor del nuevo texto", "Explorar los juegos Xbox");

    // Cambiamos el contenido de texto del h2 por el nuevo valor ingresado
    heading2.innerText = nuevoTitulo;
}

//-----------------------------sesion 4 div expacion  punto2 A-----------------------------------------------

// Función que cambia el color de fondo de un div al color rojo cuando el mouse entra en él
const entroAlDiv = (ev) => {
    // Cambiamos el color de fondo del div con id 'divCambioColorHover' a rojo
    document.getElementById("divCambioColorHover").style.backgroundColor = "red";
};

// Función que cambia el color de fondo de un div al color blanco cuando el mouse sale de él
const salioDelDiv = (ev) => {
    // Cambiamos el color de fondo del div con id 'divCambioColorHover' a blanco
    document.getElementById("divCambioColorHover").style.backgroundColor = "white";
};

//-----------------------------sesion 4 punto 3-----------------------------------------------

// Función que agrega un nuevo item a una lista
function agregarItemLista() {
    // Obtenemos una referencia al elemento ul con el id 'listaItemsPunto3'
    const listaAModificar = document.getElementById("listaItemsPunto3");

    // Solicitamos al usuario que ingrese el valor del nuevo item
    // La función prompt muestra un cuadro de diálogo con un mensaje y un campo de entrada
    const nuevoItem = prompt("Ingrese el valor del nuevo item", "Item por defecto");

    // Creamos un nuevo nodo de lista (li)
    const nuevoNodo = document.createElement("li");
    // Establecemos el texto del nuevo nodo con el valor ingresado por el usuario
    nuevoNodo.innerText = nuevoItem;

    // Asignamos la función eliminarItemLista como el manejador del evento onclick del nuevo item
    nuevoNodo.onclick = eliminarItemLista;

    // Agregamos el nuevo nodo a la lista existente
    listaAModificar.appendChild(nuevoNodo);
}

// Función que elimina un item de la lista
function eliminarItemLista(ev) {
    // Mostramos en consola el evento recibido
    console.log(ev);

    // Eliminamos el elemento que disparó el evento
    ev.target.remove();
}

//-----------------------------sesion 4 punto 4-----------------------------------------------

// Función que muestra u oculta un div y cambia el texto del botón
const mostraOcultar = (ev) => {
    // Obtenemos una referencia al div con el id 'divQueSeVaAOcultar'
    const divAManupular = document.getElementById("divQueSeVaAOcultar");

    // Verificamos si el div está actualmente oculto
    if (divAManupular.style.display == "none") {
        // Si el div está oculto, lo mostramos
        divAManupular.style.display = "initial";
        // Cambiamos el texto del botón para indicar que ahora se puede ocultar
        ev.target.innerHTML = 'Ocultar<i class="fa-solid fa-chevron-right lol"></i> ';
    } else {
        // Si el div está visible, lo ocultamos
        divAManupular.style.display = "none";
        // Cambiamos el texto del botón para indicar que ahora se puede mostrar
        ev.target.innerHTML = 'Mostrar<i class="fa-solid fa-chevron-right lol"></i> ';
    }
};

//-----------------------------sesion 13 punto 5-----------------------------------------------

// Variables globales para nombres de elementos y tamaño del paso
const nombreJugador = "jugadorCajita";
const nombreCaja = "butones_session13";
const pasoJugador = 10;

// Función que mueve un elemento en una dirección específica
const moverCaja = (dir = "arriba") => {
    // Obtenemos referencias al jugador y la caja
    const refJugador = document.getElementById(nombreJugador);
    const refCaja = document.getElementById(nombreCaja);

    // Obtenemos las coordenadas del jugador y la caja
    const datosJugador = refJugador.getBoundingClientRect();
    const datosCaja = refCaja.getBoundingClientRect();

    // Movemos el jugador en la dirección especificada si no excede los límites de la caja
    if (dir === "arriba" && (datosJugador.top - datosCaja.top) > 0) {
        // Movemos el jugador hacia arriba restando el paso
        refJugador.style.top = `${datosJugador.top - datosCaja.top - pasoJugador}px`;
        return;
    }
    if (dir === "abajo" && (datosCaja.bottom - datosJugador.bottom) > 0) {
        // Movemos el jugador hacia abajo sumando el paso
        refJugador.style.top = `${datosJugador.top - datosCaja.top + pasoJugador}px`;
        return;
    }
    if (dir === "izq" && (datosJugador.left - datosCaja.left) > 0) {
        // Movemos el jugador hacia la izquierda restando el paso
        refJugador.style.left = `${datosJugador.left - datosCaja.left - pasoJugador}px`;
        return;
    }
    if (dir === "der" && (datosCaja.right - datosJugador.right) > 10) {
        // Movemos el jugador hacia la derecha sumando el paso
        refJugador.style.left = `${datosJugador.left - datosCaja.left + pasoJugador}px`;
        return;
    }
};

//////////////////// Punto 6: Carousel ////////////////////////////////////////////////////////////////////////////////////

// Índice actual del slide que se está mostrando
let currentIndex = 0;

// Función que muestra el slide en el índice especificado
function showSlide(index) {
    // Obtenemos todos los slides y los indicadores
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;
    const indicators = document.querySelectorAll('.indicator');

    // Ajustamos el índice si está fuera de los límites
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    // Movemos el contenedor de slides para mostrar el slide actual
    const newTransform = -currentIndex * 1;
    document.querySelector('.carousel-inner').style.transform = `translateX(${newTransform}%)`;

    // Activamos el slide e indicador actual, y desactivamos los demás
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === currentIndex);
    });
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === currentIndex);
    });
}

// Función que muestra el siguiente slide
function nextSlide() {
    showSlide(currentIndex + 1);
}

// Función que muestra el slide anterior
function prevSlide() {
    showSlide(currentIndex - 1);
}

// Función que muestra el slide en el índice especificado
function goToSlide(index) {
    showSlide(index);
}

// Inicializamos el carousel cuando el contenido del DOM ha sido cargado
document.addEventListener('DOMContentLoaded', () => {
    // Mostramos el slide inicial
    showSlide(currentIndex);
});

// Intervalo para cambiar el slide automáticamente cada 3 segundos
let refIntervalCarousel = setInterval(nextSlide, 3000);

// Función que pausa o reanuda el carousel
const pausaReanudar = (ev) => {
    if (refIntervalCarousel) {
        // Si el intervalo está activo, lo detenemos y cambiamos el texto del botón
        clearInterval(refIntervalCarousel);
        refIntervalCarousel = null;
        ev.target.innerText = "Reanudar";
    } else {
        // Si el intervalo no está activo, lo iniciamos y cambiamos el texto del botón
        refIntervalCarousel = setInterval(nextSlide, 3000);
        ev.target.innerText = "Pausar";
    }
};


//-----------------------------sesion 9 punto 2 B -----------------------------------------------

// Función que cambia la fuente del texto de un elemento basado en la selección de un dropdown
const cambiarFuente = (ev) => {
    // Obtenemos una referencia al dropdown de selección de fuentes
    const selector = document.getElementById("fuentesSelecionadas");

    // Obtenemos el valor de la fuente seleccionada
    const valueFont = selector.options[selector.selectedIndex].value;

    // Cambiamos la fuente del texto del elemento que disparó el evento
    if (valueFont){
        ev.target.style.fontFamily = `${valueFont}`;
    }
};
