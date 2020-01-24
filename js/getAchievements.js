async function getAchievements(currentProxy,appid){
    //http://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v0002/?gameid=440&format=xml
    res = await request(currentProxy + "https://api.achievementstats.com/games/" + appid + "/achievements/?key=1035e2ae485de4fc532486763");
    //console.log(currentProxy);
    console.log(res);
    return(res);
}