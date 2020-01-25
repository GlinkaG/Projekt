function gameElement(where, gameid, gamename, usercount, image) {
    element = document.createElement("div")
    //element.innerHTML = gamename + " Liczba Graczy Online: " + usercount
    element.style.backgroundImage = image
    element.style.backgroundColor = "#171a21"
    element.style.width ="800px"
    element.style.height="215px"
    element.style.position = "relative"
    dummy = document.createElement("div")
    dummy.style.width="460px"
    dummy.style.height="215px"
    dummy.style.marginRight = "0px"
    dummy.style.float ="left"
    element.appendChild(dummy)
    el1 = document.createElement("td")
    el1.style.width = "167px"
    el1.style.verticalAlign = "middle"
    //el1.style.float = "left"
    el1.innerText = gamename
    //el1.style.float ="left"
    //el1.style.position = "absolute"
    //el1.left = "10px"
    //element.appendChild(el1)
    el2 = document.createElement("td")
    el2.style.width = "170px"
    //el2.style.borderLeft = "white solid 1px"
    

    //el1.style.float = "left"
    el2.innerText = "Średnia liczba graczy Online: " + usercount
    //el2.style.float ="left"
    container = document.createElement("table")
    tr = document.createElement("tr")
    container.appendChild(tr)
    tr.appendChild(el1)
    divider = document.createElement("div")

    divider.style.width = "1px"
    divider.style.height = "100px"
    divider.style.border = "1px white solid"
    divider.style.position = "absolute"
    divider.style.right = "175px"
    divider.style.verticalAlign ="middle"
    divider.style.top = "25%"
    tr.appendChild(divider)
    tr.appendChild(el2)
    container.style.height = "200px"
    container.style.width = "334px"

    container.style.verticalAlign = "middle"

   
    //container.
    // //el1.style.position = "absolute"
    // //el1.left = "10px"
    //element.appendChild(el2)
    container.style.float = "left"
    element.appendChild(container)
    
    // element.appendChild(el1 = document.createElement("p"))
    // element.style.width ="460px"
    // element.style.height="215px"
    element.style.backgroundRepeat = "no-repeat"
    element.style.color = "white"
    element.style.textShadow = "1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000"
    element.gameid = gameid
    element.addEventListener("click", chart)
    this.element = element
    where.appendChild(element)
    element.classList.add("element")
}