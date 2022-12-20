import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeVue from '../views/HomeVue.vue'
import UserVue from '../views/UserVue.vue'
import Main from '../views/Main.vue'
Vue.use(VueRouter)
const routes = [
  {
    path:"/",
    name:"Main",
    component:Main,
    children:[
      {
        path:'home',
        name:'HomeVue',
        component: HomeVue
      },
      {
        path:'user',
        name:'UserVue',
        component: UserVue
      },
    ]
  },

  
]
const router = new VueRouter({
  mode:"history",
  base: process.env.BASE_URL,
  routes
});
export default router;
