import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

Vue.filter('uppercase', function (value: string) {
  if (!value) return ''
  return value.toUpperCase();
})

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
