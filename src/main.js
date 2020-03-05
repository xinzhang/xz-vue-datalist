import Vue from 'vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import VueRouter from 'vue-router';
import App from './App.vue';
import ListCard from './components/ListCard';
import TableTodos from './components/TableTodos';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: ListCard,
    },
    {
        path: '/cards',
        component: ListCard,
    },
    {
        path: '/todos',
        component: TableTodos,
    },
];

const router = new VueRouter({ routes });

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
