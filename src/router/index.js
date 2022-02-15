import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import store from "../store/index.js";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: () => {
       store.commit('showLoader');
    },

  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.afterEach(() => {
  store.commit('hideLoader');
})

export default router;
