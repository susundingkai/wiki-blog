import { createRouter, createWebHistory } from "vue-router";

// 路由信息
const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/index/home.vue"),
  },
  {
    path: "/management",
    name: "management",
    component: () => import("../views/Manage.vue"),
  },
  {
    path: "/article",
    name: "article",
    component: () => import("../components/Vditor.vue"),
  },
  {
    path: "/detail/:id",
    name: "show-article",
    component: () => import("../views/blog/article.vue"),
  },
  {
    path: "/todo",
    name: "todo",
    component: () => import("../views/index/todo.vue"),
  },
  {
    path: "/blogs",
    name: "blogs",
    component: () => import("../views/index/blogs.vue"),
    // children: [
    //   {
    //      path: "timeline",
    //      name: "timeline",
    //      component: () => import('../views/blog/timeline.vue'),
    //      props: true,
    //      meta: {title: "首页"}
    //   }
    // ]
  },
  {
    path: "/timeline",
    name: "timeline",
    component: () => import("../views/blog/timeline.vue"),
    //props: true,
    //meta: {title: "首页"}
  },
  {
    path: "/navi",
    name: "navi",
    redirect: "/navi/menu1-1-1",
    component: () => import("../views/index/navi.vue"),
    children: [
      {
        path: "menu1-1-1",
        name: "computer network",
        component: () => import("../views/navi/menu1/menu1-1-1.vue"),
      },
      {
        path: "menu1-1-2",
        name: "os",
        component: () => import("../views/navi/menu1/menu1-1-2.vue"),
      },
      {
        path: "menu1-1-3",
        name: "data structure",
        component: () => import("../views/navi/menu1/menu1-1-3.vue"),
      },
      {
        path: "menu3-1-1",
         name: "backend",
        component: () => import("../views/navi/menu3/menu3-1-1.vue"),
      },
      {
        path: "menu3-1-2",
        name: "frontend",
        component: () => import("../views/navi/menu3/menu3-1-2.vue"),
      },
      {
        path: "menu3-2",
        name: "tools",
        component: () => import("../views/navi/menu3/menu3-2.vue"),
      },
      {
        path: "menu3-3",
        name: "tutorial",
        component: () => import("../views/navi/menu3/menu3-3.vue"),
      },
      {
        path: "menu3-4",
        name: "projects",
        component: () => import("../views/navi/menu3/menu3-4.vue"),
      },
      {
        path: "menu3-5",
        name: "life",
        component: () => import("../views/navi/menu3/menu3-5.vue"),
      },
      {
        path: "menu3-6",
        name: "episodes",
        component: () => import("../views/navi/menu3/menu3-6.vue"),
      },
      // {
      //   path: "links",
      //   name: "links",
      //   component: () => import("../Manage.vue"),
      // },
      // {
      //   path: "tools",
      //   name: "tools",
      //   component: () => import("../views/navi/tools.vue"),
      // },
      // {
      //   path: "cs",
      //   name: "cs",
      //   component: () => import("../views/navi/cs.vue"),
      // },
      // {
      //   path: "frontend",
      //   name: "frontend",
      //   component: () => import("../views/navi/frontend.vue"),
      // },
      // {
      //   path: "backend",
      //   name: "backend",
      //   component: () => import("../views/navi/backend.vue"),
      // },
      // {
      //   path: "projects",
      //   name: "projects",
      //   component: () => import("../views/navi/projects.vue"),
      // },
    ],
  },

  //navi的兄弟

  //   {
  //       path: "/navi/tools",
  //       name: "tools",
  //       component: () => import('../views/navi/tools.vue'),
  //   },
  //   {
  //     path: "/navi/projects",
  //     name: "projects",
  //     component: () => import('../views/navi/projects.vue'),
  // },
  //   {
  //     path: "/navi/cs",
  //     name: "cs",
  //     component: () => import('../views/navi/cs.vue'),
  //   },
  //   {
  //     path: "/navi/frontend",
  //     name: "frontend",
  //     component: () => import('../views/navi/frontend.vue'),
  //   },
  //   {
  //     path: "/navi/backend",
  //     name: "backend",
  //     component: () => import('../views/navi/backend.vue'),
  //   },

  //没有当前的路径的话，就404
  {
    path: "/:catchAll(.*)",
    component: () => import("../views/NotFound.vue"),
  },
];

// 导出路由
const router = createRouter({
  history: createWebHistory(),
  routes,
});
//让不同路由切换时都自动到返回到页面顶部 参考https://www.cnblogs.com/dfyg-xiaoxiao/p/10337557.html
router.afterEach((to, from) => {
  let bodySrcollTop = document.body.scrollTop
  if (bodySrcollTop !== 0) {
    document.body.scrollTop = 0
    return
  }
  let docSrcollTop = document.documentElement.scrollTop
  if (docSrcollTop !== 0) {
    document.documentElement.scrollTop = 0
  }
})

export default router;
