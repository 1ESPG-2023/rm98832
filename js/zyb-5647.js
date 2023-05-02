//const liElementHTML = document.getElementsByTagName("li");

// for (let index = 0; index < liElement.length ; index++){
//     console.log(liElement[index].text.content);
// }
// console.log(liElement)
//**********************************************************
// Declaração de Arrays
//let nr1 = [1, 2, 3, 4, 5]
//let nr2 = [ 6, 7, 8, 9, 10]
//espalhar array com SPREAD
//let nr3 = [...nr1,...nr2]
//console.log(`Array-1 ${nr1}`);
//console.log(`Array-2 ${nr2}`);
//console.log(`Array-3 ${nr3}`);
//***********************************************************
// listando um Array com forEach
// nr3.forEach((itensDoArray) => {
//     console.log(`Array-3 sendo listado ${itensDoArray}`)
// });
//***********************************************************
// listando um Array com map
//nr3.map((numero, key)=>{
//   console.log(`${(key+1)} - itens do array - ${numero}`); 
//})
//***********************************************************
//convertendo htmlColection em Array de forma indireta
// const liElementArray = [...liElementHTML];
// //console.log(liElementArray);
// //***********************************************************
// //coletando um unico item
// liElementArray.map((item,key)=>{
//     if (item.textContent  == "item-39" ){
//     console.log(`${(key+1)} - ${item.textContent}`)
//     }
// })
//***********************************************************
// function soma(p1,p2,p3) {
//     nr1 = p1 
//     nr2 = p2

//     return parseInt(nr1) + parseInt(nr2) + parseInt(p3)

//     // console.log(`resultado : ${parseInt(nr1) + parseInt(nr2) + parseInt(parametro)}`)
//     // console.log(`este é o parametro que foi passado para a função : ${parametro}`)
// }
// soma();
// //***********************************************************
// const mudaCor = ()=>{
//     //fução set-time-out
//     setTimeout(alert("executou"),5000);
// }
// mudaCor();
// //***********************************************************
// let tmp
// function mudaCor(){
//     let r = "";
//     let g = "";
//     let b = "";

//     //random = gera numeros aleatorios entre 0 e 1
//     //ceil, floor e round que arredonta o numero para cima, para baixo ou aleatoriamente
    
//     //determinando um valor para a variavel r entre 0 e 255
//     r = Math.round(Math.random()*255);
    
//     g =  Math.round(Math.random()*255);
    
//     b = Math.round(Math.random()*255);
    

//     const cabecalho = document.querySelector(".cabecalho");
//     cabecalho.setAttribute("style", `background-color:rgb(${r},${g},${b})`);
//     tmp = setTimeout(mudaCor, 1000)
// }
// mudaCor()
// //***********************************************************
//     function mdimg1(){
//         let temp
//         let nmr = Math.round(Math.random()*2);
//         let caminho = `./img/banner-lateral-${nmr}.png`;

//         const img1 = document.querySelector(".l-e > img");
//         img1.src = caminho;
        
//         temp = setTimeout(mdimg1, 1000)
//     }
//     mdimg1();
// //***********************************************************
//     function mdimg2(){
//         let temp
//         let nmr = Math.round(Math.random()*2);
//         let caminho = `./img/banner-lateral-${nmr}.png`;

//         const img1 = document.querySelector(".l-d > img");
//         img1.src = caminho;
        
//         temp = setTimeout(mdimg2, 1000)
//     }
//     mdimg2();

// //***********************************************************
//     const botao = document.querySelector(".central button")
//     botao.addEventListener( "click", ()=>{
//         const lampada = document.querySelector(".central  img");
        

//         if(botao.textContent == "ligar"){
//             lampada.src = "./img/pic_bulb0.gif"
//             botao.textContent = "desligar"
//         }else{
//             lampada.src = "./img/pic_bulb1.gif"
//             botao.textContent = "ligar"
//         }
//     })
// //***********************************************************
    // function ligadesliga(){
    //     const lampada = document.querySelector(".central  img");
        

    //     if(botao.textContent == "ligar"){
    //         lampada.src = "./img/pic_bulb0.gif"
    //         botao.textContent = "desligar"
    //     }else{
    //         lampada.src = "./img/pic_bulb1.gif"
    //         botao.textContent = "ligar"
    //     }
    // }
// //***********************************************************
// //***********************************************************
const inputUser = document.querySelector("input[name='nmUser']");

inputUser.addEventListener("focus", ()=>{
    
    inputUser.setAttribute("style", "outline-color:#ff0000");
    
});

inputUser.addEventListener("keyup", ()=>{
    if(inputUser.value.length < 8){
        inputUser.setAttribute("style", "outline-color:#ff0000");
       
    }else{
        inputUser.setAttribute("style", "outline-color:#dddddd");
    }
});

