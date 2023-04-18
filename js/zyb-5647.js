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
const liElementArray = [...liElementHTML];
console.log(liElementArray);

liElementArray.map((item,key)=>{
    console.log(`${(key+1)} - ${item.textContent}`)
})