import Vue from 'vue';
import VueRouter from 'vue-router';
import HelloWorld from '../components/HelloWorld';
import ListCard from '../components/ListCard';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HelloWorld,
    },
    {
        path: '/cards',
        name: 'Cards',
        component: ListCard,
        props: { title: 'List of Cards' },
    },
    {
        path: '/todos',
        name: 'Todos',
        component: () => import(/* webpackChunkName: "todo" */ '../components/TableTodos.vue'),
    },
    // {
    //     path: '/examples',
    //     name: 'Todos',
    //     component: ,
    // },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
