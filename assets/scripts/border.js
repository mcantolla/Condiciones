function borderChange() {
    const cat = document.getElementById("cat")
    const validation = cat.classList.contains("border")
    if (validation == false) {
        cat.classList.add("border")
    }
    else {
        cat.classList.remove("border")
    }
}