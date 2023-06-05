let id = '';
let contador = 0;
user.movement = []
const showTransactions = () => {
  document.getElementById('amountDiv').style.display = 'none'
  document.getElementById('transactionDiv').style.display = 'block'
}
const transactionOption = (option) => {
  document.getElementById('amountDiv').style.display = 'block'
  document.getElementById('transactionDiv').style.display = 'none'
  id = option;
};

const sendTransaction = () => {
  const date = new Date();
  const today = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()

  amount = parseInt(document.getElementById('money').value)

  if (amount > 0) {
    if (id == 'deposit') {
      user.transaction.date = today;
      user.transaction.description = 'Depósito en cuenta de ahorros'
      user.transaction.amount = amount;
      user.balance += amount;
      user.movement[contador]=user.transaction;
      document.getElementById('movement').innerHTML = `Realizaste un depósito de: ${new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(amount)}`
    }
    else if (id == 'withdraw') {
      if (amount > user.balance) {
        document.getElementById('movement').innerHTML = "Saldo insuficiente, no puedes realizar esta transaccion";
        return;
      }
      else {
        user.transaction.date = today;
        user.transaction.description = 'Retiro de la cuenta de ahorros'
        user.transaction.amount = amount;
        user.balance -= amount;
        user.movement[contador]=user.transaction;
        document.getElementById('movement').innerHTML = `Realizaste un retiro de: ${new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(amount)}`
      }
    } else {
    }
    console.log(user)
    movement()
    localStorage.setItem('movement',user.movement[contador])
    localStorage.setItem('balance', user.balance)
    contador++
    onInit()
  }
}
function preventNonNumericalInput(e) {
  e = e || window.Event
  var charCode = (typeof e.which == "undefined") ? e.keyCode : e.which;
  var charStr = String.fromCharCode(charCode);

  if (!charStr.match(/^[0-9]+$/))
    e.preventDefault();
}
