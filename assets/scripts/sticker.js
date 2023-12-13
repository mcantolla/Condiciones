function verify() {
    let sticker1 = parseInt(document.getElementById("stickerone").value)
    let sticker2 = parseInt(document.getElementById("stickertwo").value)
    let sticker3 = parseInt(document.getElementById("stickerthree").value)
    total = sticker1 + sticker2 + sticker3

    if (total > 10) {
        stickerCount = document.querySelector(".sticker-count")
        stickerCount.innerHTML = 'Llevas demasiados stickers'
    }

    else {
        stickerCount = document.querySelector(".sticker-count")
        stickerCount.innerHTML = 'Llevas ' + total + ' stickers'
    }
}