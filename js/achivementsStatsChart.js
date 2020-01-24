async function chart(e)
{
    render = false
    appid=e.currentTarget.gameid.appid
    count = await getNumberOfCurrentPlayers(currentProxy,appid);
    ach = await getAchievements(currentProxy, appid);
    if(ach.length >0)
    {
        render = false
        document.getElementById("main").innerHTML = "";
        
        main_chart = document.getElementById("main");
        div1 = document.createElement("table");
        
        var row = div1.insertRow(0);
        var row2 = div1.insertRow(1);
        div1.classList.add("chart");
        var cell1_1 = row.insertCell(0);
        var cell2_1 = row2.insertCell(0);
        cell1_1.style.fontSize = "80px"
        cell2_1.style.fontFamily = "";
        cell1_1.style.fontWeight = "bold";
        cell1_1.innerText = count;
        cell2_1.innerText = "Graczy w danym momencie";
        main.appendChild(div1);
        console.log(count);
        

        document.getElementById("main").innerHTML += "<canvas id='myChart' width='900px' height='600px'></canvas>";
        console.log(r);
        var labels = [];
        var data = [];
        var backgroundColor = [];
        var borderColor = [];
        trophies = await getGlobalAchievementPercentages(currentProxy, appid);
        console.log(trophies);
        console.log(trophies.achievements.length)


       Object.keys(ach).sort().forEach(function (key) {
            labels.push(ach[key].name)
        });
        labels = labels.slice(0, 20);


        for(i = 0; i < 20; i++) //push wartosci procentowej osiagniec 
        {
            data.push(Math.round(trophies.achievements[i]["percent"]));

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
        
    else
    {
        render = true
        alert("Dla tej gry nie ma osiągnięć!");
    }
}    
    


