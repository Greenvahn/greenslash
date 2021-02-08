import { createRouter, createWebHistory} from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Work from "../views/Work.vue";
import Contact from "../views/Contact.vue";
import NotFound from "../views/NotFound.vue";
import routerRender from "../components/routerRender.vue"
import i18n from '../i18n'


const routes = [
  {
    path: '/',
    redirect: `/${i18n.locale}`
  },
  {
    path: "/:lang",
    component: routerRender,
    props: true,
    children: [
      {
        path: "",
        name: "home",
        component: Home,
        props: true,
      },
      {
        path: "about",
        name: "about",
        component: About,
        props: true,
      },
      {
        path: "work",
        name: "work",
        component: Work,
        props: true,
      },
      {
        path: "contact",
        name: "contact",
        component: Contact,
        props: true,
      },
      // Cacth 404
      {
        path: ":catchAll(.*)",
        name: "404",
        component: NotFound,
        props: true,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
