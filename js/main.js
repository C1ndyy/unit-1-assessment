//----------------state variables-----------------//
let count = 0;

//----------------cached variables-----------------//
let addButton = document.getElementById("add");
let subtractButton = document.getElementById("subtract");
let inputNumber = document.querySelector("input");
let counter = document.getElementById("counter")

//--------------------functions--------------------//
function addNumber(x){
    count += x;
    return count
}

function subtractNumber(x){
    count -= x;
    return count
}

function render(){
    counter.innerHTML= count;
    if (count < 0){
        counter.style.color= "red"
    }
    else counter.style.color="black"
}

//----------------event listeners-----------------//
addButton.addEventListener("click", function(e){
    addNumber(Number(inputNumber.value));
    render();
})

subtractButton.addEventListener("click", function(e){
    subtractNumber(Number(inputNumber.value));
    render();
})
