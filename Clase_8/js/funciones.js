let numeros = [23,45,67,32,12,100];

function Ordenar(a,b)
{
  return a-b;
}

//Sort con mi function
console.log(numeros.sort(Ordenar));

function OrdenarPersonaXNombre(a,b)
{
  if(a.first_name < b.first_name)
  {
    return -1;
  }
  else
  {
    return 1;
  }
}

function OrdenarPersonaXNombreYGenero(a,b)
{
  let swap = 1
  if((a.gender == b.gender)&&(a.first_name.localeCompare(b.first_name) == -1))
  {
    swap = -1;
  }
  else if (a.gender > b.gender)
  {
    swap = -1;
  }
  return swap;
}

// Ordeno el array de Persona por nombre
console.log(personas.sort(OrdenarPersonaXNombre));

// Ordeno el array de Persona por nombre y genero
console.log(personas.sort(OrdenarPersonaXNombreYGenero));

numeros = [2,3,9,12,98,40]
nombres = ["Juan","Pepe","Pablo","Leo"]

console.log(numeros);

//numeros.forEach(Funcion)

// En el foreach a es el valor actual, b es el indice, c es todo el array
/*
function Funcion (a,b)
{
  numeros[b] = a * 2;
}
*/
console.log(numeros);

function Funcion (a)
{
  return a * a;
}

//var cuadrados = numeros.map(Funcion);
var cuadrados = numeros.map(a=>a*a); //es lo mismo que llamar a la funcion (renglon de arriba) ---- MAGIA
console.log(cuadrados);

var personas_nomGen = personas.map(function(a){
  return {nombre: a.first_name, genero: a.gender}
});

console.log(personas_nomGen);

//Si al menos un valor esta en el array devuelve true
let buscar = numeros.some(function(a){
  return a > 50;
});

console.log(buscar);

//Valida si todos los valores del array cumplen con la condicion, en este caso si todos son pares
let buscarTodos = numeros.every(function(a){
  return a%2 == 0;
});

console.log(buscarTodos);

//Filtra un array
let filtroPares = numeros.filter(function(a){
  return a%2 == 0;
})

console.log(filtroPares);

/*
let filtroVarones = personas.filter(function(a){
  return a.gender == "Male";
})
*/
// Mismo que el anterior pero resumido
filtroVarones = personas.filter(a=> a.gender == "Male");

console.log(filtroVarones);
let soloNombre = filtroVarones.map(function(a){
  return {nombre: a.first_name, apellido: a.last_name};
})
console.log(soloNombre);


//Filtro y mapeo todo junto
let filtroMujeres = personas.filter(a=>a.gender=="Female").map(a=>a.first_name);
console.log(filtroMujeres);
