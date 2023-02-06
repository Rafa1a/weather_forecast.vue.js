<template>
  <h1 id="h1">App Clima</h1>

<div class="lista" >
  <div class="card" v-for="cidade in cidades" :key="cidade.id" :class="{cardchuva:cidade.chuva}">
    <div class="card-img" :class="{ensolarado:cidade.ensolarado,nublado: cidade.nublado,chuva:cidade.chuva}"></div>
    <h3>{{ cidade.name }}</h3>
    <h4>{{ cidade.description }}</h4>
    <div class="temperatura">{{ cidade.temp }}º</div>
  </div>
  
</div>
</template>

<script>
import './assets/estilo.css'
import axios from "axios";
export default {
    data() {
    return {
      cidades: [],
    }
  }, 
    mounted() {
      var cid = this
      function chamada(url,nome,id){
      
      axios.get(url) 
      .then(res => {
        var dados = res.data;
         function dclima(clima){
          
          if(clima == 0){
            return "Céu limpo"
          }else if (clima==1 || clima == 2 || clima == 3){
            return "Parcialmente nublado"
          }else if (clima==45 || clima==48 ){
            return "Nevoeiro"
          }else if (clima==51 || clima==53 || clima==55){
            return "Garoa"
          }else if (clima==56 || clima==57){
            return "Garoa Congelante"
          }else if (clima==61 || clima==63 || clima==65){
            return "Chuva"
          }else if (clima==66 || clima==67){
            return "Chuva Congelante"
          }else if (clima==80 || clima==81 || clima==82){
            return "Pancadas de chuva"
          }
        }
        function ieclima(clima){
          if (clima==0){
            return true;
          }else 
          return false
        }
        function inclima(clima){
          if (clima==1 || clima == 2 || clima == 3 || clima==51 || clima==53 || clima==55 || clima==56 || clima==57){
            return true;
          }else 
          return false
        }
        
        function icclima(clima){
          if (clima==61 || clima==63 || clima==65 || clima==66 || clima==67 || clima==80 || clima==81 || clima==82){
            return true;
          }else 
          return false
        }
        let novoitem = {
          id: id,
          name: nome,
          description: dclima(dados.current_weather.weathercode),
          ensolarado:ieclima(dados.current_weather.weathercode),
          nublado:inclima(dados.current_weather.weathercode),
          chuva:icclima(dados.current_weather.weathercode),
          temp: dados.current_weather.temperature,
        }
        cid.cidades.push(novoitem)
        
      })
    }
    chamada("https://api.open-meteo.com/v1/forecast?latitude=-21.93&longitude=-50.51&hourly=temperature_2m,weathercode&daily=temperature_2m_max,temperature_2m_min&current_weather=true&timezone=America%2FSao_Paulo","tupã",8185);

    chamada("https://api.open-meteo.com/v1/forecast?latitude=-15.78&longitude=-47.93&hourly=temperature_2m,weathercode&daily=temperature_2m_max,temperature_2m_min&current_weather=true&timezone=America%2FSao_Paulo","DistritoFederal",8182);
    
    chamada("https://api.open-meteo.com/v1/forecast?latitude=-23.55&longitude=-46.64&hourly=temperature_2m,weathercode&daily=temperature_2m_max,temperature_2m_min&current_weather=true&timezone=America%2FSao_Paulo","São paulo",8188)
  }

}


</script>

<style scoped>

</style>
