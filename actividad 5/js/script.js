function calcular(){
    let A,B;
    A = parseInt(document.getElementById("A").value, 10);
    B = parseInt(document.getElementById("B").value, 10);
    c= A + B;
    d= A - B;
    e= A * B;
    f= A / B;
    g= A % B
    document.getElementById ("mensaje").innerHTML= "El primer numero es: " + A + "<br>El segundo numero es:" + B + "<br>La suma es: " + c + "<br>La resta es: " + d + "<br>El producto es: " + e + "<br>La division es: " + f + "<br>El resto es: " + g  ;
}
