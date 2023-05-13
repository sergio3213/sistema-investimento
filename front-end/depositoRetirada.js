tokenDecoded = jwt_decode(localStorage.getItem("token"));
codCliente = tokenDecoded.codCliente

let depositoOuRetirada = undefined;

async function buttonDeposito(){
  depositoOuRetirada = "deposito"
}

async function buttonRetirada(){
  depositoOuRetirada = "retirada"
}

async function solicitarSaldoDoCodClienteAndCreateElement(){
    res = await axios.get(
        `http://localhost:3000/conta/${codCliente}`,
        {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
          },
        }
      );

        userSpan=document.createElement('span');
        userSpan.innerHTML = tokenDecoded.user.toUpperCase();
        document.querySelector("#username").appendChild(userSpan);


        saldoEmConta = document.createElement('span')
        saldoEmConta.style = "font-weight:bold"
        saldoEmConta.innerHTML = "R$ "+ res.data[0].saldo.toFixed(2);
        document.querySelector("#divSaldoEmConta").appendChild(saldoEmConta)
  
}
solicitarSaldoDoCodClienteAndCreateElement()


async function depositarAxios(){
    try{res = await axios.post(
        `http://localhost:3000/conta/deposito`,
        {
            codCliente:tokenDecoded.codCliente,
            valor: parseFloat(document.querySelector("#inputInformeValor").value)
        ,

          headers: {
            Authorization: `${localStorage.getItem("token")}`,
          },
        }
      );
    alert(res.data.message)
    location.reload();
      }
      catch(error){
        alert(JSON.parse(error.request.response).message)
      }
}

async function retirarAxios(){

  try{res = await axios.post(
        `http://localhost:3000/conta/saque`,
        {
            codCliente:tokenDecoded.codCliente,
            valor: parseFloat(document.querySelector("#inputInformeValor").value)
        ,

          headers: {
            Authorization: `${localStorage.getItem("token")}`,
          },
        }
      );
    alert(res.data.message)
    location.reload();
      }
      catch(error){
        alert(JSON.parse(error.request.response).message)
      }
}

async function buttonConfirma(){
  if(depositoOuRetirada === undefined){
    alert("Escolha uma das opções acima(Depósito/Retirada)")
  }

  if(depositoOuRetirada === "deposito"){
    depositarAxios()  
  }

  if(depositoOuRetirada === "retirada"){
    retirarAxios()
  }
}

function buttonVoltar(){
  window.location.href="paginaPrincipal.html"
}

