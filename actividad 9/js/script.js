function factorial() { 
    let numero, iteracion, resultado;
    numero=parseInt(document.getElementById("numero").value, 10);
    resultado= 1;
    iteracion= 1;
    while(iteracion < numero)
    {
        iteracion = iteracion + 1
        resultado = resultado * iteracion;
   }
    document.getElementById ("mensaje").innerHTML="la iteracion de " + numero + " es " + resultado ;
    
    }