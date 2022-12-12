document.getElementById("btn").addEventListener('click', () => {
    const Input = document.getElementById("put").value
    if (Input == Input.split('').reverse().join('')) {
        alert("Number is palindrome number")
    }
    else {
        alert("Number is *NOT* palindrome number")
    }
})