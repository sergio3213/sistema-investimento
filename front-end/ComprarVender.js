const query=window.location.search
const urlParams = new URLSearchParams(query)
const parameterNomeAcao=urlParams.get('nome')
const parameterQuantidade=urlParams.get('quantidade')
const parameterValor=urlParams.get('valor')

acao = document.createElement("div")
acao.innerHTML = parameterNomeAcao

quantidade = document.createElement("div")
quantidade.innerHTML = parameterQuantidade

valor = document.createElement("div")
valor.innerHTML = parameterValor


document.querySelector("#actions").appendChild(acao)
document.querySelector("#quantidade").appendChild(quantidade)
document.querySelector("#valor").appendChild(valor)

async function comprarVender(){
    res = await axios.post(
        `http://localhost:3000/investimentos/comprar`,
        {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
          },
        }
    )
    console.log(res.data)
}
