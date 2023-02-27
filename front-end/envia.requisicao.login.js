

async function enviaRequisicaoLogin(){
    inputUsername=document.querySelector("#username").value
    inputPassword=document.querySelector("#password").value
        res = await axios.get('https://backend-express-production-0fa9.up.railway.app/login');
        console.log(res.data.token)
    
}



