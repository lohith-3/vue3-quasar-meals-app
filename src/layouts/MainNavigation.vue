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
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script>
export default {
  components: {},
  setup() {
    return {};
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
