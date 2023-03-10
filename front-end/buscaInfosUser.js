
async function buscaInfosUser() {
  tokenDecoded = jwt_decode(localStorage.getItem('token'))
  res = await axios.get(
    `http://localhost:3000/ativos/${tokenDecoded.codCliente}`,
    { 
      headers: {
        "Authorization": `${localStorage.getItem('token')}`,
      },
    }
  );
  
  console.log(tokenDecoded.codCliente)
  console.log(res.data);
}
buscaInfosUser();
