// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import List from './components/List'
import ListInfo from './components/ListInfo'
import ListLoadMore from './components/ListLoadMore'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store/store'

Vue.use(VueAxios, axios)
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'List',
    component: List
}, {
    path: '/ListInfo/:repoName',
    name: 'ListInfo',
    component: ListInfo
}, {
    path: '/ListLoadMore',
    name: 'ListLoadMore',
    component: ListLoadMore
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
