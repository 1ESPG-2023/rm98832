const liElementHTML = document.getElementsByTagName("li");

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