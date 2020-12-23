import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Projects from "../views/Projects.vue";
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
    path: "/about",
    name: "ABOUT",
    component: About,
    props: true
  },
  {
    path: "/projects",
    name: "PROJECTS",
    component: Projects,
    props: true
  },
  {
    path: "/contact",
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
