let listaPersona = [];

function Persona(nombre,apellido,genero,maneja,nada,bicicleta,pais)
{
  //Creo las caracteristicas y eventos
}

window.addEventListener('load',function(){
  //Traigo el formulario por ID - Opcion 1
  //var frm = this.document.getElementById("frmPersona");

  //Traigo todos los formularios del documento - Opcion 2
  //var frm = this.document.getElementsByTagName('form')[0]

  //traigo el formulario que quiero - opcion 3
  var frm = this.document.forms[0];

  frm.addEventListener('submit',ManejarSubmit);
});

function ManejarSubmit(e)
{
  e.preventDefault();
  console.log("Capture el evento de submit");
  //Crear Persona


  //Lo agrego a la lista
}


