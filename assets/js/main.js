function validarFono(telefono)

if (telefono.tel.value.length < 9) {
alert("Escribe un mínimo de 9 digitos como teléfono");
Forma.tel.focus();
return (false);
}

valor = document.getElementById("boton-rosado").value;
if( !(/^\d{9}$/.test(valor)) ) {
  return false;
}