async function enviaRequisicaoLogin() {
  inputUsername = document.querySelector("#username").value;
  inputPassword = document.querySelector("#password").value;
  res = await axios.get(
    "https://backend-express-production-0fa9.up.railway.app/login",{
    params: {
      user: inputUsername,
      password: inputPassword,
    }})

  /* res = await axios({
    method: "GET",
    url: "https://backend-express-production-0fa9.up.railway.app/login",
        
    data: {
      user: inputUsername,
      password: inputPassword,
    },
  });
   */
  console.log(res.data.token);
}
