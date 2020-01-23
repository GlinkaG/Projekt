async function getSteamSpyAppDetails(currentProxy,appid){
    //return "test"
    return await request(currentProxy+"steamspy.com/api.php?request=appdetails&appid="+ appid)
    //return await request(currentProxy+"steamspy.com/api.php?request=top100in2weeks")
}