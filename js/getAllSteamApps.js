async function getAllSteamApps(currentProxy){
    return await request(currentProxy+"https://api.steampowered.com/ISteamApps/GetAppList/v2/")
}