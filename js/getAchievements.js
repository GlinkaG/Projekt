async function getAchievements(currentProxy,appid){
    res = await request(currentProxy + "https://api.achievementstats.com/games/" + appid + "/achievements/?key=1035e2ae485de4fc532486763");
    return(res);
}