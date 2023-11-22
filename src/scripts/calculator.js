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
      // Aviso: El uso de 'eval()' generalmente no es recomendado debido a problemas de seguridad y eficiencia.
      // Sin embargo, se utiliza aquí únicamente con fines didácticos y de ejemplo.
      calculatorScreen.value = eval(screenValue);
    } else {
      // Agrega el valor del botón a la pantalla de la calculadora.
      calculatorScreen.value += keyValue;
    }
  }
});
