async function buscaInfosUser() {
  tokenDecoded = jwt_decode(localStorage.getItem("token"));
  res = await axios.get(
    `http://localhost:3000/ativos/${tokenDecoded.codCliente}`,
    {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    }
  );

  async function comprar(data) {
    window.location.href = `PageComprarVender.html?nome=${data.nome}&quantidade=${data.quantidade}&valor=${data.valor}`;
  }
  res.data.map((data, index) => {
    const elementNomeAcao = [];
    const elementQuantidade = [];
    const elementValor = [];
    const elementComprar = [];
    const elementVender = [];
    elementNomeAcao[index] = document.createElement("div");

    elementNomeAcao[
      index
    ].innerHTML = `<div style="display:block;border:1px solid black">${data.nome}</div>`;

    elementQuantidade[index] = document.createElement("div");
    elementQuantidade[
      index
    ].innerHTML = `<div style="display:block;border:1px solid black">${data.quantidade}</div>`;

    elementValor[index] = document.createElement("div");
    elementValor[
      index
    ].innerHTML = `<div style="display:block;border:1px solid black">${data.valor}</div>`;

    elementComprar[index] = document.createElement("button");
    elementComprar[index].innerText = "Comprar";
    elementComprar[index].style = "width:100%";
    elementComprar[index].addEventListener("click", ()=>comprar(data));

    elementVender[index] = document.createElement("button");
    elementVender[index].innerText = "Vender";
    elementVender[index].style = "width:100%";
    elementVender[index].value = `${data.codCliente}`;

    /* elementQuantidade[index] = document.createElement("div")
    elementQuantidade[index].innerHTML=data.quantidade
 */

    document.querySelector("#actions").appendChild(elementNomeAcao[index]);
    document.querySelector("#quantidade").appendChild(elementQuantidade[index]);
    document.querySelector("#valor").appendChild(elementValor[index]);
    document.querySelector("#comprar").appendChild(elementComprar[index]);
    document.querySelector("#vender").appendChild(elementVender[index]);
  });
}
buscaInfosUser();
