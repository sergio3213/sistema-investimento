tokenDecoded = jwt_decode(localStorage.getItem("token"));

console.log(tokenDecoded)
userSpan=document.createElement('span');
userSpan.innerHTML = tokenDecoded.user.toUpperCase();
document.querySelector("#username").appendChild(userSpan);


saldoEmConta = document.createElement('span')
saldoEmConta.style = "font-weight:bold"
saldoEmConta.innerHTML = "R$ "+ tokenDecoded.saldo.toFixed(2);
document.querySelector("#divSaldoEmConta").appendChild(saldoEmConta)

