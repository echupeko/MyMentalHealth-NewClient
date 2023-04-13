<template>
  <button :class="{ __outline: outline, __transparent: transparent, __rounded: rounded, __negative: negative }">
    {{ content }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseButton",
  props: {
    content: { type: String },
    outline: { type: Boolean },
    transparent: { type: Boolean },
    rounded: { type: Boolean },
    negative: { type: Boolean },
  },
});
</script>

<style lang="scss" scoped>
button {
  border: 1px solid transparent;
  background: var(--green);
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: transform 80ms ease-in;

  &:active {
    transform: scale(0.95);
  }

  &:focus {
    outline: none;
  }

  &.__negative {
    background: #fff;
    color: var(--green);
  }

  &.__outline {
    background: transparent;
    border-color: var(--green);

    &.__negative {
      border-color: #fff;
      color: #fff;
    }
  }

  &.__rounded {
    border-radius: 100px;
  }

  &.__transparent {
    background: transparent;
    color: #262626;
  }
}
</style>
