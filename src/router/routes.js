const routes = [
  {
    path: "/",
    redirect: "/meals",
  },
  {
    path: "/meals",
    component: () => import("layouts/MainNavigation.vue"),
    name: "main-navigation",
    children: [
      {
        path: "",
        component: () => import("pages/RandomMeals.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
