let htmlName = '';
let htmlAccountNumber = '';
let htmlSaldo = '';
let usuario = {
  nombre: 'Alejandra',
  apellidos: 'Gonzalez Melendez',
  sexo: 'Femenino',
  numeroCuenta: '987854755561',
  saldo: 9840000,
  transaccion: [],
  movimientos: {
    fecha: '',
    descripcion: '',
    monto: '',
  },
  clave: '',
};

let usuarios = {};

function onInit() {
  if (usuario.sexo === 'Femenino') {
    htmlBienvenida = `Bienvenida, <b>${usuario.nombre}</b>`
  } else {
    htmlBienvenida = `Bienvenido, <b>${usuario.nombre}</b>`
  }
  htmlName = `${usuario.nombre + ' ' + usuario.apellidos}`
  htmlAccountNumber = `${agregarCaracter(usuario.numeroCuenta, '-', 4)}`
  htmlSaldo = `Saldo: ${new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(usuario.saldo)}`

  document.getElementById('bienvenida').innerHTML = htmlBienvenida;
  for (i = 0; i < document.getElementsByClassName('number').length; i++) {
    document.getElementsByClassName('number')[i].innerHTML = htmlAccountNumber;
  }
  for (i = 0; i < document.getElementsByClassName('name').length; i++) {
    document.getElementsByClassName('name')[i].innerHTML = htmlName;
  }
  document.getElementById('saldo').innerHTML = htmlSaldo;
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

const show = (id) => {
  if (id == 'productos') {
    document.getElementById(`${id}`).style.display = 'block'
    document.getElementById('transacciones').style.display = 'none'
    document.getElementById('movimientos').style.display = 'none'
  }
  else if (id == 'transacciones') {
    document.getElementById(`${id}`).style.display = 'block'
    document.getElementById('productos').style.display = 'none'
    document.getElementById('movimientos').style.display = 'none'

  } else {
    document.getElementById(`${id}`).style.display = 'block'
    document.getElementById('productos').style.display = 'none'
    document.getElementById('transacciones').style.display = 'none'
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


// // Obtener el formulario
// const loginText = document.querySelector(".title-text .login");
// const loginForm = document.querySelector("form.login");
// const loginBtn = document.querySelector("label.login");
// const signupBtn = document.querySelector("label.signup");
// const signupLink = document.querySelector("form .signup-link a");
// signupBtn.onclick = (() => {
//   loginForm.style.marginLeft = "-50%";
//   loginText.style.marginLeft = "-50%";
// });
// loginBtn.onclick = (() => {
//   loginForm.style.marginLeft = "0%";
//   loginText.style.marginLeft = "0%";
// });
// signupLink.onclick = (() => {
//   signupBtn.click();
//   return false;
// });


//// Script Transacciones
  let balanceProducts = document.getElementById("balance");
  let creditBalance = document.getElementById("credit");
  let inputDeposit = document.getElementById("btnDeposit");
  let inputWithdraw = document.getElementById("btnWithdraw");
  let inputAdvance = document.getElementById("btnAdvance");

  // funciones de los botones de avance, deposito y retiro

  inputDeposit.onclick = () => {
    let moneyInput = Number(document.getElementById("money").value);

    let newBalance = usuario.saldo + moneyInput;
    // balanceProducts.innerText = "$" + newBalance.toFixed(2);
    usuario.saldo = newBalance;

    console.log(moneyInput);
    console.log(newBalance)
    let movementH2 = document.getElementById("movement");
    movementH2.innerText = "Realizaste un deposito de $" + moneyInput.toFixed(2);
    onInit()
    show('productos');

  }

  inputWithdraw.onclick = () => {
    let moneyInput = Number(document.getElementById("money").value);
    if (moneyInput > usuario.saldo) {
      alert("Saldo insuficiente, no Puedes realizar esta transaccion");
      return;

    }
    //let currentBalance = Number(balanceProducts.innerText.replace(/[\$.,]/g, ""));
    let newBalance = usuario.saldo - moneyInput;
    // balanceProducts.innerText = "$" + newBalance.toFixed(2);
    usuario.saldo = newBalance
    let movementH2 = document.getElementById("movement");
    movementH2.innerText = "Realizaste un retiro de $" + moneyInput.toFixed(2);
    onInit();
    show('productos');

  }



  inputAdvance.onclick = () => {
    let moneyInput = Number(document.getElementById("money").value);
    if (moneyInput > 2000000) {
      alert("Has alcanzado el monto maximo por transacción");
      return
    };

    let newAdvance = currentAdvance + moneyInput
    creditBalance.innerText = "$" + "-" + newAdvance.toFixed(2);
    currentAdvance = newAdvance
    let movementH2 = document.getElementById("movement");
    movementH2.innerText = "Avanzaste $" + moneyInput.toFixed(2);
    console.log(newAdvance)
  }
