const form = document.getElementById("cadastroForm");
const table = document.getElementById("servicosTable");
const tbody = document.getElementById("servicosBody");
const totalElement = document.getElementById("total");
const addButton = document.querySelector(".add-button");
let total = 0;

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const quantidade = parseInt(document.getElementById("quantidade").value);
  const servico = document.getElementById("servico").value;
  const descricao = document.getElementById("descricao").value;
  const valor = parseFloat(document.getElementById("valor").value);
  const totalItem = quantidade * valor;

  const row = tbody.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  const cell3 = row.insertCell(2);
  const cell4 = row.insertCell(3);
  const cell5 = row.insertCell(4);
  const cell6 = row.insertCell(5);

  cell1.textContent = quantidade;
  cell2.textContent = servico;
  cell3.textContent = descricao;
  cell4.textContent = valor.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
  });
  cell5.textContent = totalItem.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
  });
  cell6.innerHTML =
    '<button class="edit-button" onclick="editRow(this)">E</button>' +
    '<button class="remove-button" onclick="removeRow(this)">X</button>';

  total += totalItem;
  totalElement.textContent = total.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
  });

  form.reset();
});

function removeRow(button) {
  const row = button.parentNode.parentNode;
  const totalItem = parseFloat(row.cells[4].textContent.replace(",", "."));

  total -= totalItem;
  totalElement.textContent = total.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
  });

  row.remove();
}

function editRow(button) {
  const row = button.parentNode.parentNode;
  const quantidade = row.cells[0].textContent;
  const servico = row.cells[1].textContent;
  const descricao = row.cells[2].textContent;
  const valor = parseFloat(row.cells[3].textContent.replace(",", "."));

  document.getElementById("quantidade").value = quantidade;
  document.getElementById("servico").value = servico;
  document.getElementById("descricao").value = descricao;
  document.getElementById("valor").value = valor;

  row.remove();
}

addButton.addEventListener("click", function () {
  addButton.classList.add("add-button-clicked");
  setTimeout(function () {
    addButton.classList.remove("add-button-clicked");
  }, 200);
});
