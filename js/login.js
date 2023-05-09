//gerando objtos no localstorage
const usuario1 = {
    nomeUsuario:"predo",
    senhaUsuario:"123"
}
const usuario2 = {
    nomeUsuario:"paulin",
    senhaUsuario:"123"
}

let listaDeUsuarios = [];
listaDeUsuarios.push(usuario1);
listaDeUsuarios.push(usuario2);

localStorage.setItem("listaUser",listaDeUsuarios);





//vamos criar um objeto para armazenar o nosso usuario

const usuario = {
    nomeUsuario:"",
    senhaUsuario:""
}
//rastreando eventos
addEventListener("click",(evento)=>{
    evento. preventDefault()

    //serve para rastrear um elemento especifico pelo seu id
    //console.log(evento.target.id == "btnSubmit")

    //situação para se a condição for verdadeira 
    if (evento.target.id == "btnSubmit"){

        //cria a variavel usuario e seleciona o seu valor
        // let usuario = document.querySelector("#idUser").value;
        // let senha = document.querySelector("#idPass").value
        usuario.nomeUsuario = document.querySelector("#idUser").value;
        usuario.senhaUsuario = document.querySelector("#idPass").value


        //com a variavel criada consegue seleconar o valor do elemento pelo html
 
        const h1titulo = document.querySelector("#titulo")
        if (usuario.nomeUsuario == "matheus" && usuario.senhaUsuario == "senha"){
            h1titulo.innerHTML = "bem vindo : "+usuario.nomeUsuario
        }else{
            h1titulo.innerHTML = ""
        }
    }
});

//***********************************************************
