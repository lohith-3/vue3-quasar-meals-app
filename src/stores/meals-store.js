import { defineStore } from "pinia";

export const useMealsStore = defineStore("meals", {
  state: () => ({
    meals: [],
    message: "Random Meals",
    apiUrl: "https://www.themealdb.com/api/json/v1/1/random.php",
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
  },
  actions: {
    async getRandomMeals() {
      for (let i = 0; i < 9; i++) {
        const response = await fetch(this.apiUrl);
        const data = await response.json();
        if (data.meals.length) {
          console.log(data.meals[0]);
          this.meals.push(data.meals[0]);
        }
      }
    },
  },
});
