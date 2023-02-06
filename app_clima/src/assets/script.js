    
function consultartempo(){  
    var xmlhttp = new XMLHttpRequest()
    var url = "https://api.open-meteo.com/v1/forecast?latitude=-21.93&longitude=-50.51&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min&current_weather=true&timezone=America%2FSao_Paulo"

    xmlhttp.onreadystatechange = function(){
        if (this.readyState == 3){
            console.log("carregando conteudo")
        }
        if(this.readyState == 4 && this.status == 200){
            var myarr = JSON.parse(this.responseText)
            document.getElementById("#app").innerHTML = myarr.current_weather
        }
    }
    
    xmlhttp.open("GET", url, true)
    xmlhttp.open()
    
}