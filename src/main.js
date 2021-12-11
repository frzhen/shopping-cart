import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import '../node_modules/simple-line-icons/css/simple-line-icons.css'
import '../node_modules/bulma/css/bulma.min.css';
import { createApp } from 'vue';
import App from "./App";
import router from './router';
import store from './store';

createApp(App).use(router).use(store).mount('#app');
