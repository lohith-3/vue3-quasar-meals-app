<template>
  <div class="col-xs-12 col-sm-4 zoom">
    <q-card flat bordered class="bx__shadow">
      <q-img :src="meal.imgUrl" class="img cursor__p" />

      <q-card-section>
        <div class="text-h5 q-mt-sm q-mb-xs">
          {{ truncateWords(meal.title, 30) }}
        </div>
        <div class="text-caption text-weight-regular">
          {{ truncateWords(meal.description, 150) }}
        </div>
      </q-card-section>

      <q-card-actions>
        <q-btn
          flat
          color="white"
          class="bg-deep-orange"
          label="YouTube"
          @click="navigateToYtUrl(meal.ytUrl)"
        />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import { truncateWords } from "../filters/index";
export default {
  props: {
    meal: {
      type: Object,
      required: true,
    },
  },
  setup() {
    function navigateToYtUrl(url) {
      window.open(url, "_blank", "noreferrer");
    }

    return {
      truncateWords,
      navigateToYtUrl,
    };
  },
};
</script>
<style scoped>
.img {
  max-width: 100%;
  object-fit: cover;
  height: 14rem;
}
.bx__shadow {
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px !important;
}
.cursor__p {
  cursor: pointer;
}
.zoom {
  transition: transform 0.2s; /* Animation */
}
.zoom:hover {
  transform: scale(1.05);
}
</style>
