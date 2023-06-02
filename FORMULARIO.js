/*let primero = document.querySelector("form input");
primero.focus(); // HACE FOCO EN EL PRIMER ELEMENTO (input: nombre)*/
let reg_correo = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;

function validar() {

 let nombre = document.querySelector("#nombre");
 nombre.classList.remove("error");

 let mensaje = document.querySelector("#mensaje");
 mensaje.classList.remove("error");

 let email = document.querySelector("#email");
 email.classList.remove("error");

 let lta_errores = document.querySelector("#errores");
 lta_errores.innerHTML = "";
 lta_errores.style.display = "none";

 let lta_mensajes = document.querySelector("#mensajes");
 let hubo_error = false;

 if(nombre.value.trim() == "") {
  nombre.classList.add("error");
  let p = document.createElement("p");
  p.innerHTML = "Falta el nombre";
  lta_errores.appendChild(p);
  hubo_error = true;
 }

 if(mensaje.value.trim() == "") {
  mensaje.classList.add("error");
  let p = document.createElement("p");
  p.innerHTML = "Falta el mensaje";
  lta_errores.appendChild(p);
  hubo_error = true;
 } else if(mensaje.value.length > 200) {
  mensaje.classList.add("error");
  let p = document.createElement("p");
  p.innerHTML = "Longitud máxima del mensaje: 200";
  lta_errores.appendChild(p);
  hubo_error = true;
 }

 if(email.value.trim() != "" && !reg_correo.test(email.value)) {
 //if(!/^([a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+)?$/.test(f_email.value)){
  email.classList.add("error");
  let p = document.createElement("p");
  p.innerHTML = "Email inválido";
  lta_errores.appendChild(p);
  hubo_error = true;
 }
 if(hubo_error) {//
  lta_errores.style.display = "initial";
  return false;
 } else {
  let p = document.createElement("p");
  if(email.value != "") {
   p.innerHTML =  
    nombre.value + " dice " + 
    mensaje.value + ". Contacto: " +
    email.value + ".";
  } else {
   p.innerHTML =  
    nombre.value + " dice " + 
    mensaje.value + ".";
  }
  lta_mensajes.appendChild(p);
  document.forms["f_contacto"].reset();
  let primero = document.querySelector("form input");
  primero.focus();
 }
 return false;

 }

 function pregunta(){
    if (confirm('¿Estas seguro de enviar este formulario?')){
       document.submit();
    }
}

