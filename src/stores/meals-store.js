import { defineStore } from "pinia";
// https://www.themealdb.com/api/json/v1/1/lookup.php?i=53075
// https://www.themealdb.com/api/json/v1/1/random.php

export const useMealsStore = defineStore("meals", {
  state: () => ({
    meals: [],
    meal: {},
    message: "Random Meals",
    apiUrl: "https://www.themealdb.com/api/json/v1/1",
  }),
  getters: {
    getMealDetails(state) {
      return state.meals.map((meal) => {
        return {
          id: meal.idMeal,
          title: meal.strMeal,
          description: meal.strInstructions,
          imgUrl: meal.strMealThumb,
          ytUrl: meal.strYoutube,
        };
      });
    },
    getMealIngredients() {
      return (meal) => {
        let result = Object.entries(meal)
          .filter(
            ([key, value]) =>
              key.includes("strIngredient") && value.split(" ").join("") !== ""
          )
          .map(([k, value]) => {
            return { k, value };
          });
        return result;
      };
    },
    getMeasures() {
      return (meal) => {
        let result = Object.entries(meal)
          .filter(
            ([key, value]) =>
              key.includes("strMeasure") && value.split(" ").join("") !== ""
          )
          .map(([k, value]) => {
            return { k, value };
          });
        return result;
      };
    },
  },
  actions: {
    async getMealDetailsById(id) {
      const response = await fetch(`${this.apiUrl}//lookup.php?i=${id}`);
      const data = await response.json();
      if (data.meals.length) {
        this.meal = data.meals[0];
      }
    },
    async getRandomMeals() {
      for (let i = 0; i < 9; i++) {
        const response = await fetch(`${this.apiUrl}/random.php`);
        const data = await response.json();
        if (data.meals.length) {
          this.meals.push(data.meals[0]);
        }
      }
    },
  },
});
