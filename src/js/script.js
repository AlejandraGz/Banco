let htmlName = '';
let htmlAccountNumber = '';
let htmlbalance = '';
user = saveData()

document.getElementById('productosBtn').classList.add('active')
function onInit() {

  if (user.gender == 'Femenino') {
    htmlBienvenida = `Bienvenida, <b>${user.name}</b>`
  } else {
    htmlBienvenida = `Bienvenido, <b>${user.name}</b>`
  }
  htmlName = `${user.name + ' ' + user.lastName}`
  htmlAccountNumber = `${agregarCaracter(user.accountNumber, '-', 4)}`
  htmlbalance = `Saldo: ${new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(user.balance)}`

  document.getElementById('bienvenida').innerHTML = htmlBienvenida;
  for (i = 0; i < document.getElementsByClassName('accountNumber').length; i++) {
    document.getElementsByClassName('accountNumber')[i].innerHTML = htmlAccountNumber;
  }
  for (i = 0; i < document.getElementsByClassName('name').length; i++) {
    document.getElementsByClassName('name')[i].innerHTML = htmlName;
  }
  document.getElementById('balance').innerHTML = htmlbalance;
  
}



const agregarCaracter = (cadena, caracter, pasos) => {
  let cadenaConCaracteres = "";
  const longitudCadena = cadena.length;
  for (let i = 0; i < longitudCadena; i += pasos) {
    if (i + pasos < longitudCadena) {
      cadenaConCaracteres += cadena.substring(i, i + pasos) + caracter;
    } else {
      cadenaConCaracteres += cadena.substring(i, longitudCadena);
    }
  }
  return cadenaConCaracteres;
}

const logout = () =>{
 localStorage.clear();
 window.location.href = "./src/pages/registro.html";
}

const show = (id) => {
  if (id == 'productos') {
    document.getElementById(`${id}`).style.display = 'block'
    document.getElementById('productosBtn').classList.add('active')
    document.getElementById('transacciones').style.display = 'none'
    document.getElementById('transaccionesBtn').classList.remove('active')
    document.getElementById('movimientos').style.display = 'none'
    document.getElementById('movimientosBtn').classList.remove('active')
    
    showTransactions();
  }
  else if (id == 'transacciones') {
    document.getElementById(`${id}`).style.display = 'block'
    document.getElementById('transaccionesBtn').classList.add('active')
    document.getElementById('productos').style.display = 'none'
    document.getElementById('productosBtn').classList.remove('active')
    document.getElementById('movimientos').style.display = 'none'
    document.getElementById('movimientosBtn').classList.remove('active')
    showTransactions();

  } else {
    document.getElementById(`${id}`).style.display = 'block'
    document.getElementById('movimientosBtn').classList.add('active')
    document.getElementById('productos').style.display = 'none'
    document.getElementById('productosBtn').classList.remove('active')
    document.getElementById('transacciones').style.display = 'none'
    document.getElementById('transaccionesBtn').classList.remove('active')
    showTransactions();
  }
}

//Script tabla movimientos
function showTransactionDetail(id) {
  let transactionDetail = document.getElementById("detail-" + id);
  if (transactionDetail.classList.contains("hidden")) {
    transactionDetail.classList.remove("hidden");
  } else {
    transactionDetail.classList.add("hidden");
  }
}



