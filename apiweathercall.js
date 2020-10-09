var request = new XMLHttpRequest();

var cityText = '';

Climate();

function Climate(cityText) {

    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            show();
        }
    };

    request.open('GET', `https://api.openweathermap.org/data/2.5/weather?q=${cityText},mx&appid=43b08b0f2e377cf57718309a81fef341`, true);

    request.send();
}

function show(){
    var arr;
    arr=JSON.parse(request.responseText);
    console.log(arr);
    document.getElementById('ciudad').innerHTML=cityText;
    document.getElementById('temp_max').innerHTML=(parseInt(arr.main.temp_max))/10+" ºC";
    document.getElementById('temp_act').innerHTML=(parseInt(arr.main.temp))/10+" ºC";
    document.getElementById('temp_min').innerHTML=(parseInt(arr.main.temp_min))/10+" ºC";
    var ico=weather_icon(arr);
    document.getElementById('weather_icon').src=ico;

}