

import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Listing from '@/components/Listing'
import Preview from '@/components/Preview'

Vue.use(Router)

export default new Router({
    routes: [
    {
        path: '/',
        name: 'Listing',
        component: Listing
    },
    {
        path: '/product/:id',
        name: 'Product',
        component: Preview
    }
    ]
})