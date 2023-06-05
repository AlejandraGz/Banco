function saveData() {

  let user = {
    name: localStorage.getItem('name'),
    lastName: localStorage.getItem('lastName'),
    userName: localStorage.getItem('userName'),
    gender: localStorage.getItem('gender'),
    email: localStorage.getItem('email'),
    accountNumber: localStorage.getItem('accountNumber'),
    balance: Number(localStorage.getItem('balance')),
    transaction: {
      date: '',
      description: '',
      amount: 0,
    },
    movement: Array(localStorage.getItem('movement')),
    password: localStorage.getItem('password'),
    passwordConfirmation: localStorage.getItem('passwordConfirmation'),
  };
  console.log('desde saveData()', user);
  return user;
}
