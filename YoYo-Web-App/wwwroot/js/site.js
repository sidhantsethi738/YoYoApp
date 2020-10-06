$(document).ready(function () {


         Data = httpGet("https://localhost:44377/api/Fitness/FitnessData")
    console.log(Data);
  


    $("#imagebtn").click(function () {

        document.getElementById('buttons').style.visibility = 'hidden';
        intervalId = setInterval(startTimer, 1000);
      //  startTimer();
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

function stop() {
    alert("stop called")
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
function changename(id) {

    document.getElementById(id).value = "Warned";

    document.getElementById(id).disabled = true;

}

function stop() {
    alert("Stop Called")
}

function distanceStart(){

}

function distanceReset() {
    document.getElementById("distance").innerHTML = 0 +"   m";
}

function ShuttleStart() {



    var i, j;

    /*for (i = 0; i < Data.length;i++)*/  do {

        i = 0;
        j = i + 1;

        i = parseInt(i);
        j = parseInt(j);

        var first = Data[i]["startTime"].replace(":", "");
        var second = Data[j]["startTime"].replace(":", "");
        shuttletime = second - first;

        var time = parseInt(shuttletime) * 1000;

        shuttlesec(shuttletime, time);

        //window.setTimeout(function ()  {
        //}, time);


        //var y = setInterval(function () {

        //    document.getElementById("shuttle").innerHTML = shuttletime + "   s";



        //    if (parseInt(shuttletime) > 0) {
        //        shuttletime--;

        //    }
        //    else {
        //        clearInterval(y);

        //    }

        //}, 1000);

        i++;

    }
    while (i < Data.length )
    }


function shuttlesec(shuttletime, time){
    //setTimeout(function () {


    //}, time);

    sleep(time);

      var y = setInterval(function () {

            document.getElementById("shuttle").innerHTML = shuttletime + "   s";



            if (parseInt(shuttletime) > 0) {
                shuttletime--;

            }
            else {
                clearInterval(y);

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

