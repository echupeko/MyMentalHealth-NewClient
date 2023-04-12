<template>
  <input
    :class="{ __outline: outline, __transparent: transparent, __rounded: rounded, __negative: negative }"
    :type="type"
    :placeholder="placeholder"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseInput",
  props: {
    type: { type: String },
    placeholder: { type: String },
    outline: { type: Boolean },
    transparent: { type: Boolean },
    rounded: { type: Boolean },
    negative: { type: Boolean },
  },
});
</script>

<style lang="scss" scoped>
input {
  border: 1px solid transparent;
  background: #eee;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
  transition: border .3s ease-in-out;
  &:hover {
    border-color: gray;
  }
  &:focus {
    border-color: var(--green-lighten);
  }
  &:focus-visible {
    outline: none;
  }
  &.__negative {
    background: #262626;
    color: #fff;
  }
  &.__outline {
    border-color: var(--green);
    &.__negative {
      border-color: #fff;
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
