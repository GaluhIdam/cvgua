import axios from 'axios';
window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

try {
    require('bootstrap');
} catch (e) {}

import Vue from 'vue'
import router from './router'

Vue.component('navbar', require('./components/Header.vue').default);
Vue.component('fotbar', require('./components/Footer.vue').default);
Vue.component('topbar', require('./components/Topbar.vue').default);

const app = new Vue({
    el: '#app',
    router,
});
