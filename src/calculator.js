/**
 * Calcula el resultado de una expresión matemática básica.
 *
 * @param {string} expression - La expresión matemática a calcular.
 * @returns {number} - El resultado de la expresión.
 */
const calculate = (expression) => {
  const operators = expression.match(/[+\-*/]/g);
  const operands = expression.split(/[+\-*/]/g).map(Number);

  if (operators && operands.length === operators.length + 1) {
    let result = operands[0];

    for (let i = 0; i < operators.length; i++) {
      switch (operators[i]) {
        case "+":
          result += operands[i + 1];
          break;
        case "-":
          result -= operands[i + 1];
          break;
        case "*":
          result *= operands[i + 1];
          break;
        case "/":
          result /= operands[i + 1];
          break;
      }
    }

    return result;
  }

  return null; // Retorna null si la expresión no es válida.
};

const keys = document.querySelector(".calculator-keys");

/**
 * Maneja el evento de clic en los botones de la calculadora.
 * Al hacer clic en un botón, esta función determina la acción a realizar
 * basada en el valor del botón. Puede ser una operación de cálculo,
 * borrar la pantalla, o agregar un número o operador a la pantalla actual.
 *
 * @param {Event} event - El evento de clic generado por el usuario.
 */
keys.addEventListener("click", (event) => {
  const key = event.target;
  if (!key.matches("button")) return;

  const calculatorScreen = document.getElementById("calc-screen");
  if (calculatorScreen) {
    const keyValue = key.value;
    const screenValue = calculatorScreen.value;

    // Si se presiona "all-clear", limpia la pantalla.
    if (keyValue === "all-clear") {
      calculatorScreen.value = "";
    } else if (keyValue === "=") {
      // Si se presiona "=", evalúa la expresión y muestra el resultado.
      calculatorScreen.value = calculate(screenValue);
    } else {
      // Agrega el valor del botón a la pantalla de la calculadora.
      calculatorScreen.value += keyValue;
    }
  }
});
