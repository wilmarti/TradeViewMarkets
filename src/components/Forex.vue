<template>
    <div>
    <h1>COMPONENTE FOREX</h1>
        <!--     //llamado al componente -->
        <Market/>
    </div>
</template>


<script>
import Market from '../components/Market.vue'
export default {
  name: "App",

  data: () => ({
    //
    
  }),


  components: {
      Market
    },



};
</script>


