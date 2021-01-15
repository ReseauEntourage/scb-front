import { createApp } from 'vue';
import VueMarkdownIt from 'vue3-markdown-it';
import App from './App.vue';
import router from './router';
import store from './store';

createApp(App)
  .use(store)
  .use(router)
  .use(VueMarkdownIt)
  .mount('#app');
