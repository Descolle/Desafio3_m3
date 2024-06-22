const parrafo = document.querySelector("#nombre");
 function pintar(color = "green") {
   parrafo.style.backgroundColor = color;
 }
 parrafo.addEventListener("click", pintar);

 //Parte 2 del desafio
 function pintarFondo(elementID, color = "black") {
   let box = document.querySelector("#" + elementID);
   box.style.backgroundColor = color;
   box.addEventListener("click", pintarFondo);
 };

 //parte 3 del desafio
const caja = document.querySelector("#key");
const containers = document.querySelector(".main");

console.log("holi");
document.addEventListener("keydown", function (event) {
  console.log(event);
  if (event.key === "a") {
    caja.style.backgroundColor = "red"; /* Cambiar a color 1 */
  } else if (event.key === "s") {
    caja.style.backgroundColor = "orange";
  } else if (event.key === "d") {
    caja.style.backgroundColor = "cyan";
  }
  if (event.key === "q") {
    // let qbox = document.createElement("div");
    // qbox.className = "box";
    // qbox.style.backgroundColor = "purple";
    // containers.appendChild(qbox);
    // console.log(qbox);
    createElement('purple')
  } else if ( event.key === 'w') {
    createElement('gray')
  } else if (event.key === 'e') {
    createElement('brown')
  }
});

function createElement (color){
const elementDiv = document.createElement('div')
elementDiv.className = 'box'
elementDiv.style.backgroundColor = color
containers.appendChild(elementDiv)
}