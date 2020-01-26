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
        div1.classList.add("players")
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
        var ach_desc = [];
        trophies = await getGlobalAchievementPercentages(currentProxy, appid);
        console.log(trophies);
        console.log(trophies.achievements.length)


       Object.keys(ach).sort().forEach(function (key) {
            labels.push(ach[key].name)
        });

        Object.keys(ach).sort().forEach(function (key) {
            ach_desc.push(ach[key].description)
        });

        console.log(ach_desc);
        labels_temp = labels;
        labels = labels.slice(0, 20);

        console.log(trophies)
        if(trophies.achievements[0]){
            for(i = 0; i < 20; i++) //push wartosci procentowej osiagniec 
            {
                data.push(Math.round(trophies.achievements[i]["percent"]));
    
            }
            for(i = 0; i < 20; i++) //definicja tablicy z losowymi kolorami dla słupków
        {
            var r = Math.floor(Math.random() * 256);
            var g = Math.floor(Math.random() * 256);
            var b = Math.floor(Math.random() * 256);
            var kolor_tlo = "rgba(" + r + "," + g + "," + b + "," + "0.7)";
            var border = "rgba(" + r + "," + g + "," + b + "," + "5)";
            backgroundColor.push(kolor_tlo);
            borderColor.push(border);
        }
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
                 yAxes: [
                      { 
                        fontColor:  "#a4d007",
                        id: 'y-axis-1',
                        type: 'linear',
                        position: 'left',
                        ticks: { min: 0, max: 100 , }
                     }, 
                    ],
                xAxes: [{
                ticks: {
                    fontColor: "#a4d007",
                    fontSize: 14,
                    stepSize: 1,
                    beginAtZero: true
                        }
                    }]
                }
            },
        legend:{
            labels:{
                fontColor:  "#a4d007",
            }
            }
        });

        }else{
            var ctx = document.getElementById('myChart')
            h = document.createElement("h1")
            h.innerText = "Procenty ukończenia osiągnięć przez użytkowników nie zostały publicznie udostępnione dla tej gry"
            h.classList.add("players")
            main_chart.insertBefore(h,ctx)
            main_chart.removeChild(ctx)
            h.style.paddingBottom = "50px"
            // ctx.style.width ="100%"
            // ctx.style.height="200px"
            // var ctx = ctx.getContext("2d");
            // ctx.font = "100px Arial";
            // ctx.fillText("Dla tej gry nie ma osiągnięć", 100, 200,400);
        }
        

        
        // console.log(labels);
        // console.log(data);
        // console.log(backgroundColor);


        line = document.createElement("div");
        line.style.height="1px";
        line.style.backgroundColor="black";
        line.style.width = "80px";
        main.appendChild(line);

        var y = 0;
        ach_table = document.createElement("table");
        ach_table.style.margin = "auto";
        ach_table.style.marginTop = "5%";
        ach_table.style.width = "100%";
        ach_table.classList.add("ach_table");
        var header = ach_table.createTHead();
        var h_row = header.insertRow(0);
        var h_cell1 = h_row.insertCell(0);
        var h_cell2 = h_row.insertCell(0);
        h_cell1.classList.add("header");
        h_cell2.classList.add("header");
        h_cell1.innerText = "Nazwa osiągnięcia";
        h_cell2.innerText = "Opis";
        ach_table.style.backgroundColor = "white";
        for(i = 1; i < labels.length; i++)
        {
            var row = ach_table.insertRow(i);
            cellx = row.insertCell(y)
            cellx.innerText = labels_temp[i];
            cellx2 = row.insertCell(1);
            cellx2.innerText = ach_desc[i];
        }



        main.appendChild(ach_table);

        }
        
    else
    {
        render = true
        alert("Dla tej gry nie ma osiągnięć!");
    }
}    
    


