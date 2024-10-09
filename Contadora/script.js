var count = 0;

// Função para incrementar o contador
document.querySelector("#increase").addEventListener("click", () => {
  changeCount(1);
});

// Função para decrementar o contador
document.querySelector("#decrease").addEventListener("click", () => {
  changeCount(-1);
});

// Função que atualiza o valor do contador na tela
changeCount = (number) => {
  count += number;
  document.querySelector("#count").textContent = count;
}