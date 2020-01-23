async function chart(){
    document.getElementById("main").innerHTML = "<canvas id='myChart' width='900px' height='600px'></canvas>";
    console.log(r);
    var labels = [];
    var data = [];
    var backgroundColor = [];
    var borderColor = [];
    trophies = await getGlobalAchievementPercentages(currentProxy, 730);
    console.log(trophies);
    console.log(trophies.achievements.length)

    for(i = 0; i < 20; i++)
    {
        //push nazw 20 pierwszych osiagniec do tablicy
        labels.push(trophies.achievements[i]["name"]);
    }
    for(i = 0; i < 20; i++) //push wartosci procentowej osiagniec 
    {
        data.push(trophies.achievements[i]["percent"]);

    }

    for(i = 0; i < 20; i++) //definicja tablicy z losowymi kolorami dla słupków
    {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        var kolor_tlo = "rgba(" + r + "," + g + "," + b + "," + "0.2)";
        var border = "rgba(" + r + "," + g + "," + b + "," + "1)";
        backgroundColor.push(kolor_tlo);
        borderColor.push(border);
    }
    console.log(labels);
    console.log(data);
    console.log(backgroundColor);
    

var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels,
        datasets: [{
            label: 'Procent graczy którzy zdobyli osiągnięcie: ',
            data,
            backgroundColor,
            borderColor,
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

}

