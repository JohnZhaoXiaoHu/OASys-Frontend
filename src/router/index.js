import Vue from 'vue'
import store from "../store";
import VueRouter from 'vue-router'
import Admin from "../layout/Admin";
import Index from "../views/Index";
import Login from "../views/Login";
import Sign from "../views/Sign";
import SignRecord from "../views/SignRecord"
import NotFound from "../views/NotFound";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Admin,
        children: [
            {
                path: '',
                name: 'index',
                component: Index,
            },
            {
                path: '/sign',
                name: 'sign',
                component: Sign,
            },
            {
                path: '/sign-record',
                name: 'sign-record',
                component: SignRecord,
            },
        ]
    },
    {
        name: 'login',
        path: '/login',
        component: Login
    },
    {
        path: '*',
        component: NotFound
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

router.beforeEach((to, from, next) => {
    if (store.state.auth || to.name === 'login') {
        next();
    } else if (from.name === 'login' && to.name === 'index') {
        next();
    } else {
        router.push({name: 'login'})
    }
});

export default router
