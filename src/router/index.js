import {createRouter, createWebHistory} from "vue-router";
import {nextTick} from 'vue';
import i18n, { availableLanguages } from '@/i18n/i18n.js';

import Index from "@/views/Index.vue";
import About from "@/views/About.vue";
import Contacts from "@/views/Contacts.vue";
import Products from "@/views/Products.vue";
import Services from "@/views/Services.vue";
import Careers from "@/views/Careers.vue";

import SoftwareDevelopment from "@/views/services/SoftwareDevelopment.vue";
import ProductDevelopment from "@/views/services/ProductDevelopment.vue";
import WebDevelopment from "@/views/services/WebDevelopment.vue";
import CrmErpDevelopment from "@/views/services/CrmErpDevelopment.vue";
import MobileAppDevelopment from "@/views/services/MobileAppDevelopment.vue";
import UxUiDesign from "@/views/services/UxUiDesign.vue";

import AndroidDeveloper from "@/views/careers/AndroidDeveloper.vue";
import SalesManager from "@/views/careers/SalesManager.vue";
import BaCrm from "@/views/careers/BaCrm.vue";
import PythonDeveloper from "@/views/careers/PythonDeveloper.vue";

import Policy from "@/views/Policy.vue";
import NotFound from "@/views/NotFound.vue";

const getCurrentLocale = () => i18n.global.locale.value || 'ru';

const routes = [
    {
        path: '/',
        redirect: () => `/${getCurrentLocale()}`,
    },
    {
        path: '/:lang(ru|en)?',
        name: 'home',
        component: Index,
    },

    {
        path: "/:lang(ru|en)?/about",
        name: "about",
        component: About,
        meta: {}
    },
    {
        path: '/:lang(ru|en)?/contacts',
        name: 'contacts',
        component: Contacts,
        meta: {}
    },

    {
        path: '/:lang(ru|en)?/services',
        name: 'services',
        component: Services,
        meta: {},
        children: [
            {
                path: 'software-development',
                name: 'software-development',
                component: SoftwareDevelopment,
            },
            {
                path: 'product-development',
                name: 'product-development',
                component: ProductDevelopment,
            },
            {
                path: 'web-development',
                name: 'web-development',
                component: WebDevelopment,
            },
            {
                path: 'crm-erp-development',
                name: 'crm-erp-development',
                component: CrmErpDevelopment,
            },
            {
                path: 'mobile-app-development',
                name: 'mobile-app-development',
                component: MobileAppDevelopment,
            },
            {
                path: 'ux-ui-design',
                name: 'ux-ui-design',
                component: UxUiDesign,
            },
        ],
    },

    {
        path: '/:lang(ru|en)?/products',
        name: 'products',
        component: Products,
        meta: {}
    },

    {
        path: '/:lang(ru|en)?/careers',
        name: 'careers',
        component: Careers,
        meta: {},
        children: [
            {
                path: 'android-developer',
                name: 'android-developer',
                component: AndroidDeveloper,
            },
            {
                path: 'sales-manager',
                name: 'sales-manager',
                component: SalesManager,
            },
            {
                path: 'crm',
                name: 'crm',
                component: BaCrm,
            },
            {
                path: 'python-developer',
                name: 'python-developer',
                component: PythonDeveloper,
            },
        ],
    },

    {
        path: '/:lang(ru|en)?/policy',
        name: 'policy',
        component: Policy,
        meta: {}
    },

    {
        path: '/about',
        redirect: () => `/${getCurrentLocale()}/about`,
    },
    {
        path: '/contacts',
        redirect: () => `/${getCurrentLocale()}/contacts`,
    },
    {
        path: '/services',
        redirect: () => `/${getCurrentLocale()}/services`,
    },
    {
        path: '/products',
        redirect: () => `/${getCurrentLocale()}/products`,
    },
    {
        path: '/careers',
        redirect: () => `/${getCurrentLocale()}/careers`,
    },
    {
        path: '/policy',
        redirect: () => `/${getCurrentLocale()}/policy`,
    },

    {
        path: '/:lang(ru|en)?/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return new Promise((resolve) => {
            nextTick(() => {
                setTimeout(() => {
                    resolve({top: 0, behavior: "smooth"});
                }, 500);
            });
        });
    },
});

router.beforeEach((to, from, next) => {
    const lang = to.params.lang || getCurrentLocale();

    if (!to.params.lang) {
        return next({ path: `/${getCurrentLocale()}${to.fullPath}`, replace: true });
    }

    if (!availableLanguages.includes(lang)) {
        return next({ path: '/ru', replace: true });
    }

    if (i18n.global.locale.value !== lang) {
        i18n.global.locale.value = lang;
        //для SEO
        document.documentElement.lang = lang;
    }

    return next();
});

export default router;
