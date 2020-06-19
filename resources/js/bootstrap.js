
import Vue from 'vue';
import axios from 'axios';
import Form from './utilities/form';
import PortalVue from 'portal-vue';
import VueSweetalert2 from 'vue-sweetalert2';

window.Vue = Vue;
window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.Form = Form;

Vue.use(PortalVue);
Vue.use(VueSweetalert2);