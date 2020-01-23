async function getNumberOfCurrentPlayers(currentProxy,appid){
    res = await request(currentProxy + "https://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v1/?appid="+appid)
    return(res.response.player_count)
}