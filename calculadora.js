function calcularPromedio() {
    const resultado = document.getElementById("resultado");

    // Pedimos las 3 notas al usuario
    const nota1 = Number(prompt("Ingresa la primera nota:"));
    const nota2 = Number(prompt("Ingresa la segunda nota:"));
    const nota3 = Number(prompt("Ingresa la tercera nota:"));

    // Validamos que las notas sean números válidos
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        resultado.textContent = "Por favor, ingresa solo números válidos.";
        resultado.style.color = "orange";
        return;
    }

    // Calculamos el promedio
    const promedio = (nota1 + nota2 + nota3) / 3;

    // Mostramos el resultado según el promedio
    if (promedio >= 6) {
        resultado.textContent = `Aprobado con promedio de ${promedio.toFixed(2)}`;
        resultado.style.color = "green";
    } else {
        resultado.textContent = `Desaprobado con promedio de ${promedio.toFixed(2)}`;
        resultado.style.color = "red";
    }
}