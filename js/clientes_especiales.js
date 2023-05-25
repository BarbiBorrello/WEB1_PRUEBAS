
let imagenes =[

{
    "url": "img/Cliente1.png",
    "nombre" : "CLIENTE QUISQUILLOSO"
},

{
    "url": "img/Cliente2.png",
    "nombre" : "CLIENTE QUISQUILLOSO"
},

{
    "url": "img/Cliente3.png",
    "nombre" : "CLIENTE QUISQUILLOSO"
},

{
    "url": "img/Cliente4.png",
    "nombre" : "CLIENTE QUISQUILLOSO"
},

{
    "url": "img/Cliente5.png",
    "nombre" : "CLIENTE QUISQUILLOSO"
},

{
    "url": "img/Cliente6.png",
    "nombre" : "CLIENTE QUISQUILLOSO"
},

{
    "url": "img/Cliente7.png",
    "nombre" : "CLIENTE QUISQUILLOSO"
},

{
    "url": "img/Cliente8.png",
    "nombre" : "CLIENTE QUISQUILLOSO"
},


{
    "url": "img/Cliente9.png",
    "nombre" : "CLIENTE QUISQUILLOSO"
},

{
    "url": "img/Cliente10.png",
    "nombre" : "CLIENTE QUISQUILLOSO"
},

{
    "url": "img/Cliente11.png",
    "nombre" : "CLIENTE QUISQUILLOSO"
}

]


/* VARIABLES*/
let atras = document.getElementById ('atras');
let adelante = document.getElementById ('adelante');
let imagen = document.getElementById ('img');
let puntos = document.getElementById ('puntos');
let texto = document.getElementById ('texto');
let actual = 0;

atras.addEventListener ('click' , function (){

    actual -=1

    if(actual == -1){
        actual= imagenes.length -1;
    }

    imagen.innerHTML = `<img class="img" src="${imagen[actual].url}" alt="Cliente1">`;
    texto.innerHTML =  `
    <h3>${imagenes[actual].nombre} </h3>
    `

})





