// src/router.ts

import Vue from 'vue';
import Router from 'vue-router';
import Main from './views/Main.vue';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/item/:base64data',
      name: 'item',
      component: () => import(/* webpackChunkName: "item" */ './views/Item.vue'),
      props: true,
    },
    {
      path: '/:base64state?',
      name: 'main',
      component: Main,
    },
  ],
});
