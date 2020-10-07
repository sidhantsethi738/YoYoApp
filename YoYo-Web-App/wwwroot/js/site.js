$(document).ready(function () {
    
    count = 0;
    $("input").hide();
         Data = httpGet("https://localhost:44377/api/Fitness/FitnessData")
    console.log(Data);
    document.getElementById('circle').style.visibility = 'hidden';
    document.getElementById('endcircle').style.visibility = 'hidden';
    endcircle
    var q = 0;
    while (q < 15) {
        document.getElementsByClassName('dropvalues')[q].style.visibility = 'hidden';
        q++;
    }
  
    $("#imagebtn").click(function () {
        $("input").show();
        document.getElementById('buttons').style.visibility = 'hidden';
        document.getElementById('circle').style.visibility = 'visible'; 
        intervalId = setInterval(startTimer, 1000);
       ShuttleStart();    
    });
    reset();
    distanceReset();
    ShuttleReset();
});


function start() {


}
   function changename(id) {

    document.getElementById(id).value = "Warned";

    document.getElementById(id).disabled = true; 

}




function startTimer() {
   
    ++totalSeconds;
    hour = Math.floor(totalSeconds / 3600);
    minute = Math.floor((totalSeconds - hour * 3600) / 60);
    seconds = totalSeconds - (hour * 3600 + minute * 60);

    document.getElementById("timetaken").innerHTML = hour + ":" + minute + ":" + seconds + "   m";
}

function reset() {
    totalSeconds = 0;
    document.getElementById("timetaken").innerHTML = 0 + ":" + 0 + ":" + 0 + "   m";
}


function distanceStart(){

}

function distanceReset() {
    document.getElementById("distance").innerHTML = 0 +"   m";
}

function ShuttleStart(i = 0) {

    var i,j;


        j = i + 1;

        i = parseInt(i);
    j = parseInt(j);
    let maxLength = Data.length;

        var first = Data[i]["startTime"];
        var second = Data[j]["startTime"];

    var firsttime = first.split(":");
    var secondtime = second.split(":");

    var mm = (parseInt(secondtime[0]) - parseInt(firsttime[0])) * 60;
    var ss = (parseInt(secondtime[1]) - parseInt(firsttime[1])) ;
    shuttletime = mm + ss;

    var distance = 40;
    var Distancetravelled = distance / shuttletime;
    


        var time = parseInt(shuttletime) * 1000;

    var z = i;
    var totaldistance = 0;
   // console.log('time', time);

    if (i == 0) {

        totaldistance = 0;
    } else {
        i = i - 1;
        totaldistance = parseInt(Data[i]["accumulatedShuttleDistance"]);
    }

   

        window.setTimeout(function () {
        }, time);

    var k = 0;
    var progressvalue = 0;

 
        var y = setInterval(function () {

            document.getElementById("shuttle").innerHTML = shuttletime + "   s";
            document.getElementById("distance").innerHTML = parseFloat(totaldistance).toFixed(2); + "   m";
            document.getElementById("circletext").innerHTML = "Level" + Data[z]["speedLevel"] + "<br/>" + "Shuttle" + Data[z]["shuttleNo"] + "<br/>" + Data[z]["speed"] +"km/h" ;

         

            if (parseInt(shuttletime) > 0) {
                shuttletime--;
                totaldistance = totaldistance + Distancetravelled;


                var pro = 200 / shuttletime;
                if (k <= shuttletime) {
                  
                    progressvalue = progressvalue + (pro *1);
                    progressBar(progressvalue, 200);
                    
                }
            }
            else {
                if (maxLength == i) {
                    clearInterval(y);
                }


                else {
                    clearInterval(y);
                    ShuttleStart(j);
                }

            }

        }, 1000);
   
}
    

function ShuttleReset() {
    document.getElementById("shuttle").innerHTML = 0 + "   s";
}


function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // false for synchronous request
    xmlHttp.send(null);
    
    var data = JSON.parse(xmlHttp.responseText);
    return data ;
}

function progressBar(progressVal, totalPercentageVal = 100) {
    var strokeVal = (4.64 * 33.3) / totalPercentageVal;
    var x = document.querySelector('.progress-circle-prog');
    x.style.strokeDasharray = progressVal * (strokeVal) + ' 999';
    var start = new Date().getTime();

    setTimeout(function () {
        var now = (new Date().getTime()) - start;
        var progress = now / 700;
        if (progress < 1) setTimeout(arguments.callee, 10);
    }, 10);

}


function stopbutton(id) {

    count++;
    document.getElementById(id).style.visibility = 'hidden';
    var index = parseInt(id) - 1;
    document.getElementsByClassName('dropvalues')[index].style.visibility = 'visible';

    var arr = [];
    var s;
    for (s = 0; s < Data.length; s++) {
        var obj = Data[s]["speedLevel"] + "-" + Data[s]["shuttleNo"]
        arr.push(obj);
    }
    var val1 = id
    var val2 = "+"
    var final = val1.concat(val2);
    var select = document.getElementById(final);

    for (var n = 0; n < arr.length; n++) {
        var opt = arr[n];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    }

    var x = document.getElementById("circletext").innerHTML;
    var ssval = x.split('<br>');
    var ssval1 = ssval[0].replace("Level", "");
    var ssva2 = ssval[1].replace("Shuttle", "");
   
    var fvalue = ssval1 + "-" + ssva2;
    var a = arr.indexOf(fvalue);

    if (a == 0) {
        showvalue = arr[a];
    } else {
        showvalue = arr[a-1];
    }

    document.getElementById(final).value = showvalue;


    if (count == 15) {
        TestEnds();
    }  
}

function TestEnds() {
 

    document.getElementById('circle').style.visibility = 'hidden';
    document.getElementById('endcircle').style.visibility = 'visible';
    document.getElementsByClassName('row')[0].style.visibility = 'hidden';
    
}