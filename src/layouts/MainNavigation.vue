<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-white text-orange q-pa-sm">
      <q-toolbar>
        <q-toolbar-title class="text-h4"> Meals </q-toolbar-title>
        <q-space />
        <div class="row">
          <router-link
            to="#"
            class="q-px-sm text-black text-weight-regular text__spacing_dec"
            >Search Meals</router-link
          >
          <router-link
            to="#"
            class="q-px-sm text-black text-weight-regular text__spacing_dec"
            >Meals By Letter</router-link
          >
          <router-link
            to="#"
            class="p-px-sm text-black text-weight-regular text__spacing_dec"
            >Meals By Ingredients</router-link
          >
          <!-- <q-btn
            class="text-capitalize letter-spacing"
            flat
            color="black"
            label="Search Meals"
          />
          <q-btn
            class="text-capitalize letter-spacing"
            flat
            color="black"
            label="Meals By Letter"
          />
          <q-btn
            class="text-capitalize letter-spacing"
            flat
            color="black"
            label="Meals By Ingredients"
          /> -->
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    const message = ref("Hello world");

    return {
      message,
    };
  },
};
</script>
<style scoped>
.text__spacing_dec {
  letter-spacing: 1px;
  text-decoration: none;
  font-size: 1rem;
}
.text__spacing_dec:hover {
  text-decoration: underline;
}
</style>
