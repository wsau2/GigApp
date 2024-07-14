import { createRouter, createWebHistory } from 'vue-router';
import JobDetail from '../components/JobDetail.vue';

const routes = [
  {
    path: '/detail',
    name: 'JobDetail',
    component: JobDetail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
