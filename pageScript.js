//date
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
console.log(date);

var apodURL = "https://api.nasa.gov/planetary/apod?hd=True&api_key=RsruSEFd6QbXKYSaygny3NgtnWKkB1tBbzdb2d8A"
var neoURL = "https://api.nasa.gov/neo/rest/v1/feed?api_key=RsruSEFd6QbXKYSaygny3NgtnWKkB1tBbzdb2d8A"
var weatherURL = "https://api.nasa.gov/DONKI/notifications?type=all&api_key=RsruSEFd6QbXKYSaygny3NgtnWKkB1tBbzdb2d8A"
var curiosityInfoURL = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/?api_key=RsruSEFd6QbXKYSaygny3NgtnWKkB1tBbzdb2d8A";
var opportunityInfoURL = "https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/?api_key=RsruSEFd6QbXKYSaygny3NgtnWKkB1tBbzdb2d8A";
var spiritInfoURL = "https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/?api_key=RsruSEFd6QbXKYSaygny3NgtnWKkB1tBbzdb2d8A";


function loadDoc(url, cFunction) {
  var xhttp;
  xhttp=new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      cFunction(this);
    }
 };
  xhttp.open("GET", url, true);
  xhttp.send();
}



function loadAPOD(xhttp){
    var apodObj = xhttp.responseText;
    apodObj = JSON.parse(apodObj);
    console.log("A Pic a Day");
    console.log(apodObj);
}

function loadNEO(xhttp){
    var neoObj = xhttp.responseText;
    neoObj = JSON.parse(neoObj);
    console.log("Near Earth Objects");
    console.log(neoObj);
}

function loadWeather(xhttp){
    var weatherObj = xhttp.responseText;
    weatherObj = JSON.parse(weatherObj);
    console.log("Space Weather");
    console.log(weatherObj);
}

loadDoc(apodURL, loadAPOD);
loadDoc(neoURL, loadNEO);
loadDoc(weatherURL, loadWeather);