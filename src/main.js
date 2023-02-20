import { createApp } from 'vue';
import Particles from 'vue3-particles';
import App from './App.vue';
import './assets/main.css';

createApp(App)
  .use(Particles)
  .mount('#app');
