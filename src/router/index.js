import {createRouter, createWebHistory} from "vue-router";
import i18n from "@/i18n/i18n.js";

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
import NotFound from "@/views/NotFound.vue";
import AndroidDeveloper from "@/views/careers/AndroidDeveloper.vue";
import SalesManager from "@/views/careers/SalesManager.vue";
import BaCrm from "@/views/careers/BaCrm.vue";
import PythonDeveloper from "@/views/careers/PythonDeveloper.vue";

const routes = [
    {
        path: "/",
        redirect: to => `/${i18n.global.locale}`
    },
    {
        path: "/:lang(en|ru)?",
        component: Index,
        meta: {},
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
        meta: {},
        children: [
            {
                path: "software-development",
                name: "software-development",
                component: SoftwareDevelopment
            },
            {
                path: "product-development",
                name: "product-development",
                component: ProductDevelopment
            },
            {
                path: "web-development",
                name: "web-development",
                component: WebDevelopment
            },
            {
                path: "crm-erp-development",
                name: "crm-erp-development",
                component: CrmErpDevelopment
            },
            {
                path: "mobile-app-development",
                name: "mobile-app-development",
                component: MobileAppDevelopment
            },
            {
                path: "ux-ui-design",
                name: "ux-ui-design",
                component: UxUiDesign
            }
        ]
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
        meta: {},
        children: [
            {
                path: "android-developer",
                name: "android-developer",
                component: AndroidDeveloper
            },
            {
                path: "sales-manager",
                name: "sales-manager",
                component: SalesManager
            },
            {
                path: "ba-crm",
                name: "ba-crm",
                component: BaCrm
            },
            {
                path: "python-developer",
                name: "python-developer",
                component: PythonDeveloper
            }
        ]
    },
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
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: NotFound
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    if (!to.params.lang) {
        return next(`/${i18n.global.locale}${to.path}`);
    }
    return next();
});

export default router;
