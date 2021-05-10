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
        path: "/issue",
        name: "Issue",
        component: () =>
          import(
            /* webpackChunkName: "issue" */ "../components/Issue/IssueContent.vue"
          ),
      },
    ],
  },
  // {
  //   path: "/issue",
  //   name: "Issue",
  //   redirect: "/issueHome",
  //   component: () =>
  //     import(/* webpackChunkName: "IssuesHome" */ "../views/IssuesHome.vue"),
  //   children: [
  //     {
  //       path: "/issueHome",
  //       name: "IssueHome",
  //       component: () =>
  //         import(
  //           /* webpackChunkName: "issuetest" */ "../components/Issue/IssueTest.vue"
  //         ),
  //     },
  //     {
  //       path: ":issueID",
  //       name: "IssueID",
  //       component: () =>
  //         import(
  //           /* webpackChunkName: "issuePage" */ "../components/Issue/IssueDetail.vue"
  //         ),
  //     },
  //   ],
  // },
  {
    path: "/notes",
    name: "Note",
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
