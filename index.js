const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let elPassword1= document.getElementById("password-el1")
let elPassword2= document.getElementById("password-el2")

function generate(){
    elPassword1.textContent = ""
    elPassword2.textContent = ""  

    for (let i = 0; i<15; i++){
    let generated1 = Math.floor(Math.random()*characters.length)
    let generated2 = Math.floor(Math.random()*characters.length)
    elPassword1.textContent += characters[generated1]  
    elPassword2.textContent += characters[generated2]  
    }

}


