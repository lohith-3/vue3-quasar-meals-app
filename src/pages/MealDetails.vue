<template>
  <ciruclar-progress-bar-vue v-if="!Object.keys(meal).length > 0" />
  <div class="max__w" v-else>
    <p class="text-h5 text-weight-bolder text-capitalize text-orange-5 q-pt-lg">
      {{ meal.strMeal }}
    </p>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" class="w__100" />
    <div class="row justify-between q-pt-sm">
      <p class="text-weight-bolder text-black text-h6">
        Category: <span class="text-weight-light">{{ meal.strCategory }}</span>
      </p>
      <p class="text-weight-bolder text-black text-h6">
        Area: <span class="text-weight-light">{{ meal.strArea }}</span>
      </p>
      <p class="text-weight-bolder text-black text-h6">
        Tags: <span class="text-weight-light">{{ meal.strTags }}</span>
      </p>
    </div>
    <p class="text-justify q-mt-sm text-grey-9 text-weight-regular meal__desc">
      {{ meal.strInstructions }}
    </p>
    <div class="row justify-evenly">
      <div>
        <p class="text-h5 text-weight-bold">Ingredients</p>

        <ul class="no-margin no-padding">
          <li
            class="type__none"
            v-for="(ingredient, idx) in getMealIngredients(meal)"
            :key="ingredient"
          >
            {{ idx + 1 }}. {{ ingredient.value }}
          </li>
        </ul>
      </div>
      <div>
        <p class="text-h5 text-weight-bold">Measures</p>

        <ul class="no-margin no-padding">
          <li
            class="type__none"
            v-for="(measure, idx) in getMeasures(meal)"
            :key="measure"
          >
            {{ idx + 1 }}. {{ measure.value }}
          </li>
        </ul>
      </div>
    </div>
    <q-btn
      flat
      color="white"
      class="bg-deep-orange q-mt-lg full-width q-mb-lg"
      label="YouTube"
      @click="navigateToYtUrl(meal.strYoutube)"
    />
  </div>
</template>
<script>
import { useRoute } from "vue-router";
import { useMealsStore } from "src/stores/meals-store";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import CiruclarProgressBarVue from "src/components/CiruclarProgressBar.vue";
export default {
  components: {
    CiruclarProgressBarVue,
  },
  setup() {
    const route = useRoute();
    const mealsStore = useMealsStore();
    const { meal, getMealIngredients, getMeasures } = storeToRefs(mealsStore);

    function navigateToYtUrl(url) {
      window.open(url, "_blank", "noreferrer");
    }

    onMounted(() => {
      if (+route.params.mealId) {
        mealsStore.getMealDetailsById(+route.params.mealId);
      }
    });

    return {
      route,
      meal,
      getMealIngredients,
      getMeasures,
      navigateToYtUrl,
    };
  },
};
</script>
<style scoped>
.max__w {
  max-width: 800px;
  margin: 0 auto;
}
.w__100 {
  width: 100%;
}
.meal__desc {
  word-spacing: 1px;
  font-size: 1rem;
}
.type__none {
  list-style-type: none;
}
</style>
