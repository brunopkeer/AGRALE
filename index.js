// cria referência aos elementos da página que serão manipulados
// pelo programa .js
const preco = document.querySelector("#preco");
const frm = document.querySelector(".form0");
let valor = 277000;

// adiciona um "ouvinte" de evento para o click no radiobutton do ka

frm.alarme.addEventListener("click", () => {
  if (frm.alarme.checked) {
    valor = valor + 3200;
  } else {
    valor = valor - 3200;
  }
  formataValor();
});

frm.cabine.addEventListener("click", () => {
  if (frm.cabine.checked) {
    valor = valor + 9700;
  } else {
    valor = valor - 9700;
  }
  formataValor();
});

function formataValor() {
  preco.innerText = valor.toLocaleString("pt-br", {
    minimumFractionDigits: 2,
  });
}

// cria referência aos elementos da página que serão manipulados
// pelo programa .js
const preco1 = document.querySelector("#preco1");
const frmm = document.querySelector(".form1");

let valor1 = 247000;

// adiciona um "ouvinte" de evento para o click no radiobutton do ka

frmm.alarme1.addEventListener("click", () => {
  if (frmm.alarme1.checked) {
    valor1 = valor1 + 3200;
  } else {
    valor1 = valor1 - 3200;
  }
  formataValor2();
});

frmm.cabine1.addEventListener("click", () => {
  if (frmm.cabine1.checked) {
    valor1 = valor1 + 9700;
  } else {
    valor1 = valor1 - 9700;
  }
  formataValor2();
});

function formataValor2() {
  preco1.innerText = valor1.toLocaleString("pt-br", {
    minimumFractionDigits: 2,
  });
}

// SCRIPT ALTERAR FOTO MODELOS DO TRATOR PARTE PREÇOS INFERIOR

const preco3 = document.querySelector("#preco3");
const frm3 = document.querySelector(".form3");
const foto = document.querySelector("#foto");

let valor3 = 177000;

frm3.agrale5105.addEventListener("click", () => {
  // altera esse elemento
  valor3 = 199000;
  formataValor3();
  foto.src = "5105.png";
  frm3.alarme.checked = false;
  frm3.vidros.checked = false;
});

frm3.agrale575.addEventListener("click", () => {
  // altera esse elemento
  valor3 = 177000;
  formataValor3();
  foto.src = "575.png";
  frm3.alarme.checked = false;
  frm3.vidros.checked = false;
});

frm3.agrale4230.addEventListener("click", () => {
  // altera esse elemento
  valor3 = 156000;
  formataValor3();
  foto.src = "4230.png";
  frm3.alarme.checked = false;
  frm3.vidros.checked = false;
});

frm3.alarme3.addEventListener("click", () => {
  if (frm3.alarme3.checked) {
    valor3 = valor3 + 3200;
  } else {
    valor3 = valor3 - 3200;
  }
  formataValor3();
});

frm3.cabine3.addEventListener("click", () => {
  if (frm3.cabine3.checked) {
    valor3 = valor3 + 9700;
  } else {
    valor3 = valor3 - 9700;
  }
  formataValor3();
});

function formataValor3() {
  preco3.innerText = valor3.toLocaleString("pt-br", {
    minimumFractionDigits: 2,
  });
}

function mailFunction() {
  var mail = prompt("Digite sua E-mail: ");
  var nome = prompt("Digite seu Nome: ");
  var telefone = Number(prompt("Digite seu número de telefone: "));
  {
    alert(`Obrigado ${nome}, em breve entraremos em contato.`);
  }
}
function down() {
  document.getElementById("status").innerHTML = "DOWN";
}

function up() {
  document.getElementById("status").innerHTML = "UP";
}
