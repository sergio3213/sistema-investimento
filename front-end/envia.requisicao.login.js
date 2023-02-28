async function enviaRequisicaoLogin() {
  inputUsername = document.querySelector("#username").value;
  inputPassword = document.querySelector("#password").value;
  /* res= await axios.get("http://localhost:3000/login")
   */
    res = await axios({
    method: "get",
    url: "http://localhost:3000/login",
    data: {
      user: inputUsername,
      password: inputPassword,
    },
  });
  console.log(res.data.token);
}
