async function getGameList(currentProxy){
    //http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=XXXXXXXXXXXXXXXXX&steamid=76561197960434622&format=json
    response = await request(currentProxy+"http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=5634E7380C1B44C8BC5CFDFEC4814226&steamid=76561198106108238&format=json")
    gameList = response.response.games
    return await gameList
}