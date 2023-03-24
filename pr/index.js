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
  formataValor();
});

frmm.cabine1.addEventListener("click", () => {
  if (frmm.cabine1.checked) {
    valor1 = valor1 + 9700;
  } else {
    valor1 = valor1 - 9700;
  }
  formataValor();
});

function formataValor() {
  preco1.innerText = valor1.toLocaleString("pt-br", {
    minimumFractionDigits: 2,
  });
}

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
