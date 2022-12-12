const number = document.getElementById("number")

let count = 0
function f_decrement() {
    count--
    number.innerText = count
    color()
}
function f_reset() {
    count = 0
    number.textContent = count
    color()
}
function f_increment() {
    count++
    number.innerText = count
    color()
}

function color() {
    // var audio = document.getElementById("audio");
    // audio.play();
    if (count < 0)
        number.style.color = "red"
    else if (count > 0)
        number.style.color = "green"
    else
        number.style.color = "black"
}