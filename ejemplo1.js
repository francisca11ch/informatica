ejemplo1.js
let btn = document.getElementById("boton");
let parrafo = document.getElementById("texto");
btn.addEventListener("click", function() {
    parrafo.innerHTML="Macarena";
});

ejemplo1.html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=>, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Ejercicio1: Modificar texto en el DOM</h1>
    <p id="texto">Maca</p>
    <button id="boton">Haz click</button>
    <script src="./Ejercicio1.js"></script>
</body>
</html>
