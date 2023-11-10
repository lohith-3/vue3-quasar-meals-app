<template>
  <div class="row justify-center items-center h_80">
    <q-circular-progress
      v-for="size in ['xl']"
      :key="size"
      :size="size"
      value="61"
      color="orange"
      class="q-ma-md"
      indeterminate
    />
  </div>
</template>
<script></script>
<style scoped>
.h_80 {
  height: 80vh;
}
</style>
