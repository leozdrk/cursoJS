function foo()
{
  var a = 20;

  console.log(a);
}

//foo();

//Definir objetos
var persona = {
  nombre: "Leonardo",
  apellido: "Gallo",
  direccion: {
    calle: "Basualdo",
    altura: "552",
    nacionalidad: "Argentina"
  },
  edad: 35,
  NombreCompleto(){
    console.log(persona.nombre + " " + persona.apellido);
    //console.log(persona['nombre'] + persona['apellido'])
  }
};

for(prop in persona){
  console.log(prop + ": " + persona['prop']);
}

// Constructor de un objeto
function Alumno(nombre,apellido,edad)
{
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
  /*this.saludar = function(){
    console.log("Hola! que se cuenta?");
  }
  */
  //Puedo setear un metodo con una funcion externa
  //this.saludar = Saludar;
}

Alumno.prototype.saludar= Saludar;

function Saludar()
{
  console.log("Hola! que se cuenta?");
}

var x = new Alumno("LeoZ","Crow",35);
var y = new Alumno("Pepito","Loco",35);

//Solo a x le agrego un atributo
x.genero = "Masculino";

//Para agregar una propiedad a todos dinamicamente
Alumno.prototype.genero = null;

console.log(x);
console.log(y);
console.log("----------------------------------");

function Avenger(nombre, nombreReal, poder)
{
  this.nombre = nombre;
  this.nombreReal = nombreReal;
  this.salud = 100;
  this.poder = poder;

  this.Status = function(){
    console.log(this.nombre + " Salud: " + this.salud + " Poder: " + this.poder);
  }
  this.Curar = function(amigo){
    if(this.poder > 40)
    {
      amigo.salud += 20;
      this.salud -=40;
    }
  }
  this.Atacar = function(malo){
    malo.salud -=50;
  }
}

var ironMan = new Avenger("IronMan","Tony Stark",1500);
var spiderMan = new Avenger("SpiderMan","Parker",1200);

var thanos = new Avenger("Thanos","Pepito", 2500);
