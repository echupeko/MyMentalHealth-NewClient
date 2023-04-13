<template>
  <div class="home">
    <div class="home__main-container"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageHome",
});
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  background: #e7e7e7;
  box-shadow: 0 0 50px rgba(darken(#397333, 25%), .5);
  &__main-container {


  }
}
</style>
