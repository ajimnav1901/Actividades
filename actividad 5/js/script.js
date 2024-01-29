function calcular(){
    let A,B;
    A = parseInt(document.getElementById("A").value, 10);
    B = parseInt(document.getElementById("B").value, 10);
    c= A + B;
    d= A - B;
    e= A * B;
    f= A / B;
    g= A % B;
    document.getElementById ("mensaje").innerHTML= "El primer numero es: " + A + <br>"El segundo numero es:" + B + <br> "\nLa suma es: " + c + <br> "\nLa resta es: " + d + <br> "\nEl producto es: " + e + <br> "\nLa division es: " + f + <br> "\nEl resto es: " + g  ;
}
