import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Profile from '../views/Profile.vue';
import MyProfile from '../views/MyProfile.vue';
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
    path: '/profile/:id',
    name: 'Profile',
    component: Profile,
    beforeEnter: (to, from, next) => {
      if(to === from) {
        location.reload()
      }
      store.dispatch('getUser', to.params.id);
     next();
    },
  },
  {
    path: '/myprofile/:id',
    name: 'MyProfile',
    component: MyProfile,
    beforeEnter: (to, from, next) => {
      const id = localStorage.getItem("user_id")
      store.dispatch('userRequest');
      if (store.state.user !== {}) {
        next()
      } else {
        next({ name: 'Login' });
        return
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
        return
      }
    },
  },
  {
    path: '/event/:id',
    name: 'Event',
    component: EventDetails,
  },
];
