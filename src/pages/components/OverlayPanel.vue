<template>
  <div class="overlay" :class="{ '__left-side-active': activeIsRight }">
    <div class="overlay__container">
      <div v-for="(panel, index) in panels" class="overlay__panel" :key="index" :class="`__${panel.side}`">
        <h1>{{ panel.title }}</h1>
        <p>{{ panel.subtitle }}</p>
        <base-button outline rounded negative :title="panel.side === 'right' ? 'Sign Up' : 'Sign In'" @click="$emit('toggle-panel')" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseButton from "@/components/BaseButton.vue";

export default defineComponent({
  name: "OverlayPanel",
  components: { BaseButton },
  props: {
    activeIsRight: { type: Boolean, required: true },
  },
  setup() {
    const panels = [
      {
        title: "Welcome Back!",
        subtitle: "To keep connected with us please login with your personal info",
        side: "left",
      },
      {
        title: "Hello, Friend!",
        subtitle: "Enter your personal details and start journey with us",
        side: "right",
      },
    ]; //описать тип
    return { panels };
  },
});
</script>

<style lang="scss" scoped>
.overlay {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;

  &.__left-side-active {
    transform: translateX(-100%);
    .overlay {
      &__container {
        transform: translateX(50%);
      }
      &__panel {
        &.__left {
          transform: translateY(0);
        }
        &.__right {
          transform: translateY(20%);
        }
      }
    }
  }

  &__container {
    background: var(--green);
    background: linear-gradient(to right, var(--green-lighten), var(--green)) no-repeat 0 0 / cover;
    color: #fff;
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    transform: translateY(0);
    transition: transform 0.6s ease-in-out;
  }

  &__panel {
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 40px;
    height: 100%;
    width: 50%;
    text-align: center;
    transform: translateY(0);
    transition: transform 0.6s ease-in-out;

    &.__right {
      right: 0;
      transform: translateY(0);
    }

    &.__left {
      transform: translateY(-20%);
    }
  }
}
</style>
