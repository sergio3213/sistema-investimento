const query = window.location.search;
const urlParams = new URLSearchParams(query);
const parameterNomeAcao = urlParams.get("nome");
const parameterQuantidade = urlParams.get("quantidade");
const parameterValor = urlParams.get("valor");
const parameterCodAtivo = urlParams.get("codAtivo");

tokenDecoded = jwt_decode(localStorage.getItem("token"));
JWTCodCliente = tokenDecoded.codCliente;
JWTuser = tokenDecoded.user;
JWTSaldoCliente = tokenDecoded.saldo;
acao = document.createElement("div");
acao.style = "position:relative;top:2vh;background-color:orange;font-family: Josefin Sans;font-size:2.5vh;border-radius:3vw;"
acao.innerHTML = parameterNomeAcao;

quantidade = document.createElement("div");
quantidade.style = "position:relative;top:2vh;background-color:rgb(151, 151, 151);border-radius:4vw;font-family: Josefin Sans;font-size:2.5vh;"
quantidade.innerHTML = parameterQuantidade;

valor = document.createElement("div");
valor.style = "position:relative;top:2vh;background-color:black;color:white;border-radius:4vw;font-family: Josefin Sans;font-size:2.5vh;"
valor.innerHTML = parameterValor;

document.querySelector("#actions").appendChild(acao);
document.querySelector("#quantidade").appendChild(quantidade);
document.querySelector("#valor").appendChild(valor);

username = document.createElement("span");
username.innerHTML = JWTuser.toUpperCase();
document.querySelector("#username").appendChild(username);

async function comprarVender() {
  if (
    document.querySelector("#textComprar").value !== "" &&
    document.querySelector("#textVender").value === ""
  ) {
    res = await axios
      .post(
        `http://localhost:3000/investimentos/comprar`,

        {
          data: {
            codCliente: JWTCodCliente,
            nomeAcao: parameterNomeAcao,
            quantidade: parseFloat(
              document.querySelector("#textComprar").value
            ),
            valor:
              parseFloat(document.querySelector("#textComprar").value) *
              parseFloat(parameterValor),
          },

          headers: {
            Authorization: `${localStorage.getItem("token")}`,
          },
        }
      )
      .catch((error) => {
        alert(error.response.data.message);
      });

    if (res.data.message === "Acão comprada com sucesso") {
      alert(res.data.message);
      window.location.href = "paginaPrincipal.html";
    }
  } else if (
    document.querySelector("#textComprar").value !== "" &&
    document.querySelector("#textVender").value !== ""
  ) {
    alert("Somente um campo pode ser preenchido!");
  } else if (
    document.querySelector("#textVender").value !== "" &&
    document.querySelector("#textComprar").value === ""
  ) {
    resVender = await axios.post(`http://localhost:3000/investimentos/vender`, {
      data: {
        codCliente: JWTCodCliente,
        codAtivo: parameterCodAtivo,
        nomeAcao: parameterNomeAcao,
        quantidade: parseFloat(document.querySelector("#textVender").value),
        valor:
          parseFloat(document.querySelector("#textVender").value) *
          parseFloat(parameterValor),
      },
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    });
  }
}
