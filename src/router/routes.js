import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Profile from '../views/Profile.vue';
import AddEvent from '../views/AddEvent.vue';
import EventDetails from '../views/EventDetails.vue';
import store from '../store';

export default [
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
      store.dispatch('userRequest');
      if (store.state.user !== {}) {
        next();
      } else {
        next({ name: 'Login' });
      }
    },
  },
  {
    path: '/addevent',
    name: 'AddEvent',
    component: AddEvent,
    beforeEnter: (to, from, next) => {
      store.dispatch('simpleAuth');
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
    component: EventDetails,
  },
];
