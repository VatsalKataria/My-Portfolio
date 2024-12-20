import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from 'vue'
import App from './App.vue'
import LandingPage from './components/LandingPage.vue';
import AboutMe from './components/AboutMe.vue';
import ContactMe from './components/ContactMe.vue';
import CollegeWork from './components/CollegeWork.vue';
import TimeLine from './components/TimeLine.vue';

const routes = [
  {path: '/', component: LandingPage},
  {path: '/aboutme', component: AboutMe},
  {path: '/timeline', component: TimeLine},
  {path: '/contactme', component: ContactMe},
  {path: '/collegework', component: CollegeWork}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})


createApp(App).use(router).mount('#app')
