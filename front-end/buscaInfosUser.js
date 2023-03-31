async function buscaInfosUser() {
  tokenDecoded = jwt_decode(localStorage.getItem("token"));

  const userSpan = document.createElement("span");

  userSpan.innerText = tokenDecoded.user.toUpperCase();

  document.querySelector("#username").appendChild(userSpan);

  res = await axios.get(
    `http://localhost:3000/ativos/${tokenDecoded.codCliente}`,
    {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    }
  );

  async function comprarVender(data) {
    window.location.href = `PageComprarVender.html?nome=${data.nome}&codAtivo=${data.codAtivo}&quantidade=${data.quantidade}&valor=${data.valor}`;
    console.log(data);
  }

  let positionTopMap1 = 2
  const mapMyActions = res.data.map((data, index) => {
    const elementNomeAcao = [];
    const elementQuantidade = [];
    const elementValor = [];
    const elementComprar = [];
    const elementVender = [];
    elementNomeAcao[index] = document.createElement("div");

    elementNomeAcao[
      index
    ].innerHTML = `<div style="display:block;border:0px solid black;background-color:orange;position:relative; top: ${positionTopMap1}vh;font-family: Josefin Sans;font-size:2.5vh;width:17vw;border-radius:3vw;">${data.nome}</div>`;
    
    elementQuantidade[index] = document.createElement("div");
    elementQuantidade[
      index
    ].innerHTML = `<div style="display:block;border:0px solid black;background-color:rgb(201, 201, 201);position:relative; top: ${positionTopMap1}vh;left:3vh;font-family: Josefin Sans;color:white;font-size:2.5vh;width:17vw;border-radius:3vw;">${data.quantidade}</div>`;

    elementValor[index] = document.createElement("div");
    elementValor[
      index
    ].innerHTML = `<div style="display:block;border:0px solid black;background-color:rgb(58, 58, 58);position:relative; top: ${positionTopMap1}vh;left:3vh;font-family: Josefin Sans;color:white;font-size:2.5vh;width:17vw;border-radius:3vw;">${data.valor}</div>`;

    
    
    elementComprar[index] = document.createElement("button");
    elementComprar[index].innerText = "C";
    elementComprar[index].style = `width:100%;height:3vh;font-size:2vh;position:relative;top:${positionTopMap1}vh`;
    elementComprar[index].addEventListener("click", () => comprarVender(data));

    elementVender[index] = document.createElement("button");
    elementVender[index].innerText = "V";
    elementVender[index].style = `width:100%;height:3vh;font-size:2vh;position:relative;top:${positionTopMap1}vh`;
    elementVender[index].value = `${data.codCliente}`;
    elementVender[index].addEventListener("click", () => comprarVender(data));
    positionTopMap1+=2;
    /* elementQuantidade[index] = document.createElement("div")
    elementQuantidade[index].innerHTML=data.quantidade
 */

    document.querySelector("#actions").appendChild(elementNomeAcao[index]);
    document.querySelector("#quantidade").appendChild(elementQuantidade[index]);
    document.querySelector("#valor").appendChild(elementValor[index]);
    document.querySelector("#comprar").appendChild(elementComprar[index]);
    document.querySelector("#vender").appendChild(elementVender[index]);
    return data;
  });

  console.log(mapMyActions);

  resAcoes = await axios.get(`http://localhost:3000/ativos`, {
    headers: {
      Authorization: `${localStorage.getItem("token")}`,
    },
  });
  console.log(resAcoes.data);
  const elementNomeAcaoAtivos = [];
  const elementQuantidadeAtivos = [];
  const elementValorAtivos = [];
  const elementComprarAtivos = [];
  const elementVenderAtivos = [];

  let positionTopMap2 = 2

  resAcoes.data.map((data, index) => {
    elementNomeAcaoAtivos[index] = document.createElement("div");

    elementNomeAcaoAtivos[
      index
    ].innerHTML = `<div style="display:block;border:0px solid black;background-color:orange;position:relative; top: ${positionTopMap2}vh;font-family: Josefin Sans;font-size:2.5vh;width:17vw;border-radius:3vw;">${data.nome}</div>`;

    elementQuantidadeAtivos[index] = document.createElement("div");
    elementQuantidadeAtivos[
      index
    ].innerHTML = `<div style="display:block;border:0px solid black;background-color:rgb(201, 201, 201);position:relative; top: ${positionTopMap2}vh;left:3vh;font-family: Josefin Sans;color:white;font-size:2.5vh;width:17vw;border-radius:3vw;">${data.quantidade}</div>`;

    elementValorAtivos[index] = document.createElement("div");
    elementValorAtivos[
      index
    ].innerHTML = `<div style="display:block;border:0px solid black;background-color:rgb(58, 58, 58);position:relative; top: ${positionTopMap2}vh;left:3vh;font-family: Josefin Sans;color:white;font-size:2.5vh;width:17vw;border-radius:3vw;">${data.valor}</div>`;

    console.log(mapMyActions.find((data2) => data2.nome === data.nome));

    elementComprarAtivos[index] = document.createElement("button");
    elementComprarAtivos[index].innerText = "C";
    elementComprarAtivos[index].style = `width:100%;height:3vh;font-size:2vh;position:relative;top:${positionTopMap2}vh`;
    elementComprarAtivos[index].addEventListener("click", () => {
      if (
        mapMyActions.find((data2) => data2.nome === data.nome) !== undefined
      ) {
        comprarVender(mapMyActions.find((data2) => data2.nome === data.nome));
      } else {
        comprarVender({
          codCliente: data.codCliente,
          codAtivo: data.codAtivo,
          nome: data.nome,
          valor: data.valor,
          quantidade: 0,
        });
      }
    });

    elementVenderAtivos[index] = document.createElement("button");
    elementVenderAtivos[index].innerText = "V";
    elementVenderAtivos[index].disabled = true;
    elementVenderAtivos[index].style = `width:100%;height:3vh;font-size:2vh;position:relative;top:${positionTopMap2}vh`;
    elementVenderAtivos[index].value = `${data.codCliente}`;
    elementVenderAtivos[index].addEventListener("click", () => {
      if (
        mapMyActions.find((data2) => data2.nome === data.nome) !== undefined
      ) {
        comprarVender(mapMyActions.find((data2) => data2.nome === data.nome));
      } else {
        comprarVender({
          codCliente: data.codCliente,
          codAtivo: data.codAtivo,
          nome: data.nome,
          valor: data.valor,
          quantidade: 0,
        });
      }
    });

    positionTopMap2+=2
    /* elementQuantidade[index] = document.createElement("div")
    elementQuantidade[index].innerHTML=data.quantidade
 */

    document
      .querySelector("#actionsDisponiveis")
      .appendChild(elementNomeAcaoAtivos[index]);
    document
      .querySelector("#quantidadeDisponiveis")
      .appendChild(elementQuantidadeAtivos[index]);
    document
      .querySelector("#valorDisponiveis")
      .appendChild(elementValorAtivos[index]);
    document
      .querySelector("#comprarDisponiveis")
      .appendChild(elementComprarAtivos[index]);
    document
      .querySelector("#venderDisponiveis")
      .appendChild(elementVenderAtivos[index]);
  });
}

function sendDepositoRetirada(){
  window.location.href="depositoRetirada.html"
}

buscaInfosUser();
