function verify() {
    let digitOne = parseInt(document.getElementById("digitOne").value)
    let digitTwo = parseInt(document.getElementById("digitTwo").value)
    let digitThree = parseInt(document.getElementById("digitThree").value)
    const result = document.getElementById("result")

    if (digitOne == 9 && digitTwo == 1 && digitThree == 1) {
        result.innerHTML =  "Password 1 correcto"
    }

    else if (digitOne == 7 && digitTwo == 1 && digitThree == 4) {
        result.innerHTML =  "Password 2 correcto"
    }

    else {
        result.innerHTML = "Password incorrecto"
    }
}