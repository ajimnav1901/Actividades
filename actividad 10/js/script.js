function array() {
    let alumnos = ["Juan", "Pedro", "Maria"];
   let notas = [];
       notas [0]= prompt("nota de " + alumnos[0]);
       notas [1]= prompt("nota de " + alumnos[1]);
       notas [2]= prompt("nota de " + alumnos[2]); 
   document.getElementById("mensaje").innerHTML = "las notas son:<br>" + alumnos[0] + " " + notas[0] +  "<br>" + alumnos[1] + " "+  notas[1] +  "<br>" + alumnos[2] + " "+  notas[2] 
    }