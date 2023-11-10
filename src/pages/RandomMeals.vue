<template>
  <ciruclar-progress-bar-vue v-if="meals.length < 7" />
  <div class="max__w" v-else>
    <h4 class="no-margin q-py-lg text-orange">{{ message }}</h4>
    <div class="row justify-center q-col-gutter-lg q-mb-xl">
      <meal-item
        v-for="meal in getMealDetails"
        :key="meal.id"
        :meal="meal"
      ></meal-item>
    </div>
  </div>
</template>
<script>
import MealItem from "src/components/MealItem.vue";
import { storeToRefs } from "pinia";
import { useMealsStore } from "../stores/meals-store";
import { onMounted } from "vue";
import CiruclarProgressBarVue from "src/components/CiruclarProgressBar.vue";
export default {
  components: {
    MealItem,
    CiruclarProgressBarVue,
  },
  setup() {
    const mealsStore = useMealsStore();
    const { meals, message, getMealDetails } = storeToRefs(mealsStore);

    onMounted(async () => {
      await mealsStore.getRandomMeals();
    });

    return {
      message,
      getMealDetails,
      meals,
    };
  },
};
</script>
<style scoped>
.max__w {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
