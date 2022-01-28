const tittle = document.getElementById("tittle");
const buttonV = document.getElementById("button");
const inputN = document.getElementById("input");
const textP = document.getElementById("text");
const attempsV = document.getElementById("attemp");
var count = 0;
var randomNumber;

buttonV.addEventListener("click", comenzarVerificar);

function comenzarVerificar() {
  if (count == 0) {
    tittle.style.top = 0 + "px";
    buttonV.style.top = 0 + "px";
    inputN.style.borderBottom = "3px solid white";
    inputN.style.width = "350px";
    setTimeout(() => {
      buttonV.style.padding = "5px 50px 5px 50px";
      buttonV.innerHTML = "verificar";
      textP.style.opacity = 1;
      attempsV.style.opacity = 1;
    }, 1500);

    randomNumber = Math.floor(Math.random() * 100 + 1);

    count++;
    console.log(count);
    console.log(randomNumber);
  } else {
    for (let index = 1; index < 11; index++) {
        console.log(index);
    }
    if (inputN.value == randomNumber) {
      alert("lo adivinaste!");
    }
  }
}

console.log(count);
