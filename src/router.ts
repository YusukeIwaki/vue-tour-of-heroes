import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/heros',
      name: 'heros',
      component: () => import('./components/AppHeros.vue')
    },
    {
      path: '/heros/:id',
      name: 'hero',
      component: () => import('./components/AppHeroDetail.vue')
    },
    {
      path: '/dashboard',
      name: "dashboard",
      component: () => import('./components/Dashboard.vue')
    },
    {
      path: '/',
      redirect: '/dashboard'
    }
  ]
});