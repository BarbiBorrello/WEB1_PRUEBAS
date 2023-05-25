
const carrusel = document.querySelector(".carrusel-items");

let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;   /*SABER CUAL ES EL MAXIMO DEL SCROLL para que vuelva al principio*/
let intervalo = null;
let step = 1; /*VELOCIDAD*/

/*FUNCION START*/


const start = () => {
  intervalo = setInterval ( function (){
      carrusel.scrollLeft = carrusel.scrollLeft + step;
      if(carrusel.scrollLeft === maxScrollLeft){
          step = step * -1;
      } else if (carrusel.scrollLeft === 0){
          step = step * -1;
      }
  }, 10);
};

/*FUNCION STOP*/

const stop = () => {
  clearInterval(intervalo); /*limpiar intervalo*/
}

carrusel.addEventListener('mouseover', () => {
  stop();
});

carrusel.addEventListener('mouseout', () => {
  start();
});


/*EJECUCION START*/

start();



/*scrollLeft obtiene o establece el número de píxeles que desplaza el contenido de un elemento hacia la izquierda*/
/*scrollWidth retorna bien la anchura en pixels del contenido de un elemento o bien la anchura del elemento en si, la que sea mayor de ambas*/
/*clientWidth/Height :esta propiedad proporciona el tamaño del área dentro de los bordes del elemento*/