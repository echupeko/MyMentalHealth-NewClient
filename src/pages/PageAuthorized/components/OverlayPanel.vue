<template>
  <div class="overlay" :class="classes">
    <h1>{{ panel.title }}</h1>
    <p>{{ panel.subtitle }}</p>
    <base-button outline rounded negative :content="buttonContent" @click="$emit('toggle-panel')" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { AuthorizeOverlay, OverlaySide } from "@/types";
import BaseButton from "@/components/BaseButton.vue";

export default defineComponent({
  name: "OverlayPanel",
  components: { BaseButton },
  props: {
    isSignup: { type: Boolean, required: true },
    panel: { type: Object as () => AuthorizeOverlay, required: true },
  },
  setup(props) {
    const buttonContent = computed(() => (props.panel.side === OverlaySide.RIGHT ? "Зарегистрироваться" : "Войти"));
    const classes = computed(() => [
      `__${props.panel.side.toString()}`,
      ...((props.panel.side === OverlaySide.RIGHT && !props.isSignup) ||
      (props.panel.side === OverlaySide.LEFT && props.isSignup)
        ? ["__active"]
        : []),
    ]);
    return { buttonContent, classes };
  },
});
</script>

<style lang="scss" scoped>
.overlay {
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
  transform: translateX(100%);
  transition: transform 0.6s ease-in-out;

  &.__right {
    right: 0;
    transform: translate(100%, 20%);

    &.__active {
      transform: translateY(0);
    }
  }

  &.__left {
    transform: translate(0, -20%);

    &.__active {
      transform: translateX(100%);
    }
  }
}
</style>
