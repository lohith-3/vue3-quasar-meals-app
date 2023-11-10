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
        name: "random-meals",
        component: () => import("pages/RandomMeals.vue"),
      },
      {
        path: ":mealId",
        name: "meal-details",
        component: () => import("pages/MealDetails.vue"),
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
