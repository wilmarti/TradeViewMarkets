import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import( '../views/Home.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import( '../views/Home.vue')
  },
   {
    path: '/cerrar',
    name: 'cerrar',
    component: () => import( '../views/Cerrar.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/market',
    name: 'market',
    component: () => import('../components/Market.vue')
  },
  {
    path: '/forex',
    name: 'forex',
    component: () => import('../components/Forex.vue')
  },
  {
    path: '/stocks',
    name: 'stocks',
    component: () => import('../components/Stocks.vue')
  },
  {
    path: '/futures',
    name: 'futures',
    component: () => import('../components/Futures.vue')
  },
  {
    path: '/tradegatehub',
    name: 'tradegatehub',
    component: () => import('../components/Tradegatehub.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  }
  ,
  {
    path: '/contacto',
    name: 'contacto',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contacto.vue')
  }
  ,
  {
    path: '/freedemo',
    name: 'freedemo',
    component: () => import(/* webpackChunkName: "about" */ '../components/Demo.vue')
  }



]



Vue.config.productionTip = false;

/* new Vue({
  router,
  render: h => h(App)
}).$mount("#app"); */


const router = new VueRouter({
  routes
})

export default router
