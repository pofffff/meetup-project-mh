import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import User from '../views/User.vue';
import AddFestival from '../views/AddFestival.vue';
import FestivalDetails from '../views/FestivalDetails.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/User',
    name: 'User',
    component: User,
  },
  {
    path: '/AddFestival',
    name: 'AddFestival',
    component: AddFestival,
  },
  {
    path: '/festival',
    name: 'FestivalDetails',
    component: FestivalDetails,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
