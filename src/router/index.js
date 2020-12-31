import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Work from "../views/Work.vue";
import Contact from "../views/Contact.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "HOME",
    component: Home,
    props: true
  },
  {
    path: "/ABOUT",
    name: "ABOUT",
    component: About,
    props: true
  },
  {
    path: "/WORK",
    name: "WORK",
    component: Work,
    props: true
  },
  {
    path: "/CONTACT",
    name: "CONTACT",
    component: Contact,
    props: true
  },
  // Cacth 404
  {
    path : '/:catchAll(.*)',
    name: '404',
    component: NotFound,
    props: true
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});


export default router;
