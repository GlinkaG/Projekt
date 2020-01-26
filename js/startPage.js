async function startPage(liczba) {
    //var allSteamApps = await getAllSteamApps(currentProxy)
    //console.log(allSteamApps)

    console.log("test start page")
    main.innerHTML = ""
    render = true;


    gamelist2 = await getSteamSpyTop100(currentProxy)
    gamelist3 = []


   
    Object.keys(gamelist2).sort().forEach(function (key) {
        gamelist3.push(gamelist2[key])
    });
    console.log(gamelist3)
    var byAverage = gamelist3.slice(0);
    byAverage.sort(function (a, b) {
        return b.average_forever - a.average_forever;
    });
    console.log(byAverage)
    
        for (var i = 0; i < liczba/*byAverage.length*/; i++) {

            //gameinfo = await getSteamSpyAppDetails(currentProxy, byAverage[i].appid)
            //gameinfo = gameinfo.name
            if(render){
            gameinfo = byAverage[i].name
            new gameElement(main, byAverage[i], gameinfo, byAverage[i].average_forever, getArt([byAverage[i].appid]))
            }
        }
    
    

}