import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "Home" */ "../views/Home.vue"),
  },
  {
    path: "/notes",
    name: "Note",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Notes" */ "../views/Notes.vue"),
      children : [{
        path: "/create",
        name: "Create",
        component: () =>
          import(/* webpackChunkName: "NoteCreate" */ "../components/Note/NoteCreate.vue"),
      }]
  },
  {
    path: "/issues",
    name: "Issue",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Home/HomeIssues.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
