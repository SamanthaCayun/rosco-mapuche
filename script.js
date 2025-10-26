const preguntas = [
  { letra: "A", palabra: "Antü", pista: "En mapuche significa sol. Representa el color amarillo de la bandera." },
  { letra: "B", palabra: "Bandera", pista: "Símbolo de identidad con colores que representan el cielo, la tierra, la fuerza y la sabiduría." },
  { letra: "C", palabra: "Cayun", pista: "Apellido mapuche que puede significar fuerza o justicia." },
  { letra: "D", palabra: "Diversidad", pista: "Valor que reconoce las distintas culturas que forman parte de nuestro país." },
  { letra: "E", palabra: "Ley 26.160", pista: "Norma que protege los territorios indígenas frente a desalojos y garantiza sus derechos sobre la tierra." },
  { letra: "F", palabra: "Flecha", pista: "En la bandera mapuche-tehuelche representa la lucha y la defensa de su cultura." },
  { letra: "G", palabra: "Guanaco", pista: "Animal importante para la vida cotidiana y el abrigo del pueblo mapuche." },
  { letra: "H", palabra: "Historia", pista: "Relato del pasado que nos ayuda a entender quiénes somos." },
  { letra: "I", palabra: "Identidad", pista: "Lo que nos define como personas o pueblos; representada en los símbolos y colores de su bandera." },
  { letra: "J", palabra: "Rojo", pista: "Color de la bandera que simboliza la identidad, la fuerza y la sangre derramada en defensa de su pueblo." },
  { letra: "L", palabra: "Lonko", pista: "Autoridad o líder de una comunidad mapuche, guía espiritual y social." },
  { letra: "M", palabra: "Mapu", pista: "Significa tierra en mapudungun, vinculada al color verde de la bandera." },
  { letra: "N", palabra: "Ñuke", pista: "Palabra mapuche que significa madre, símbolo de protección y vida." },
  { letra: "O", palabra: "Orgullo", pista: "Sentimiento de valorar y respetar las raíces y la herencia cultural." },
  { letra: "P", palabra: "Pewma", pista: "Sueño o visión espiritual que guía a las personas; representado con el color azul, símbolo del cielo." },
  { letra: "Q", palabra: "Quimün", pista: "Sabiduría o conocimiento ancestral; su color es el negro, símbolo del saber profundo." },
  { letra: "R", palabra: "Ruca", pista: "Vivienda tradicional de madera y barro donde habita la familia mapuche." },
  { letra: "S", palabra: "Solidaridad", pista: "Valor fundamental de ayuda y respeto mutuo dentro de la comunidad." },
  { letra: "T", palabra: "Trutruka", pista: "Instrumento musical mapuche hecho de caña, usado en ceremonias y celebraciones." },
  { letra: "U", palabra: "Unidad", pista: "Representa la unión del pueblo para defender sus derechos y tradiciones." },
  { letra: "V", palabra: "Verde", pista: "Color que representa la naturaleza, la medicina y la conexión con la tierra." },
  { letra: "W", palabra: "Wenufoye", pista: "Significa 'Canelo del Cielo'; es la bandera mapuche creada en 1992 como símbolo de identidad y resistencia." },
  { letra: "Z", palabra: "Zomo", pista: "Mujer, en lengua mapuche; símbolo de fortaleza, sabiduría y continuidad cultural." }
];

const rosco = document.getElementById("rosco");
const respuestaInput = document.getElementById("respuesta");
const checkBtn = document.getElementById("checkBtn");
const pasapalabraBtn = document.getElementById("pasapalabraBtn");
const resultadoDiv = document.getElementById("resultado");

let indexActual = 0;

// Función para dibujar el rosco circular
function dibujarRosco() {
  const radio = 200;
  const centroX = 250;
  const centroY = 250;
  const total = preguntas.length;
  
  preguntas.forEach((pregunta, i) => {
    const angle = (i / total) * 2 * Math.PI - Math.PI/2;
    const x = centroX + radio * Math.cos(angle) - 25;
    const y = centroY + radio * Math.sin(angle) - 25;
    const div = document.createElement("div");
    div.classList.add("letter");
    div.textContent = pregunta.letra;
    div.style.left = `${x}px`;
    div.style.top = `${y}px`;
    rosco.appendChild(div);
    pregunta.div = div; // guardar referencia
  });
}

dibujarRosco();

function actualizarColor() {
  preguntas.forEach((p, i) => {
    if (i < indexActual) return;
    p.div.style.backgroundColor = "#87ceeb"; // color por defecto
  });
}

function siguiente() {
  indexActual++;
  if (indexActual >= preguntas.length) indexActual = 0;
  actualizarColor();
}

function comprobar() {
  const respuesta = respuestaInput.value.trim().toLowerCase();
  const palabraCorrecta = preguntas[indexActual].palabra.toLowerCase();
  
  if(respuesta === palabraCorrecta) {
    preguntas[indexActual].div.style.backgroundColor = "green";
    resultadoDiv.textContent = "¡Correcto!";
  } else if(respuesta === "pasapalabra" || respuesta === "") {
    resultadoDiv.textContent = "Pasapalabra";
  } else {
    preguntas[indexActual].div.style.backgroundColor = "red";
    resultadoDiv.textContent = "Incorrecto. La respuesta correcta era: " + preguntas[indexActual].palabra;
  }

  respuestaInput.value = "";
  siguiente();
}

checkBtn.addEventListener("click", comprobar);
pasapalabraBtn.addEventListener("click", siguiente);
