import {createRouter, createWebHistory} from "vue-router";
import Index from '@/views/Index.vue'
import i18n from "@/i18n/i18n.js";

const routes = [
    {
        path: '/',
        redirect: `/${i18n.global.locale}` // Перенаправление на текущий язык по умолчанию
    },
    {
        path:'/:lang(en|ru)?',
        component:Index,
        beforeEnter: (to, from, next) => {
            const lang = to.params.lang || 'en';
            if (!['en', 'ru'].includes(lang)) return next('en');
            if (i18n.global.locale !== lang) {
                i18n.global.locale = lang;
            }
            return next();
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    if (!to.params.lang) {
        return next(`/${i18n.global.locale}`);
    }
    return next();
});

export default router