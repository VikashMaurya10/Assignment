const colorcode = document.getElementById("colorcode")
let colors = ["Red", "Blue", "Black", "Green", "Gray"]
const color = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']

function func() {
    let rand = Math.floor(Math.random() * colors.length)
    document.body.style.backgroundColor = colors[rand]
    colorcode.textContent = colors[rand]
}

function func2() {
    let code = '#'
    for (let index = 0; index < 6; index++) {
        let ind = Math.floor(Math.random() * color.length)
        code += color[ind]
    }
    document.body.style.backgroundColor = code
    colorcode.textContent = code
}