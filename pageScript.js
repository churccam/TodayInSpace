//date
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
console.log(date);
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
var dateString = month[today.getMonth()] + " " + today.getDate() + ", " + today.getFullYear();
console.log(dateString);
document.getElementById("dateString").append(dateString);

//api urls
var apodURL = "https://api.nasa.gov/planetary/apod?hd=True&api_key=RsruSEFd6QbXKYSaygny3NgtnWKkB1tBbzdb2d8A"
var neoURL = "https://api.nasa.gov/neo/rest/v1/feed?api_key=RsruSEFd6QbXKYSaygny3NgtnWKkB1tBbzdb2d8A"
var weatherURL = "https://api.nasa.gov/DONKI/notifications?type=all&api_key=RsruSEFd6QbXKYSaygny3NgtnWKkB1tBbzdb2d8A"
var curiosityInfoURL = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/?api_key=RsruSEFd6QbXKYSaygny3NgtnWKkB1tBbzdb2d8A";
var imagesURL = "https://images-api.nasa.gov/search?q=" + month[today.getMonth()]


//ajax call
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


//pic a day
function loadAPOD(xhttp){
    var apodObj = xhttp.responseText;
    apodObj = JSON.parse(apodObj);
    console.log("A Pic a Day");
    console.log(apodObj);

}

//near earth objects
function loadNEO(xhttp){
    var neoObj = xhttp.responseText;
    neoObj = JSON.parse(neoObj);
    console.log("Near Earth Objects");
    console.log(neoObj);
}

//weather
function loadWeather(xhttp){
    var weatherObj = xhttp.responseText;
    weatherObj = JSON.parse(weatherObj);
    console.log("Space Weather");
    console.log(weatherObj);
}

//rover
function loadCuriosity(xhttp){
    var curiosityObj = xhttp.responseText;
    curiosityObj = JSON.parse(curiosityObj);
    console.log("Curiosity info");
    console.log(curiosityObj);
    console.log(curiosityObj["rover"]["max_sol"]);
    maxSol = curiosityObj["rover"]["max_sol"]
    imageUrl = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=" + maxSol + "&camera=NAVCAM&api_key=RsruSEFd6QbXKYSaygny3NgtnWKkB1tBbzdb2d8A";
    
    loadDoc(imageUrl, loadRoverImage);
    function loadRoverImage(xhttp){
        var imageObj = xhttp.responseText;
        imageObj = JSON.parse(imageObj);
        console.log("Curiosity Image");
        console.log(imageObj);
    }
    
}



loadDoc(apodURL, loadAPOD);
loadDoc(neoURL, loadNEO);
loadDoc(weatherURL, loadWeather);
loadDoc(curiosityInfoURL, loadCuriosity);
