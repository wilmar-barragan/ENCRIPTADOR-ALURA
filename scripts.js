function encriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let observador = document.getElementById("observador");
  let mensaje = document.getElementById("mensaje");

  // Expresión regular para validar solo letras minúsculas y espacios
  let regex = /^[a-z\s]+$/;

  // Validar que el texto solo contenga letras minúsculas y no tenga números ni acentos
  if (!regex.test(texto)) {
      // Si la validación falla, mostrar el mensaje de advertencia en el textarea
      mensaje.value = "Solo se permiten letras minúsculas sin acentos,no números.";
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      observador.src = "./assets/OIG4.png";
      return;  // Salir de la función para no continuar con el cifrado
  }

  // Proceso de cifrado
  let textoCifrado = texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

  // Si el texto es válido y no está vacío, mostrar el texto cifrado
  if (texto.length != 0) {
      mensaje.value = textoCifrado;
      tituloMensaje.textContent = "Texto encriptado con éxito";
      observador.src = "./assets/encriptado.png";
  } else {
      mensaje.value = "Ningún mensaje fue encontrado.";
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      observador.src = ".assets/observador.png";
  }
}


  function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
        let observador = document.getElementById("observador");
  
    let textoCifrado = texto
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
    
      if (texto.length != 0) {
        document.getElementById("mensaje").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        observador.src = "./assets/desencriptar.png";
      } else {
        observador.src = ".assets/observador.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      }
  }
  function limpiar() {
    document.getElementById("texto").value = '';
    document.getElementById("mensaje").value = '';
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let observador = document.getElementById("observador");
    observador.src = "./assets/observador.png";
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
  }
  
  function copiar() {
    var text = document.getElementById("mensaje").value;
    copyToClipboard(text);
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text)
      .then(() => {          
      })
      .catch(err => {
          });
     }


