const display = document.getElementById("display");
const generate = document.getElementById("gene");
const cancel = document.getElementById("cancel");


function codeMachine() {
    generate.onclick = function() {
        display.innerText = Math.floor(Math.random() * 703000) + 100100;
    } 
    cancel.onclick = function() {
        display.innerText = ""
    }
}
codeMachine();