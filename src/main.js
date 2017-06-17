// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import HomeInfo from './components/HomeInfo'
import About from './components/About'
import Other from './components/Other'
import Home from './components/Home'
import Demo1 from './components/demo/Demo1'
import Demo2 from './components/demo/Demo2'
import Demo3 from './components/demo/Demo3'
import Demo4 from './components/demo/Demo4'

import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store/store'

Vue.use(VueAxios, axios)
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
}, {
    path: '/HomeInfo/:repo',
    name: 'HomeInfo',
    component: HomeInfo
},{
    path: '/Other',
    name: 'Other',
    component: Other
}, {
    path: '/About',
    name: 'About',
    component: About
}, {
    path: '/Demo1',
    name: 'Demo1',
    component: Demo1
}, {
    path: '/Demo2',
    name: 'Demo2',
    component: Demo2
}, {
    path: '/Demo3',
    name: 'Demo3',
    component: Demo3
}, {
    path: '/Demo4',
    name: 'Demo4',
    component: Demo3
}]

const router = new VueRouter({
    routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app-box')
