



function cambiarContenidoTexto() {
    // Obtenemos una referencia al h2 con el id 'cambiarNombrePunto1'
    const heading2 = document.getElementById("cambiarNombrePunto1");
  
    const nuevoTitulo = prompt(
      "Ingrese el valor del nuevo texto",
      "Explorar los juegos Xbox"
    );
  
    heading2.innerText = nuevoTitulo;
  }
  
  const entroAlDiv = (ev) => {
    document.getElementById("divCambioColorHover").style.backgroundColor = "red";
  };
  
  const salioDelDiv = (ev) => {
    document.getElementById("divCambioColorHover").style.backgroundColor = "white";
  };
  
  
  function agregarItemLista() {
    // Obtenemos una referencia al h2 con el id 'listaItemsPunto3'
    const listaAModificar = document.getElementById("listaItemsPunto3");
  
    const nuevoItem = prompt(
      "Ingrese el valor del nuevo item",
      "Item por defecto"
    );
  
    const nuevoNodo = document.createElement("li");
    nuevoNodo.innerText = nuevoItem;
    nuevoNodo.onclick = eliminarItemLista;
  
    listaAModificar.appendChild(nuevoNodo)
  }
  
  
  function eliminarItemLista(ev) {
    // Obtenemos una referencia al h2 con el id 'listaItemsPunto3'
    console.log(ev);
    ev.target.remove();
  }
  
  
  const mostraOcultar = (ev) => {
    const divAManupular = document.getElementById("divQueSeVaAOcultar");
    
    if (divAManupular.style.display == "none") {
      divAManupular.style.display = "initial";
      ev.target.innerHTML = 'Ocultar<i class="fa-solid fa-chevron-right lol"></i> ';
    } else {
      divAManupular.style.display = "none";
      ev.target.innerHTML = 'Mostrar<i class="fa-solid fa-chevron-right lol"></i> ';
    }
  }
  
  const nombreJugador = "jugadorCajita";
  const nombreCaja = "butones_session13";
  const pasoJugador = 10;
  
  const moverCaja = (dir = "arriba") => {
    const refJugador = document.getElementById(nombreJugador);
    const refCaja = document.getElementById(nombreCaja);
  
    const datosJugador = refJugador.getBoundingClientRect();
    const datosCaja = refCaja.getBoundingClientRect();
    
    if (dir === "arriba") {
      if ((datosJugador.top - datosCaja.top) > 0) {
        refJugador.style.top = `${datosJugador.top - datosCaja.top - pasoJugador}px`;
      }
      return;
    }
    if (dir === "abajo") {
      if ((datosCaja.bottom - datosJugador.bottom) > 0) {
        refJugador.style.top = `${datosJugador.top - datosCaja.top + pasoJugador}px`;
      }
      return;
    }
    if (dir === "izq") {
      if ((datosJugador.left - datosCaja.left) > 0) {
        refJugador.style.left = `${datosJugador.left - datosCaja.left - pasoJugador}px`;
      }
      return;
    }
    if (dir === "der") {
      if ((datosCaja.right - datosJugador.right) > 10) {
        refJugador.style.left = `${datosJugador.left - datosCaja.left + pasoJugador}px`;
      }
      return;
    }
  }
  
  
  








////////////////////punto 6//////////////////////////////////////////////////////////////////////
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

let refIntervalCarousel = setInterval(nextSlide, 3000);

const pausaReanudar = (ev) => {
    if (refIntervalCarousel) {
        clearInterval(refIntervalCarousel);
        refIntervalCarousel = null;
        ev.target.innerText = "Reanudar";
    } else {
        refIntervalCarousel = setInterval(nextSlide, 3000);
        ev.target.innerText = "Pausar";
    }
};

const cambiarFuente = (ev) => {
    const selector = document.getElementById("fuentesSelecionadas");

    const valueFont = selector.options[selector.selectedIndex].value;

    if (valueFont){
        ev.target.style.fontFamily = `${valueFont}`;
    }
}
