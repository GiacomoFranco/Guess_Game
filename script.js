var tittle = document.getElementById('tittle');
var buttonV = document.getElementById('button');
var inputN = document.getElementById('input');
var textP = document.getElementById('text');
var count = 0;


if (count == 0) {
    function comenzar(){
    tittle.style.top = 0 +"px";
    buttonV.style.top = 0 + "px";
    inputN.style.borderBottom = "3px solid white";
    inputN.style.width = "350px";
        setTimeout(() => {
            buttonV.style.padding = "5px 50px 5px 50px";
            buttonV.innerHTML = "verificar"
            textP.style.opacity = 1;
            textP.style.fontSize = "2em";
        }, 1500);
    
    count ++;
    console.log(count);
}
}
console.log(count);

buttonV.addEventListener("click", comenzar);
