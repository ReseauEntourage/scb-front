import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const loadAPropos = () => import(/* webpackChunkName: "APropos" */ '../views/APropos.vue');
const loadDefis = () => import(/* webpackChunkName: "Defis" */ '../views/Defis.vue');
const loadDefi = () => import(/* webpackChunkName: "Defi" */ '../views/Defi.vue');
const loadParcours = () => import(/* webpackChunkName: "Parcours" */ '../views/Parcours.vue');
const loadConclusion = () => import(/* webpackChunkName: "Conclusion" */ '../views/Conclusion.vue');
const loadParcour = () => import(/* webpackChunkName: "Parcour" */ '../views/Parcour.vue');
const loadChapitre = () => import(/* webpackChunkName: "Chapitre" */ '../views/Chapitre.vue');
const loadArticle = () => import(/* webpackChunkName: "Article" */ '../views/Article.vue');
const loadReponse = () => import(/* webpackChunkName: "Reponse" */ '../views/Response.vue');

const routes: Array<RouteRecordRaw> = [
  { component: Home, name: 'Home', path: '/' },
  { component: loadAPropos, name: 'APropos', path: '/a-propos' },
  { component: loadDefis, name: 'Defis', path: '/defis' },
  { component: loadDefi, name: 'Defi', path: '/defis/:id' },
  { component: loadParcours, name: 'Parcours', path: '/parcours' },
  { component: loadParcour, name: 'Parcour', path: '/parcours/:parcourSlug' },
  { component: loadConclusion, name: 'Conclusion', path: '/parcours/:parcourSlug/conclusion' },
  { component: loadChapitre, name: 'Chapitre', path: '/parcours/:parcourSlug/:chapitreSlug' },
  { component: loadArticle, name: 'Article', path: '/parcours/:parcourSlug/:chapitreSlug/:articleSlug' },
  { component: loadReponse, name: 'Reponse', path: '/parcours/:parcourSlug/:chapitreSlug/:articleSlug/:value' },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
