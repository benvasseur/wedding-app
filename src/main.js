import { createApp } from 'vue';
import Particles from 'vue3-particles';
import App from './App.vue';
import './assets/main.css';
import 'vuetify/styles';
import vuetify from './plugins/vuetify';

createApp(App)
  .use(Particles)
  .use(vuetify)
  .mount('#app');
