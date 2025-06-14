// How to accept user input

// 1. EASY WAY = window prompt
// 2. PROFESIONAL WAY = HTML textbox

// easy way

/* let username;

username = window.prompt("What's your username?");

console.log(username); */




// profesional way

let username;
document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username}`
}