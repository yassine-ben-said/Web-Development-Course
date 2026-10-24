document.addEventListener("keydown",function(){
    console.log("A key was pressed !");
})

document.addEventListener("keydown",function(event) {
    console.log(event.key)
})

// === Detecting a Specific key ===
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        console.log("You pressed Enter !");
    }
    else {
        console.log("You pressed " + event.key + " !")
    }
})

// === keydown vs keyup === 
document.addEventListener("keydown",function(event) {
    console.log("Pressed : ", event.key)
})

document.addEventListener("keyup", function(event){
    console.log("Released : " , event.key)
})
