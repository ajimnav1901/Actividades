function calcular(){
    let A,B;
    A = parseInt(document.getElementById("A").value, 10);
    B = parseInt(document.getElementById("B").value, 10);
    c= A + B;
    d= A - B;
    e= A * B;
    f= A / B;
    g= A % B;
    document.getElementById ("mensaje").innerHTML= "El primer numero es: " + A + "\nEl segundo numero es:" + B + "\nLa suma es: " + c + "\nLa resta es: " + d + "\nEl producto es: " + e + "\nLa division es: " + f + "\nEl resto es: " + g  ;
}