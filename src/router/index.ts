import Vue from 'vue';
import VueRouter from 'vue-router';
import VgmMap from '../components/map.vue';
Vue.use(VueRouter);
// let routes: RouteConfig[] = [
//     // {
//     //     path: '/',
//     //     name:'home',
//     //     component: HelloWorld
//     // }
// ]

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'map',
            component: VgmMap
        }
    ]
});