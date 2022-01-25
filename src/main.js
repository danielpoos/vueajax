import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Statue from './components/Statues.vue'
import Statues from './components/Statues.vue'
import Info from './components/Info.vue'

Vue.use(VueRouter)
Vue.config.productionTip = false
const routes =[
  {
    path:'/',
    component:Info,
  },{
    path:'/statues',
    component:Statues,
  },{
    path:'/statue/:id',
    component:Statue,
  }
];
const router = new VueRouter({
  routes
})
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
