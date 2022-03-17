import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/cv',
        name: 'cv',
        component: () => import(/* webpackChunkName: "cv" */ '../views/CvView.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import(/* webpackChunkName: "notFound" */ '../views/NotFoundView.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
