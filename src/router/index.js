import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import User from '../views/User.vue';
import AddEvent from '../views/AddEvent.vue';
import EventDetails from '../views/EventDetails.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/user',
    name: 'User',
    component: User,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("user_id")) {
        next();
      } 
    }
  },
  {
    path: '/addfestival',
    name: 'AddEvent',
    component: AddEvent,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("user_id")) {
        next();
      } 
    }
  },
  {
    path: '/event',
    name: 'EventDetails',
    component: EventDetails,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
