<template color="red">
  <div>
    <v-card
    color="grey lighten-4"
    flat
    height="200px"
    tile
  >
    <v-toolbar flat tile dark color="#181f29">
      <router-link to="/Home">
        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          max-height="100"
              max-width="200"
          src="./assets/logo.jpg"
        />
      </router-link>
      <!--   <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

      <!-- <v-toolbar-title>Vuetify</v-toolbar-title> -->

      <v-spacer></v-spacer>
      <div xs12 >
      <v-btn x-small :to="{ name: 'forex' }">
        FOREX
      </v-btn>

      <v-btn x-small color="#181f29" :to="{ name: 'stocks' }">
        STOCKS
      </v-btn>

      <v-btn
        x-small
        color="#181f29"
        :to="{ name: 'futures' }"
      >
        FUTURES
      </v-btn>
      <v-btn
        x-small
        color="#181f29"
        :to="{ name: 'tradegatehub' }"
      >
        TradeGATEHub
      </v-btn>
      </div>

      <v-spacer></v-spacer>
      <v-spacer></v-spacer>

           
      <div>
        <v-breadcrumbs
          style="color:red"
          :items="items"
          divider="|"
        ></v-breadcrumbs>
      </div>


    </v-toolbar>
  </v-card>

    
<!--     //componente home -->
    <Home/>

    
      <router-view />
    
  </div>
</template>

<script>
import auth from "@/auth";
import store from "./store/index.js";

export default {
  name: "App",

  data: () => ({
    //
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    items: [
      {
        text: "Log In",
        disabled: false,
        to: "login"
      },
      {
        text: "Contact Us",
        disabled: false,
        to: "contacto",
      },
      {
        text: "English",
        disabled: true,
        href: "breadcrumbs_link_2",
      },
    ],
  }),

  methods:{
    prueba(){
      this.$router.push("/forex").catch(()=>{}); 
    }
  },



};
</script>


