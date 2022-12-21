import Vue from 'vue'
import App from './App.vue'
import { 
  Button,
  Select,
  Container,
  Aside,
  Header,
  Main } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';
Vue.config.productionTip = false;
Vue.use(Button);
Vue.use(Select);
Vue.use(Container);
Vue.use(Aside);
Vue.use(Header);
Vue.use(Main);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
