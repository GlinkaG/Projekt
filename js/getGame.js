async function getGame(currentProxy,appid){
    return await request(currentProxy+"https://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v2/?key=5634E7380C1B44C8BC5CFDFEC4814226&appid=" + appid)
}