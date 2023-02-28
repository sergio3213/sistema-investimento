async function enviaRequisicaoLogin() {
  inputUsername = document.querySelector("#username").value;
  inputPassword = document.querySelector("#password").value;
  res = axios({
    method: "GET",
    url: "https://backend-express-production-0fa9.up.railway.app/login",
    headers: {
        "x-access-key": data,
        "x-access-token": token,
      },
    data: {
      user: inputUsername,
      password: inputPassword,
    },
  });
  console.log(res.data.token);
}
