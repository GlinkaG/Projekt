async function getSteamSpyTop100(currentProxy){
    //res = await request(currentProxy+"steamspy.com/api.php?request=top100in2weeks")
    //res.forEach(function (arrayItem) {
    //    var x = arrayItem;
    //    console.log(x);
    //});
    //console.log(res["730"])
    return await request(currentProxy+"steamspy.com/api.php?request=top100in2weeks")
}