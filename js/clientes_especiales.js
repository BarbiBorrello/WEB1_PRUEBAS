window.onload = function () {

    // window.onload: ejecutar la función de JavaScript tan pronto como una página haya cargado.
    // El formato ${marcador} nos permite insertar un valor dinámico en la cadena.

    // Variables
    const IMAGENES = [
        "img/Cliente1.png",
        "img/Cliente2.png",
        "img/Cliente3.png",
        "img/Cliente4.png",
        "img/Cliente5.png",
        "img/Cliente6.png",
        "img/Cliente7.png",
        "img/Cliente8.png",
        "img/Cliente9.png",
        "img/Cliente10.png",
        "img/Cliente11.png"


    ];



    const TIEMPO_INTERVALO_MILESIMAS_SEG = 1000;
    let posicionActual = 0;
    let $botonRetroceder = document.querySelector('#retroceder');
    let $botonAvanzar = document.querySelector('#avanzar');
    let $imagen = document.querySelector('#imagen');


    // Funciones

    /**
     * Funcion que cambia la foto en la siguiente posicion
     */
    function pasarFoto() {
        if (posicionActual >= IMAGENES.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        renderizarImagen();
    }

    /**
     * Funcion que cambia la foto en la anterior posicion
     */
    function retrocederFoto() {
        if (posicionActual <= 0) {
            posicionActual = IMAGENES.length - 1;
        } else {
            posicionActual--;
        }
        renderizarImagen();
    }

    /**
     * Funcion que actualiza la imagen de imagen dependiendo de posicionActual
     */
    function renderizarImagen() {
        $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
    }


    // Eventos
    $botonAvanzar.addEventListener('click', pasarFoto);
    $botonRetroceder.addEventListener('click', retrocederFoto);

    // Iniciar
    renderizarImagen();
}



