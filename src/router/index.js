import {createRouter, createWebHistory} from "vue-router";
import Index from '@/views/Index.vue'
import About from '@/views/About.vue'
import Services from '@/views/Services.vue'
import Products from '@/views/Products.vue'
import Contacts from '@/views/Contacts.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/services',
            name: 'Services',
            component: Services
        },
        {
            path: '/products',
            name: 'Products',
            component: Products
        },
        {
            path: '/contacts',
            name: 'Contacts',
            component: Contacts
        }
    ]


})

export default router