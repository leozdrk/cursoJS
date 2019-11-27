window.addEventListener('load',Inicializar);

function Inicializar()
{
  let btn = document.getElementById('btnCalcular');
  btn.addEventListener('click',CalcularPrecio);
}

function CalcularPrecio()
{
  let cant = parseInt(document.getElementById('Cantidad').value);
  let marca = document.getElementById('Marca').value;
  console.log("cantidad: "+cant+"; Marca: " + marca);
  let precio = 35;
  let total = CalcularPago(cant, marca,precio);
  document.getElementById('precioDescuento').value = total;

  CalcularIIBB(total);
}

function CalcularIIBB(total)
{
  if(total > 120)
  {
    totalIIBB = total + total*0.1;
    console.log("Usted debera paragar de IIBB un 10% adicional. Monto total: " + totalIIBB);
  }
  else
  {
    console.log("Usted no debera paragar IIBB");
  }
}

function CalcularPago(cant,marca,precio)
{
  let total = 0;
  if( cant >= 6)
  {
    total = cant*precio*0.5;
  }
  else
  {
    total = cant*precio;
    switch (cant) {
      case 5:
        if(marca == "ArgentinaLuz")
        {
          total -= total*0.4;
        }
        else
        {
          total -= total*0.3;
        }
        break;
      case 4:
        if(marca == "ArgentinaLuz" || marca == "FelipeLamparas")
        {
          total -= total*0.25;
        }
        else
        {
          total -= total*0.2;
        }
        break;
      case 3:
        if(marca == "ArgentinaLuz")
        {
          total -= total*0.15;
        }
        else if(marca == "FelipeLamparas")
        {
          total -= total*0.1;
        }
        else
        {
          total -= total*0.05;
        }
        break;
      default:
        console.log("La cantidad ingresada no es correcta");
        total = 0;
        break;
    }
  }
  console.log(total);
  return total;
}

//lampara 35
// 6 o + 50%
// 5 Arg Luz 40% - Otra marca 30%
// 4 Arg Luz o Fel Lam 25% - Otra Marca 20%
// 3 Arg Luz 15 % - Felipe 10 % - Otra Marca 5%

// Si el total es mayor a 120 Pagar 10 % II BB
