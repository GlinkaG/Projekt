async function getSteamSpyTop100(currentProxy){
    return await request(currentProxy+"steamspy.com/api.php?request=top100in2weeks")
}