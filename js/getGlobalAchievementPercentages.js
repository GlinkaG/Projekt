async function getGlobalAchievementPercentages(currentProxy,appid){
    //http://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v0002/?gameid=440&format=xml
    res = await request(currentProxy + "https://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v0002/?gameid="+appid)
    console.log(currentProxy)
    return(res.achievementpercentages)
}