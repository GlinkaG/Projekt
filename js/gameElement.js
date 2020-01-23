function gameElement(where, gameid, gamename, usercount, image) {
    element = document.createElement("div")
    //element.innerHTML = gamename + " Liczba Graczy Online: " + usercount
    element.style.backgroundImage = image
    element.style.backgroundColor = "#1a4159"
    element.style.width ="800px"
    element.style.height="215px"
    element.style.position = "relative"
    dummy = document.createElement("div")
    dummy.style.width="460px"
    dummy.style.height="215px"
    dummy.style.marginRight = "0px"
    dummy.style.float ="left"
    element.appendChild(dummy)
    el1 = document.createElement("p")
    el1.style.width = "330px"
    //el1.style.float = "left"
    el1.innerText = gamename
    el1.style.float ="left"
    //el1.style.position = "absolute"
    //el1.left = "10px"
    element.appendChild(el1)
    el2 = document.createElement("p")
    el2.style.width = "330px"
    //el1.style.float = "left"
    el2.innerText = "Liczba Graczy Online: " + usercount
    el2.style.float ="left"
    // //el1.style.position = "absolute"
    // //el1.left = "10px"
    element.appendChild(el2)
    // element.appendChild(el1 = document.createElement("p"))
    // element.style.width ="460px"
    // element.style.height="215px"
    element.style.backgroundRepeat = "no-repeat"
    element.style.color = "white"
    element.style.textShadow = "1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000"
    this.element = element
    where.appendChild(element)
}