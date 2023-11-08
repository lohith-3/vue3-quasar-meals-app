<template>
  <div class="max__w">
    <h4 class="no-margin q-py-lg text-orange">{{ message }}</h4>
    <div class="row justify-center q-col-gutter-lg">
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
export default {
  components: {
    MealItem,
  },
  setup() {
    const mealsStore = useMealsStore();
    const { message, getMealDetails } = storeToRefs(mealsStore);

    onMounted(async () => {
      await mealsStore.getRandomMeals();
    });

    return {
      message,
      getMealDetails,
    };
  },
};
</script>
<style scoped>
.max__w {
  /* padding: 0 6rem; */
  max-width: 1200px;
  margin: 0 auto;
}
</style>
