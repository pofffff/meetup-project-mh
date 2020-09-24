import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Profile from '../views/Profile.vue';
import AddEvent from '../views/AddEvent.vue';
import Event from '../views/Event.vue';
import store from '../store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    beforeEnter: (to, from, next) => {
      store.dispatch('userRequest').then(() => {
        if (localStorage.getItem('token')) {
          next();
        } else {
          next({ name: 'Login' });
        }
      });
    },
  },
  {
    path: '/addevent',
    name: 'AddEvent',
    component: AddEvent,
    beforeEnter: (to, from, next) => {
      store.dispatch('userRequest');
      if (localStorage.getItem('token')) {
        next();
      } else {
        next({ name: 'Login' });
      }
    },
  },
  {
    path: '/event/:id',
    name: 'Event',
    component: Event,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
