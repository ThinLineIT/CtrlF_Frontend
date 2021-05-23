import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "Home" */ "../views/Home.vue"),
    children: [
      {
        path: "/",
        name: "Main",
        component: () =>
          import(/* webpackChunkName: "main" */ "../components/Home/Main.vue"),
      },
      {
        path: "/issue",
        name: "Issue",
        component: () =>
          import(
            /* webpackChunkName: "issue" */ "../components/Issue/IssueContent.vue"
          ),
      },
    ],
  },
  {
    path: "/notes",
    name: "Note",
    component: () =>
      import(/* webpackChunkName: "Notes" */ "../views/Notes.vue"),
    children: [
      {
        path: ":noteID",
        name: "NotePage",
        component: () =>
          import(
            /* webpackChunkName: "NoteCreate" */ "../components/Note/NoteContent.vue"
          ),
      },
      {
        path: ":noteID/create",
        name: "create-page",
        component: () =>
          import(
            /* webpackChunkName: "NoteCreate" */ "../components/Note/NoteCreate.vue"
          ),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
