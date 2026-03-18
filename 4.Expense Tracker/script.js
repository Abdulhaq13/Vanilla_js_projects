const balance = document.querySelector("#balance");
const incomeAmount = document.querySelector(".income-amount");
const expenseAmount = document.querySelector(".expense-amount");
const transactionList = document.querySelector("#transaction-list");
const transactionForm = document.querySelector("#transaction-form");
const descriptionInput = document.querySelector("#description");
const amountInput = document.querySelector("#amount");
let transactionData = JSON.parse(localStorage.getItem("transactionData")) || [];

function formatCurrency(number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number);
}

function renderTransactionList() {
  return (transactionList.innerHTML = `${transactionData
    .slice()
    .reverse()
    .map((obj) => {
      const transactionClass =
        obj.amount < 0 ? "transaction expenses" : "transaction income";
      return `<li class="${transactionClass}" data-id="${obj.id}">
              <span>${obj.description}</span>
              <span>${formatCurrency(obj.amount)}</span>
              <button class="delete-btn"> ❌ </button>
              </li>`;
    })
    .join("")}
         `);
}

function updateSummary() {
  const totalIncome = transactionData
    .filter((obj) => obj.amount > 0)
    .reduce((acc, curr) => acc + curr.amount, 0);
  const totalExpense = transactionData
    .filter((obj) => obj.amount < 0)
    .reduce((acc, curr) => acc + curr.amount, 0);
  const totalBalance = transactionData.reduce(
    (acc, curr) => acc + curr.amount,
    0,
  );
  balance.textContent = formatCurrency(totalBalance);
  incomeAmount.textContent = formatCurrency(totalIncome);
  expenseAmount.textContent = formatCurrency(-totalExpense);
}

function handleSubmit(e) {
  e.preventDefault();
  const descriptionValue = descriptionInput.value.trim();
  const amountValue = parseFloat(amountInput.value);

  transactionData.push({
    id: Date.now(),
    description: descriptionValue,
    amount: amountValue,
  });
  localStorage.setItem("transactionData", JSON.stringify(transactionData));
  updateSummary();
  renderTransactionList();
  descriptionInput.value = "";
  amountInput.value = "";
}
transactionForm.addEventListener("submit", handleSubmit);

transactionList.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-btn")) {
    let selectedId = Number(e.target.parentElement.dataset.id);
    transactionData = transactionData.filter((obj) => obj.id !== selectedId);
    localStorage.setItem("transactionData", JSON.stringify(transactionData));
    updateSummary();
    renderTransactionList();
  }
});

renderTransactionList();
updateSummary();
