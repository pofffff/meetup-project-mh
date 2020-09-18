import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Profile from '../views/Profile.vue';
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
    path: '/profile',
    name: 'Profile',
    component: Profile,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("token")) {
        console.log("here111")
        next();
      } else {
        next('/');
      }
    }
  },
  {
    path: '/addevent',
    name: 'AddEvent',
    component: AddEvent,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("token")) {
        console.log("here222")

        next();
      } else {
        next('/');
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
  mode: 'history',
  routes,
});

export default router;
