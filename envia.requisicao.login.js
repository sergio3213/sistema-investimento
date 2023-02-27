

async function enviaRequisicaoLogin(){
    inputUsername=document.querySelector("#username").value
    inputPassword=document.querySelector("#password").value
        res = await axios.get('http://127.0.0.1:3000/login');
        console.log(res.data.token)
    
}



