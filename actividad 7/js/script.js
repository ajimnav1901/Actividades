function comprobar() { let nota;
    nota=parseInt(document.getElementById("nota").value, 10);
    if (nota >= 7 && nota < 9) 
        document.getElementById ("mensaje").innerHTML="Notable";
    if (nota >= 5 && nota < 6)
        document.getElementById ("mensaje").innerHTML="suficiente";
    if (nota >= 6 && nota < 7)
        document.getElementById ("mensaje").innerHTML="Bien";
    if (nota >=0 && nota < 5)
        document.getElementById ("mensaje").innerHTML="Suspenso";
    if (nota >= 9 && nota <= 10)
        document.getElementById ("mensaje").innerHTML="Sobresaliente";
    if (nota < 0)
         document.getElementById ("mensaje").innerHTML="No es valida";
    if (nota > 10 )
         document.getElementById ("mensaje").innerHTML="No es valida";
        
}
    
