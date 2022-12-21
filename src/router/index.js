import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeVue from '../views/HomeVue.vue'
import UserVue from '../views/UserVue.vue'
import Main from '../views/Main.vue'
import MallManage from '../views/Mall'
import PageOne from '../views/PageOne'
import PageTwo from '../views/PageTwo'
Vue.use(VueRouter)
const routes = [
  {
    path:"/",
    name:"Main",
    component:Main,
    redirect:'/home',
    children:[
      {
        path:'home',
        name:'HomeVue',
        component: HomeVue //首页
      },
      {
        path:'user',
        name:'UserVue',
        component: UserVue //用户管理
      },
      {
        path:'mall',
        name:'MallManage',
        component: MallManage //商品管理
      },
      {
        path:'page1',
        name:'PageOne',
        component: PageOne //页面1
      },
      {
        path:'page2',
        name:'PageTwo',
        component: PageTwo //页面2
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
