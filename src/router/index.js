import { createRouter, createWebHistory } from "vue-router";
import i18n from "@/i18n/i18n.js";

import Index from "@/views/Index.vue";
import About from "@/views/About.vue";
import Contacts from "@/views/Contacts.vue";
import Products from "@/views/Products.vue";
import Services from "@/views/Services.vue";
import Careers from "@/views/Careers.vue";

const routes = [
    {
        path: "/",
        redirect: to => `/${i18n.global.locale}`
    },
    {
        path: "/:lang(en|ru)?",
        component: Index,
        beforeEnter: (to, from, next) => {
            const lang = to.params.lang || i18n.global.locale;
            if (!["en", "ru"].includes(lang)) return next("/en");
            if (i18n.global.locale !== lang) {
                i18n.global.locale = lang;
            }
            return next();
        }
    },
    {
        path: "/:lang(en|ru)?/about",
        name: "about",
        component: About,
        meta: {}
    },
    {
        path: "/:lang(en|ru)?/contacts",
        name: "contacts",
        component: Contacts,
        meta: {}
    },
    {
        path: "/:lang(en|ru)?/services",
        name: "services",
        component: Services,
        meta: {}
    },
    {
        path: "/:lang(en|ru)?/products",
        name: "products",
        component: Products,
        meta: {}
    },
    {
        path: "/:lang(en|ru)?/careers",
        name: "careers",
        component: Careers,
        meta: {}
    },
    // Redirects for paths without language prefix
    {
        path: "/about",
        redirect: (to) => `/${i18n.global.locale}/about`
    },
    {
        path: "/contacts",
        redirect: (to) => `/${i18n.global.locale}/contacts`
    },
    {
        path: "/services",
        redirect: (to) => `/${i18n.global.locale}/services`
    },
    {
        path: "/products",
        redirect: (to) => `/${i18n.global.locale}/products`
    },
    {
        path: "/careers",
        redirect: (to) => `/${i18n.global.locale}/careers`
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

// Global navigation guard for handling language
router.beforeEach((to, from, next) => {
    if (!to.params.lang) {
        return next(`/${i18n.global.locale}${to.path}`);
    }
    return next();
});

export default router;
