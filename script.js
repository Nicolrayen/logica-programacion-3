function calculadoraFactorial() {
    // Obtener el valor del input
    const inputNumber = document.getElementById("inputNumber").value;

    // Verificar si el valor es un número
    if (isNaN(inputNumber)) {
        document.getElementById("error").textContent = "Por favor ingrese un número válido.";
        document.getElementById("result").textContent = "";
    } else {
        const number = parseFloat(inputNumber);
        const factorial = calculate(number);

        document.getElementById("error").textContent = "";

        // Mostrar el resultado en el DOM
        document.getElementById("result").textContent = `Factorial de ${number} es ${factorial}`;
    }
}

function calculate(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * calculate(n - 1);
    }
}
