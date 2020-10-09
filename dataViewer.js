var show_temp=0;

function Buscar(){
    
    if(Empty("city")==true){
        alert("Hay que ingresar una ciudad");
    }
    else{
        document.getElementById('btnSrch').style.dislpay="none";
        document.getElementById('btnSrch').style.dislpay="inline";
        cityText=document.getElementById('city').value;
        
        Climate(cityText);
        document.getElementById('weather_report').style.display="inline";
        
    }
}
//Función reutilizable: checa si un elemento está vacío
function Empty(element){
    var text=document.getElementById(element).value;
    if(text==""){
        document.getElementById(element).focus();
        return true;
    }
    else{
        return false;
    }
    
}
//Función reutilizable: llama una función al presionar enter
document.onkeydown=function(evt){
    var keyCode = evt ? (evt.which ? evt.which : evt.keyCode) : event.keyCode;
    if(keyCode == 13){
        Buscar();
    }
}

function weather_icon(arr){
    var ico;
    switch(arr.weather[0].main){
        case "Clouds":
            ico="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.newdesignfile.com%2Fpostpic%2F2009%2F10%2Fmostly-cloudy-weather-icon_79078.png&f=1&nofb=1";
            break;
        case "Clear":
            ico="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn3.iconfinder.com%2Fdata%2Ficons%2Ftango-icon-library%2F48%2Fweather-clear-128.png&f=1&nofb=1";
            break;
        case "Haze":
            ico="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ffiles.softicons.com%2Fdownload%2Fweb-icons%2Fandroid-weather-icons-by-bharath-prabhuswamy%2Fpng%2F128x128%2FHaze.png&f=1&nofb=1";
            break;
        case "Rain":
            ico="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn3.iconfinder.com%2Fdata%2Ficons%2Fpicons-weather%2F57%2F15_heavy_rain-128.png&f=1&nofb=1";
            break;
        case "Thunderstorm":
            ico="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.flaticon.com%2Ficons%2Fpng%2F128%2F577%2F577584.png&f=1&nofb=1";
        break;
    }

    return ico;
}