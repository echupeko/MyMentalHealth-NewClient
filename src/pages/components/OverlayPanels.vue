<template>
  <div class="overlay" :class="{ '__right-panel-active': isSignup }">
    <div class="overlay__container">
      <div v-for="(panel, index) in panels" :key="index" class="overlay__panel" :class="`__${panel.side}`">
        <h1>{{ panel.title }}</h1>
        <p>{{ panel.subtitle }}</p>
        <button class="ghost" id="signIn" @click="$emit('toggle-signup')">
          {{ panel.side === "right" ? "Sign Up" : "Sign In" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "OverlayPanels",
  props: {
    isSignup: { type: Boolean, required: true },
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
    ];
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

  &.__right-panel-active {
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

  button {
    border-radius: 20px;
    border: 1px solid var(--green);
    background: var(--green);
    color: #fff;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
  }

  button:active {
    transform: scale(0.95);
  }

  button:focus {
    outline: none;
  }

  button.ghost {
    background: transparent;
    border-color: #fff;
  }
}
</style>
