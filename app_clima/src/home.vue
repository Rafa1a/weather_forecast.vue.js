<template>
  <h1 id="h1">App Clima</h1>

<div class="lista" :class="myfunciton">
  <div class="card" v-for="cidade in cidades" :key="cidade.id">
    <div class="card-img"></div>
    <h3>{{ cidade.name }}</h3>
    <h4>{{ cidade.description }}</h4>
    <div class="temperatura">{{ cidade.temp }}º</div>
  </div>
  
</div>
</template>

<script>
import './assets/estilo.css'

export default {
    data() {
    return {
      cidades: [
        
        {
          id: 8412,
          name: "Manaus",
          description: "Chuvas Fortes",
          icon: "09d",
          temp: "25",
        },
        {
          id: 8454,
          name: "Brasília",
          description: "Ensolarado",
          icon: "10d",
          temp: "27.4",
        },
      ],
    }
  },props: {
       consultartempo(){  
          var xmlhttp = new XMLHttpRequest();
          var url = "https://api.open-meteo.com/v1/forecast?latitude=-21.93&longitude=-50.51&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min&current_weather=true&timezone=America%2FSao_Paulo"
          
          xmlhttp.onreadystatechange = function(){
              if (this.readyState == 3){
                  console.log("carregando conteudo")
              }
              if(this.readyState == 4 && this.status == 200){
                  
                  
                  return myfunciton(this)
              }
            
          }
          xmlhttp.open("GET", url, true)
          xmlhttp.send()
          /*function myfunciton(arr){
            
            /*let novoitem= {
                    id: 8429,
                    name: "Rio de Janeiro",
                    description: "co",
                    icon: "01d",
                    temp: "25",
                  }
              this.cidades.push(novoitem)
          }*/
         
    }
    
  },
    computed: {
      myfunciton (){
        var myarr = JSON.parse(consultartempo.responseText)
        let novoitem= {
                    id: 8429,
                    name: "Rio de Janeiro",
                    description: myarr.current_weather,
                    icon: "01d",
                    temp: "25",
                  }
              this.cidades.push(novoitem)
      }
    }

}


</script>

<style scoped>

</style>