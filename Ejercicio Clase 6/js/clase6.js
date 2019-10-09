window.addEventListener("load",CargarVariables);

let miDiv;

function CargarVariables()
{
  miDiv = document.getElementById("miDiv");
  console.log(miDiv);
  //ChildNode trae todos los nodos
  //let hijos = miDiv.childNodes;

  //Children solo trae los elementos
  let hijos = miDiv.children;

  console.log(hijos);
  hijos[1].style.backgroundColor = "red";

  let p1 = document.getElementById("p1");

  // Trae al padre de un nodo (En este caso al DIV)
  let padre = p1.parentNode;

  let titulo = document.getElementById("titulo");
  titulo = document.getElementsByTagName("h1")[0];

  let hermano = titulo.nextElementSibling;

  let hermanoDelHermano = titulo
                          .nextElementSibling
                          .nextElementSibling;
  console.log(hermanoDelHermano);

  let body = document.body;
  let ultimoHijo = body.lastElementChild; //Trae al ultimo hijo del body
}

//Ctrl + k + c Cometa lo pintado, para descomentar ctrl + k + u
