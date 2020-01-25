async function startPage(liczba) {
    //
    //var allSteamApps = await getAllSteamApps(currentProxy)
    //console.log(allSteamApps)

    console.log("test start page")
    main.innerHTML = ""
    render = true;
    //main.appendChild(Bstart)
    //gameList = await getGameList(currentProxy)
    gameList = [
        { appid: 730 },
        { appid: 570 },
        { appid: 578080 },
        // {appid:359550},
        { appid: 271590 },
        { appid: 22490 }

    ]

    gamelist2 = await getSteamSpyTop100(currentProxy)
    gamelist3 = []
    // ordered = gamelist2

    // keys = []
    // k,i, len;
    // for (k in gamelist2){
    //     if (gamelist2.hasOwnProperty(k)){
    //         keys.push(k);
    //     }
    // }
    // keys.sort()
    // len = keys.length;
    // for (i = 0; i < len; i++) {
    //     k = keys[i];
    //     console.log(k + ':' + myObj[k]);
    // }

   
    Object.keys(gamelist2).sort().forEach(function (key) {
        //console.log(gamelist2[key])                    
        gamelist3.push(gamelist2[key])
    });
    console.log(gamelist3)
    var byAverage = gamelist3.slice(0);
    byAverage.sort(function (a, b) {
        return b.average_forever - a.average_forever;
    });
    console.log(byAverage)
    //console.log(ordered)
    ///console.log(gamelist2)
    //console.log(await getGlobalAchievementPercentages(currentProxy,730))
    //console.log(gameList)
    
        for (var i = 0; i < liczba/*byAverage.length*/; i++) {

            //gameinfo = await getSteamSpyAppDetails(currentProxy, byAverage[i].appid)
            //gameinfo = gameinfo.name
            if(render){
            gameinfo = byAverage[i].name
            new gameElement(main, byAverage[i], gameinfo, byAverage[i].name, getArt([byAverage[i].appid]))
            }
        }
    
    

}