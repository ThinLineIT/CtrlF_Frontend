import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: "/main",
    component: () => import(/* webpackChunkName: "Home" */ "../views/Home.vue"),
    children: [
      {
        path: "main",
        name: "Main",
        component: () =>
          import(/* webpackChunkName: "main" */ "../components/Home/Main.vue"),
      },
      {
        path: "issue",
        name: "Issue",
        component: () =>
          import(
            /* webpackChunkName: "HomeIssue" */ "../components/Home/HomeIssues.vue"
          ),
      },
    ],
  },
  {
    path: "/notes",
    name: "Note",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Notes" */ "../views/Notes.vue"),
    children: [
      {
        path: ":noteID",
        name: "NoteID",
        component: () =>
          import(
            /* webpackChunkName: "NoteCreate" */ "../components/Note/NoteContent.vue"
          ),
      },
      {
        path: "create",
        name: "Create",
        component: () =>
          import(
            /* webpackChunkName: "NoteCreate" */ "../components/Note/NoteCreate.vue"
          ),
      },
    ],
  },
  // {
  //   path: "/issues",
  //   name: "Issue",
  //   component: () =>
  //     import(
  //       /* webpackChunkName: "about" */ "../components/Home/HomeIssues.vue"
  //     ),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
