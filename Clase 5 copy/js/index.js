let listaPersona = [];



window.addEventListener('load',function(){
  //Traigo el formulario por ID - Opcion 1
  //var frm = this.document.getElementById("frmPersona");

  //Traigo todos los formularios del documento - Opcion 2
  //var frm = this.document.getElementsByTagName('form')[0]

  //traigo el formulario que quiero - opcion 3
  var frm = this.document.forms[0];

  frm.addEventListener('submit',ManejarSubmit);
});

function Persona(nombre,apellido,edad,genero,maneja,nada,bicicleta,pais)
{
    //Creo las caracteristicas y eventos
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.genero = genero;
    this.maneja = maneja;
    this.nada = nada;
    this.bicicleta = bicicleta;
    this.pais = pais;

    //Metodos
    this.Presentarse = Presentarse;
    this.Hobbies = Hobbies;
}

function Presentarse()
{
    console.log("Me presento, mi nombre completo es " + this.nombre + " " + this.apellido + ". Mi edad es " + this.edad + " y mi nacionalidad es " + this.pais);
}

function Hobbies()
{
  var texto = "Mis Hobbies son: ";
  var actividades = 0;
  if(this.maneja)
  {
    texto += "Manejar automoviles, ";    
  }
  if(this.nada)
  {
    texto += "Nadar en la pileta, ";    
  }
  if(this.bicicleta)
  {
    texto += "Dar paseos en bicicleta.";    
  }
  console.log(texto);
}

function ManejarSubmit(e)
{
  e.preventDefault();
  console.log("Capture el evento de submit");
  //Capturo los datos del HTML
  var nombre = document.getElementById('txtNombre').value;
  var apellido = document.getElementById('txtApellido').value;
  var edad = parseInt(document.getElementById('txtEdad').value);
  
  var genero = document.getElementById('rdoMasculino').checked;
  if(genero)
    genero = "Masculino";
  else
    genero = "Femenino";

  var maneja = document.getElementById('chkManeja').checked;
  var nada = document.getElementById('chkNadar').checked;
  var bicicleta = document.getElementById('chkBici').checked;
  
  var pais = document.getElementById('selPais').value;
  
  //Crear Persona
  var nuevaPersona = new Persona(nombre,apellido,edad,genero,maneja,nada,bicicleta,pais);
  listaPersona.push(nuevaPersona);

  //Lo agrego a la lista
}


