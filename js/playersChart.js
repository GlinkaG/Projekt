async function playersChart(e)
{
    function addData(chart, label, data) {
        chart.data.labels.push(label);
        chart.data.datasets.forEach((dataset) => {
            dataset.data.push(data);
        });
        chart.update();
    }
    gamelist2 = await getSteamSpyTop100(currentProxy)
    gamelist3 = []


    Object.keys(gamelist2).sort().forEach(function (key) {
        //console.log(gamelist2[key])
        gamelist3.push(gamelist2[key])
    });
    //console.log(gamelist3)
    var byAverage = gamelist3.slice(0);
    byAverage.sort(function (a, b) {
        return b.average_forever - a.average_forever;
    });
    //console.log(byAverage)
gamelist2 = await getSteamSpyTop100(currentProxy)
    gamelist3 = []

    Object.keys(gamelist2).sort().forEach(function (key) {
        //console.log(gamelist2[key])
        gamelist3.push(gamelist2[key])
    });
    //console.log(gamelist3)
    var byAverage = gamelist3.slice(0);
    byAverage.sort(function (a, b) {
        return b.average_forever - a.average_forever;
    });
    //console.log(byAverage)

gamelist2 = await getSteamSpyTop100(currentProxy)
    gamelist3 = []

    Object.keys(gamelist2).sort().forEach(function (key) {
        //console.log(gamelist2[key])
        gamelist3.push(gamelist2[key])
    });
    //console.log(gamelist3)
    var byAverage = gamelist3.slice(0);
    byAverage.sort(function (a, b) {
        return b.average_forever - a.average_forever;
    });
    //console.log(byAverage)


    var apps = [];
    var names = [];
    var p_count = [];
    var backgroundColor = [];
    var borderColor = [];
    var labelx = 'Podzial ilości graczy w '+ e +'najpopularniejszych grach'
    for(i = 0; i < e; i++) //definicja tablicy z losowymi kolorami dla słupków
        {
            var r = Math.floor(Math.random() * 256);
            var g = Math.floor(Math.random() * 256);
            var b = Math.floor(Math.random() * 256);
            var kolor_tlo = "rgba(" + r + "," + g + "," + b + "," + "0.7)";
            var border = "rgba(" + r + "," + g + "," + b + "," + "5)";
            backgroundColor.push(kolor_tlo);
            borderColor.push(border);
        }

    main = document.getElementById("main");
    main.innerHTML = "<canvas id='myChart' width='800' height='800'></canvas>";
        
    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: names,
        datasets: [{
        label: labelx,
        data: p_count,
        backgroundColor,
        borderColor,
        borderWidth: 1
        }]
    },
    options: {
        cutoutPercentage: 40,
        responsive: true,

    }
    });
    myChart.canvas.parentNode.style.height = '85%';
    myChart.canvas.parentNode.style.width = '85%';

    Object.keys(byAverage).sort().forEach(function (key) {
        apps.push(byAverage[key].appid)
    });

    //console.log(apps);

    for(i = 0; i < e; i++)
    {
        var temp = await getNumberOfCurrentPlayers(currentProxy, byAverage[i].appid);
        addData(myChart, byAverage[i].name, temp)


        
    }
    //console.log(p_count);
    //console.log(names);

    
        

    
    



}