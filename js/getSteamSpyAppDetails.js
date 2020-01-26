async function getSteamSpyAppDetails(currentProxy,appid){
    return await request(currentProxy+"steamspy.com/api.php?request=appdetails&appid="+ appid)
}