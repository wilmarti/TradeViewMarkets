<!-- /* Vista principal de la aplicacion */ -->
<template fluid>
  <div>
    <!-- <v-container fluid ml-0 mt-0 pa-0 ma-0> -->
    <v-row class="mb-6 pa-0" no-gutters style="height:650px">
      <v-col sm="6" cols="12">
        <v-card
          tile
          height="650"
          max-height="650"
          max-width="800"
          style="background: linear-gradient(0deg,rgba(218, 218, 218, 1) 76%,rgba(24, 31, 41, 1) 100%)"
          class="text-center grey d-flex flex-column align-center justify-center"
        >
          <v-row style="color:white; font-size: 11px; width: 740px;" cols="6">
            <v-col>      
              <v-btn text :to="{name:'market'}"
              style="color:white; font-size: 10px; text-transform: capitalize; " cols="6"
              small
              >
                Market
            </v-btn>
            </v-col>
            <v-col>      
              <v-btn text :to="{name:'market'}"
              style="color:white; font-size: 10px; text-transform: capitalize; " cols="6"
              small
              >
                Company
            </v-btn>
            </v-col>
            <v-col>      
              <v-btn text :to="{name:'market'}"
              style="color:white; font-size: 10px; text-transform: capitalize; " cols="6"
              small
              >
              Accounts
            </v-btn>
            </v-col>   
            <v-col>      
              <v-btn text :to="{name:'market'}"
              style="color:white; font-size: 10px; text-transform: capitalize; " cols="6"
              small
              >
              Platforms
            </v-btn>
            </v-col>                      
            <v-col>      
              <v-btn text :to="{name:'market'}"
              style="color:white; font-size: 10px; text-transform: capitalize; " cols="6"
              small
              >
              Pricing
            </v-btn>
            </v-col> 
          </v-row>

          <v-row style=" align-items: center; align-self: center;" cols="6">
            <v-img sm="6" cols="12"
              lazy-src="../assets/Computador_sin_Fondo.png"
              src="../assets/Computador_sin_Fondo.png"
              cover
              class="text-white"
            >
            </v-img>
          </v-row>
        </v-card>
      </v-col>

      <v-col sm="6" md="6">
        <v-card
          class="text-center grey d-flex flex-column align-center justify-center"
          height="650"
          max-height="650"
          max-width="800"
          tile
          color="#181f29"
        >
          <v-row style="color:white; font-size: 11px; width: 380px;" cols="12" sm="6" md="6">
            <v-col>      
              <v-btn text :to="{name:'market'}"
              style="color:white; font-size: 10px; text-transform: capitalize; " cols="6"
              small
              >
              Introducing Brokers
            </v-btn>
            </v-col>     
            
            <v-col>      
              <v-btn text :to="{name:'market'}"
              style="color:white; font-size: 10px; text-transform: capitalize; " cols="6"
              small
              >
              Educations
            </v-btn>
            </v-col>            

            <v-col>      
              <v-btn text :to="{name:'market'}"
              style="color:white; font-size: 10px; text-transform: capitalize; " cols="6"
              small
              >
              Support
            </v-btn>
            </v-col> 

          </v-row>
          <v-row style=" align-items: center; align-self: center;" cols="12" sm="6" md="6">
            <v-img cols="12" sm="6" md="6"
              max-height="300"
              max-width="400"
              lazy-src="../assets/Communi.png"
              src="../assets/Communi.png"
              cover
              class="text-white"
            >
            </v-img>
          </v-row>
          <v-row
            style="color:#ACAEB2; font-size: 10px; width: 400px;  align-self: center; align-content: center;"
          >
            <v-col
              >Free Download for Tradeview Users
              <br />
              <br />
              <v-btn class="ma-2" outlined color="#ACAEB2" small dark :to="{name:'contacto'}">
                Contact your Broker
              </v-btn>
            </v-col>
            <v-divider
              style="color:#ACAEB2; width: 400px;"
              dark
              vertical
            ></v-divider>
            <v-col
              >Dont have a Tradeview Account yet?
              <br />
              <br />
              <v-btn class="ma-2" color="#FF0000" small dark :to="{name:'freedemo'}">
                Get a free Demo
              </v-btn>
            </v-col>
          </v-row>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>


<script>
import Home from '../views/Home.vue'

export default {
    name: 'Home',
  
    data: () => ({
        
    }),



    components: {
      Home
    },

    methods:{
      prueba(){
        this.$router.push("/market").catch(()=>{});
      }
    }

 
  }

</script>


