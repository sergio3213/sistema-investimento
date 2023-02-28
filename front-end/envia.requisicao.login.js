async function enviaRequisicaoLogin() {
  inputUsername = document.querySelector("#username").value;
  inputPassword = document.querySelector("#password").value;
  res = axios({
    method: "GET",
    url: "https://backend-express-production-0fa9.up.railway.app/login",
    headers: { 
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'your-rapidapi-key',
        'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com',},
    data: {
      user: inputUsername,
      password: inputPassword,
    },
  });
  console.log(res.data.token);
}
