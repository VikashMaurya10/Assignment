function getInput() {
    let val = document.getElementById("myText").value
    return val
}
function myFunction() {
    document.getElementById("my").value = getInput().toUpperCase()
}

document.getElementById("lower").addEventListener('click', () => {
    document.getElementById("my").value = getInput().toLowerCase()
})

document.getElementById("charCount").addEventListener('click', () => {
    document.getElementById("my").value = getInput().length
})

document.getElementById("space").addEventListener('click', () => {
    document.getElementById("my").value = getInput().replaceAll(" ", "")
})

document.getElementById("subString").addEventListener('click', () => {
    document.getElementById("my").value = getInput().substring(0, 2)
})

document.getElementById("slice").addEventListener('click', () => {
    document.getElementById("my").value = getInput().slice(2, 4)
})

document.getElementById("replace").addEventListener('click', () => {
    document.getElementById("my").value = getInput().replace("a", "@")
})

document.getElementById("trim").addEventListener('click', () => {
    document.getElementById("my").value = getInput().trim()
})

document.getElementById("indexOf").addEventListener('click', () => {
    document.getElementById("my").value = getInput().indexOf("Vikash")
})