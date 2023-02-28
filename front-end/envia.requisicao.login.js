async function enviaRequisicaoLogin() {
  inputUsername = document.querySelector("#username").value;
  inputPassword = document.querySelector("#password").value;
  
  try{res = await axios.get(
    "https://backend-express-production-0fa9.up.railway.app/login",{
    params: {
      user: inputUsername,
      password: inputPassword,
    }})
    localStorage.setItem("token",res.data.token)
  }
  catch(err){
    if(err.response.data.message==="Incorrect login"){
      alert('Login incorreto!')
    }
    console.log()  
  }
  
}
